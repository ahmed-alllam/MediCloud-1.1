<template>
    <div>
        <div id="top-content">
            <div id="row">
                <div id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="patient_data.header_info['Profile Photo']" />
                </div>

                <div id="name-container" class="col-xs-12 col-md-7 col-xl-3">
                    <h3 id="name">{{ patient_data.header_info.Name }}</h3>
                    <h3 id="email">{{ patient_data.header_info.Email }}</h3>
                </div>

                <div id="basic-info" class="col-sm-11 offset-xl-1 col-xl-6 float-right">
                    <div v-for="(value, key, index) in patient_data.basic_info" :key="`${key}-${index}`">
                        <span class="name">{{ key }}</span>

                        <span class="value">{{ value }}</span>
                    </div>
                </div>
            </div>
        </div>

        <v-btn text large class="font-weight-bold add-record-button">Add New Records
            <v-icon>mdi-plus-circle</v-icon>
        </v-btn>


        <div id="medical-details">
            <div v-for="value in patient_data.details_sections" v-bind:key="value.name">
                <h2>{{ value.name }}</h2>

                <div class="row no-gutters">

                    <div v-for="item in value.list" v-bind:key="item.title" class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" v-if="item.image" :src="item.image" />


                            <v-menu top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-if="can_edit" v-bind="attrs" v-on="on" class="edit-button">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item link>
                                        <v-list-item-title>Edit</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item link>
                                        <v-list-item-title>Delete</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>

                            <div>
                                <div class="record-title" v-if="item.title">
                                    <span>{{ item.title }}</span>
                                </div>

                                <div class="record-date" v-if="item.date">
                                    <span>{{ item.date }}</span>
                                </div>

                                <div class="record-details" v-if="item.details">
                                    <span>{{ item.details }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="addMediCard">
                <h2>MediCard</h2>

                <div class="row no-gutters">

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <div>
                                <div class="record-details">
                                    <span>Link a MediCard to this patient</span>
                                </div>

                                <form>
                                    <v-text-field clearable label="Card ID">
                                    </v-text-field>
                                    <v-btn text large class="font-weight-bold add-medicard-button">SAVE</v-btn>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'PatientDetail',
    data: () => ({
        addMediCard: true,
        can_edit: true,
        patient_data: {
            header_info: {
                "Profile Photo": "/img/img.cb21a1a6.jpg",
                "Name": "Ahmed Allam",
                "Email": "ahmedeallam@aucegypt.edu",
            },
            basic_info: {
                "ID": "900214493",
                "Birth Date": "08-09-2003",
                "City": "Cairo, Egypt",
                "Blood Type": "A-",
                "Phone": "+201553554224",
                "Height": "186cm",
                "Weight": "75KG",
                "Status": "Single",
                "Gender": "Male",
                "Emergency Contacts": "Mother: +2012345678",
            },
            details_sections: [
                {
                    name: "Medications",
                    list: [
                        {
                            image: "/img/medi3.1167af21.jpg",
                            title: "Lisinopril",
                            date: "Since: 19-8-2021",
                            details: "Used to treat high blood pressure, heart failure \n\n Dose: 600mg daily before meals"
                        },
                        {
                            image: "/img/medi1.8c68e4c4.webp",
                            title: "Metformin",
                            date: "Since: 12-12-2020",
                            details: "Used to treat type 2 Diabetes. \n\n Dose: 500mg daily after meals"
                        },
                        {
                            image: "/img/medi3.1167af21.jpg",
                            title: "Amoxicillin",
                            date: "Since: 31-1-2022",
                            details: "An antibiotic used to treat a number of bacterial infections \n\n Dose: 200mg twice a day before meals"
                        },
                    ]
                },
                {
                    name: "Disease",
                    list: [
                        {
                            "image": "/img/causes-of-diabetes.1f867aa1.webp",
                            "title": "Diabetes",
                            "date": "Since: 12-12-2020",
                            "details": "A lifelong condition that causes a person's blood sugar level to become too high \n\nMedication: Metformin"
                        },
                        {
                            "image": "/img/hypertension.33d2aae1.jpg",
                            "title": "High Blood Preasure",
                            "date": "Since: 18-8-2021",
                            "details": "A common condition in which the long-term force of the blood against your artery walls is high \n\nMedication: Lisinopril"
                        },
                        {
                            "image": "/img/influenza.9e25d6f0.png",
                            "title": "Influenza",
                            "date": "Since: 12-4-2022",
                            "details": "A virus that causes a person to cough, sneeze, and have a runny nose \n\nMedication: Amoxicilli"
                        },
                    ]
                },
                {
                    name: "Family History",
                    list: [
                        {
                            "image": "/img/causes-of-diabetes.1f867aa1.webp",
                            "title": "Diabetes",
                            "details": "A lifelong condition that causes a person's blood sugar level to become too high"
                        },
                    ],
                },
                {
                    name: "Immunizations",
                    list: [
                        {
                            "image": "/img/Unknown.f31aecaa.png",
                            "date": "First Dose: 8-1-2022 \nSecond Dose: 5-4-2022",
                            "title": "Pfizer",
                            "details": "The BioNTech, Pfizer vaccine is a vaccine that aims to protect against COVID-19"
                        }
                    ]
                },
                {
                    name: "Allergies",
                    list: [
                        {
                            "image": "/img/Unknown.e7b4e80f.jpeg",
                            "title": "Lactose Intolerance",
                            "details": "People with lactose intolerance are unable to fully digest the sugar (lactose) in milk."
                        },
                        {
                            "image": "/img/images-2.7538c5bb.jpeg",
                            "title": "Gluten Intolerance",
                            "details": "Gluten intolerance is a condition that causes a bad reaction to the gluten in wheat, rye, and barley. It is similar to, but different from, celiac disease"
                        }
                    ]
                },
                {
                    name: "Prescriptions",
                    list: [
                        {
                            "image": "/img/pre1.2bb68b64.png",
                            "date": "Date: 10-6-2018",
                            "details": "Doctor: Ahmed Al-Sayed"
                        },
                        {
                            "image": "/img/pre2.249223e6.jpg",
                            "date": "Date: 11-9-2020",
                            "details": "Doctor: Hassan Mohamed"
                        }
                    ]
                },
                {
                    name: "Scans",
                    list: [
                        {
                            "image": "/img/scan1.de066e86.png",
                            "title": "X-Ray for Chest",
                            "date": "Date: 18-1-2021",
                            "details": "Doctor: Mostafa Soliman"
                        },
                        {
                            "image": "/img/scan2.1762588f.jpg",
                            "title": "Brain MRI",
                            "date": "Date: 18-1-2021",
                            "details": "Doctor: Ahmed Emad"
                        },
                        {
                            "image": "/img/s.jpg.3c13150c.webp",
                            "title": "CT Scan",
                            "date": "Date: 21-3-2022",
                            "details": "Doctor: Naglaa Al-Sayed"
                        },
                    ]
                },
                {
                    name: "Lab Tests",
                    list: [
                        {
                            "title": "Blood Test",
                            "image": "/img/lab1.1b54cef4.jpg",
                            "date": "Date: 7-8-2018",
                            "details": "Doctor: Hassan Ahmed"
                        }
                    ]
                }
            ]
        }
    }),
};

</script>

<style scoped lang="scss">
body {
    background-color: #F0F2F5;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
}

#top-content {
    display: flex;
    background-color: #FFFFFF;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

#top-content img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin: auto;
}

@media screen and (min-width: 768px) {
    #top-content img {
        margin: auto 0 auto auto !important;
    }
}

#top-content #row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

#top-content #name-container {
    display: block;
}

@media screen and (max-width: 768px) {
    #top-content #name-container {
        margin-top: 25px;
    }
}

#top-content #name-container #name {
    font-size: 36px;
    font-weight: bold;
    color: #333333;
    text-align: center;
}

#top-content #name-container #email {
    font-size: 20px;
    color: #999999;
    text-align: center;
}

@media screen and (min-width: 768px) {

    #name,
    #email {
        text-align: left !important;
    }
}

#top-content #image {
    display: flex;
}

#top-content [class^='col-'] {
    margin: auto;
}


#top-content #basic-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 5px !important;
}

#top-content #basic-info>div {
    display: flex;
    margin: 0 0 10px 10px;
}

#top-content #basic-info div {
    display: block;
    flex-basis: auto;
    margin-right: 30px;
}

#top-content #basic-info .value {
    margin-bottom: 30px;
}

#top-content #basic-info .name {
    font-size: 15px;
    color: #999999;
}

#top-content #basic-info .value {
    display: block;
    margin-top: 20px;
    font-size: 15px;
    color: #333333;
}

#top-content span,
#top-content h2 {
    overflow: hidden;
    text-overflow: ellipsis;
}

#medical-details {
    margin: 50px 4%;
}

#medical-details>div {
    padding: 10px;
    margin-top: 20px;
    /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); */
    border-radius: 10px;
    background-color: #FFFFFF;
}

#medical-details h2 {
    font-size: 25px;
    font-weight: bold;
    color: #333333;
    margin-top: 5px;
    margin-bottom: auto;
}


#medical-details .record-item {
    padding: 20px;
    margin-top: 20px;
    margin-right: 15px;
    border: rgba(0, 0, 0, 0.1) 1px solid;
    border-radius: 10px;
    display: flex;
}

#medical-details .record-image {
    width: 140px;
    height: 96px;
    margin-right: 20px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px;
}

#medical-details .record-title {
    font-size: 19px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
}

#medical-details span {
    word-break: break-word;
    white-space: pre-wrap;
}

#medical-details .record-date {
    font-size: 15px;
    color: #666666;
    margin-bottom: 10px;
}

#medical-details .record-details {
    font-size: 15px;
    color: #666666;
    margin-bottom: 10px;
}

.edit-button {
    margin-right: 40px;
    margin-top: 40px;
    position: absolute;
    top: 0;
    right: 0;

    &:focus {
        outline: none;
    }
}

.add-medicard-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;
    padding: 20px !important;

    &:hover {
        opacity: 0.6;
    }
}

.add-record-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;

    margin: 0 auto;
    display: block;

    i {
        margin-left: 5px;
    }

    &:hover {
        opacity: 0.6;
    }
}

</style>