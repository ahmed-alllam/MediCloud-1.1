<template>
    <div>
        <div id="top-content">
            <div id="row">
                <div id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="require('@/assets/images/img.jpg')" />
                </div>

                <div id="name-container" class="col-xs-12 col-md-7 col-xl-3">
                    <h3 id="name">
                        Ahmed Allam
                    </h3>
                    <h3 id="email">
                        ahmedeallam@aucegypt.edu
                    </h3>
                </div>

                <div id="basic-info" class="col-sm-10 offset-xl-1 col-xl-6 float-right">
                    <div id="id">
                        <span class="name">
                            ID
                        </span>

                        <span class="value">
                            900214493
                        </span>

                    </div>

                    <div id="birthdate">
                        <span class="name">
                            Birthdate
                        </span>

                        <span class="value">
                            08-09-2003
                        </span>
                    </div>

                    <div id="city">
                        <span class="name">
                            City
                        </span>

                        <span class="value">
                            Cairo, Egypt
                        </span>

                    </div>

                    <div id="blood-type">
                        <span class="name">
                            Blood Type
                        </span>

                        <span class="value">
                            A-
                        </span>

                    </div>

                    <div id="phone">
                        <span class="name">
                            Phone
                        </span>

                        <span class="value">
                            +201553554224
                        </span>

                    </div>

                    <div id="height">
                        <span class="name">
                            Height
                        </span>

                        <span class="value">
                            186cm
                        </span>

                    </div>

                    <div id="weight">
                        <span class="name">
                            Weight
                        </span>

                        <span class="value">
                            75KG
                        </span>

                    </div>

                    <div id="martial-status">
                        <span class="name">
                            Martial Status
                        </span>

                        <span class="value">
                            Single
                        </span>

                    </div>

                    <div id="gender">
                        <span class="name">
                            Gender
                        </span>

                        <span class="value">
                            Male
                        </span>

                    </div>

                    <div id="emergency-contacts">
                        <span class="name">
                            Emergency Contacts
                        </span>

                        <span class="value">
                            Mother: +2012345678
                            <br/>
                            Father: +2012345678
                        </span>

                    </div>
                </div>
            </div>
        </div>

        <div id="medical-details">
            <div id="medications">
                <h2>
                    Medications
                </h2>

                <div class="row no-gutters">

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/medi3.jpg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Lisinopril
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 19-8-2021
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Used to treat high blood pressure, heart failure
                                        <br />
                                        <br />
                                        Dose: 600mg daily before meals
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/medi1.webp')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Metformin
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 12-12-2020
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Used to treat type 2 Diabetes.
                                        <br />
                                        <br />
                                        Dose: 500mg daily after meals
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/medi2.jpeg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Amoxicillin
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 31-1-2022
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        An antibiotic used to treat a number of bacterial infections
                                        <br />
                                        <br />
                                        Dose: 200mg twice a day before meals
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


            <div id="chronic-disease">
                <h2>
                    Chronic Disease
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/causes-of-diabetes.webp')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Diabetes
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 12-12-2020
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A lifelong condition that causes a person's blood sugar level to become too high
                                        <br />
                                        <br />
                                        Medication: Metformin
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/hypertension.jpg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        High Blood Preasure
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 18-8-2021
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A common condition in which the long-term force of the blood against your artery
                                        walls is high
                                        <br />
                                        <br />
                                        Medication: Lisinopril
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div id="infectous-disease">
                <h2>
                    Infectous Disease
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/influenza.png')"/>

                            <div>
                                <div class="record-title">
                                    <span>
                                        Influenza
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 12-4-2022
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A virus that causes a person to cough, sneeze, and have a runny nose
                                        <br />
                                        <br />
                                        Medication: Amoxicillin
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="past-disease">
                <h2>
                    Past Disease
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/covid-19.jpg.webp')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Covid-19
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 5-2-2020
                                        <br />
                                        Until: 2-3-2020
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A disease caused by SARS-CoV-2 that can trigger what doctors call a respiratory
                                        tract infection.
                                        <br />
                                        <br />
                                        Medication: Dexamethasone
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" :src="require('@/assets/images/images.jpeg')"/>

                            <div>
                                <div class="record-title">
                                    <span>
                                        Shingles
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 10-6-2018
                                        <br />
                                        Until: 17-8-2018
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A painful rash that develops on one side of the face or body
                                        <br />
                                        <br />
                                        Medication: Zovirax
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/dengyee.jpg')"/>

                            <div>
                                <div class="record-title">
                                    <span>
                                        Dengue
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Since: 5-1-2016
                                        <br />
                                        Until: 7-9-2016
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A viral infection transmitted to humans through the bite of infected mosquitoes
                                        <br />
                                        <br />
                                        Medication: Acetaminophen
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="family-history">
                <h2>
                    Family History
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/causes-of-diabetes.webp')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Diabetes
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        A lifelong condition that causes a person's blood sugar level to become too high
                                        <br />
                                        <br />
                                        Member: Father
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div id="immunizations">
                <h2>
                    Immunizations
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/Unknown.png')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Pfizer
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        First Dose: 8-1-2022
                                        <br />
                                        Second Dose: 5-4-2022
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        The BioNTech, Pfizer vaccine is a vaccine that aims to protect against COVID-19
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div id="allergies">
                <h2>
                    Allergies
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/Unknown.jpeg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Lactose Intolerance
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        People with lactose intolerance are unable to fully digest the sugar (lactose)
                                        in
                                        milk.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/images-2.jpeg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Gluten Intolerance
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Gluten intolerance is a condition that causes a bad reaction to the gluten in
                                        wheat,
                                        rye, and barley. It is similar to, but different from, celiac disease. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div id="prescriptions">
                <h2>
                    Prescriptions
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/pre1.png')" />

                            <div>
                                <div class="record-date">
                                    <span>
                                        Date: 10-6-2018
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Ahmed Al-Sayed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/pre2.jpg')" />

                            <div>
                                <div class="record-date">
                                    <span>
                                        Date: 11-9-2020
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Hassan Mohamed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scans">
                <h2>
                    Scans
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/scan1.png')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        X-Ray for Chest
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Date: 18-1-2021
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Mostafa Soliman
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">

                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/scan2.jpg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Brain MRI
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Date: 18-1-2021
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Ahmed Emad
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6 col-xs-12">

                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/s.jpg.webp')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        CT Scan
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Date: 21-3-2022
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Naglaa Al-Sayed
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="lab-tests">
                <h2>
                    Lab Tests
                </h2>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/lab1.jpg')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Blood Test
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Date: 7-8-2018
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Hassan Ahmed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xs-12">

                        <div class="record-item row no-gutters">
                            <img class="record-image" :src="require('@/assets/images/lab2.png')" />

                            <div>
                                <div class="record-title">
                                    <span>
                                        Urine Test
                                    </span>
                                </div>

                                <div class="record-date">
                                    <span>
                                        Date: 9-11-2020
                                    </span>
                                </div>

                                <div class="record-details">
                                    <span>
                                        Doctor: Emad Allam
                                    </span>
                                </div>
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
};

</script>

<style scoped>
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
}

#top-content #basic-info>div {
    display: flex;
    margin: 0 0 10px 200px;
}

#top-content #basic-info div {
    display: block;
    flex-basis: auto;
    margin-left: 30px;
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
    margin: 50px 7%;
}

#medical-details>div {
    padding: 30px;
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
    word-break: break-all;
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
</style>