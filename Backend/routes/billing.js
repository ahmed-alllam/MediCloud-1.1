const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Visits = require("../models/visits/Visits");

// Gets all billings
router.get("/api/billing/", async (req, res) => {
  try {
    if (req.user) {
      const visits = await Visits.find({ doctorId: req.user._id }).select("created patientName visitCost");
      res.json(visits);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.status(401).json({
      msg: err
    });
  }
});

router.get("/api/billing/stats", async (req, res) => {
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
                    $dayOfMonth: "$created"
                  },
                  remainder: {
                    $mod: [
                      {
                        $dayOfMonth: "$created"
                      },
                      1
                    ]
                  },

                },
                in: {
                  $dateFromParts: {
                    year: {
                      $year: "$created"
                    },
                    month: {
                      $month: "$created"
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
            total: {
              $sum: "$visitCost"
            }
          }
        },
        {
          $sort: {
            day: 1
          }
        }
      ]);

      res.json(visitsByDays);
    } else {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (err) {
    res.status(401).json({
      msg: err.message
    });
  }
}
);

module.exports = router;
