const express = require("express");
const router = express.Router();
const Visits = require("../models/visits/Visits");
const mongoose = require("mongoose");

router.get("/api/dashboard/", async (req, res) => {
    try {
        if (req.user) {

            const visitsByDays = await Visits.aggregate([
                {
                    $match: {
                        doctorId: new mongoose.Types.ObjectId(req.user._id)
                    }
                },

                {
                    $addFields: {
                        date: {
                            $let: {
                                vars: {
                                    day: {
                                        $dayOfMonth: {
                                            date: "$created",
                                            'timezone': process.env.TZ
                                        }
                                    },
                                    remainder: {
                                        $mod: [
                                            {
                                                $dayOfMonth: {
                                                    date: "$created",
                                                    'timezone': process.env.TZ
                                                }
                                            },
                                            1
                                        ]
                                    },

                                },
                                in: {
                                    $dateFromParts: {
                                        year: {
                                            $year: {
                                                date: "$created",
                                                'timezone': process.env.TZ
                                            }
                                        },
                                        month: {
                                            $month: {
                                                date: "$created",
                                                'timezone': process.env.TZ
                                            }
                                        },
                                        day: {
                                            $subtract: [
                                                "$$day",
                                                "$$remainder"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                {
                    $group: {
                        _id: "$date",
                        day: {
                            $last: "$date"
                        },
                        numberOfAppointments: {
                            $sum: 1
                        },
                        newPatients: {
                            $sum: {
                                $cond: [
                                    "$isReturnVisit",
                                    0,
                                    1
                                ]
                            }
                        },
                        oldPatients: {
                            $sum: {
                                $cond: [
                                    "$isReturnVisit",
                                    1,
                                    0
                                ]
                            }
                        },
                        totalRevenue: {
                            $sum: "$visitCost"
                        },
                        revenuePerPatient: {
                            $avg: "$visitCost"
                        }
                    }
                },
                {
                    $sort: {
                        day: 1
                    }
                }
            ])

            const prescripedDrugs = await Visits.aggregate([
                {
                    $match: {
                        doctorId: new mongoose.Types.ObjectId(req.user._id)
                    }
                },
                {
                    $unwind: "$prescription"
                },
                {
                    $group: {
                        _id: "$prescription.Name",
                        total: {
                            $sum: 1
                        }
                    }
                }
            ])

            const diagnoses = await Visits.aggregate([
                {
                    $match: {
                        doctorId: new mongoose.Types.ObjectId(req.user._id)
                    }
                },
                {
                    $group: {
                        _id: "$patientDiagnosis",
                        count: {
                            $sum: 1
                        }
                    }
                }
            ])

            const patientsAgeDistribution = await Visits.aggregate([
                {
                    $lookup: {
                        from: "patients",
                        localField: "patientId",
                        foreignField: "_id",
                        as: "patient"
                    }
                },
                {
                    $unwind: "$patient"
                },
                {
                    $match: {
                        $and: [
                            { doctorId: new mongoose.Types.ObjectId(req.user._id) },
                            {
                                "patient.patientBirthDate": {
                                    $exists: true,
                                    $ne: null
                                }
                            }
                        ]
                    }
                },
                {
                    $addFields: {
                        age: {
                            $round: [{
                                $divide: [
                                    {
                                        $subtract: [
                                            new Date(),
                                            "$patient.patientBirthDate"
                                        ]
                                    },
                                    365 * 24 * 60 * 60 * 1000
                                ]
                            }, 0]
                        }
                    }
                },
                {
                    $bucket: {
                        groupBy: "$age",
                        boundaries: [0, 9, 18, 30, 45, 60],
                        default: "60+",
                        output: {
                            count: { $sum: 1 }
                        }
                    }
                }
            ])

            const patientsGenderDistribution = await Visits.aggregate([
                {
                    $lookup: {
                        from: "patients",
                        localField: "patientId",
                        foreignField: "_id",
                        as: "patient"
                    }
                },
                {
                    $unwind: "$patient"
                },
                {
                    $match: {
                        $and: [
                            { doctorId: new mongoose.Types.ObjectId(req.user._id) },
                            {
                                "patient.patientGender": {
                                    $exists: true,
                                    $ne: null
                                }
                            }
                        ]
                    }
                },
                {
                    $group: {
                        _id: "$patient.patientGender",
                        count: {
                            $sum: 1
                        }
                    }
                }
            ])

            res.json({
                visitsByDays: visitsByDays,
                drugs: prescripedDrugs,
                diagnoses: diagnoses,
                patientsAgeDistribution: patientsAgeDistribution,
                patientsGenderDistribution: patientsGenderDistribution
            });
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(401).json({
            msg: err
        });
    }
});

module.exports = router;
