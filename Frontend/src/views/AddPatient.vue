<template>
    <v-card class="mb-10 mt-10 mr-10 ml-10 pt-10 pb-10 parent-card">
        <div class="patient-form">
            <v-form :key="fromDoctor" v-model="valid" ref="form">
                <v-jsf ref="formschema" v-model="model" :schema="schema" :options="options" />
            </v-form>
        </div>
        <div :class="['end-buttons', fromDoctor?'float-left':'float-right']">
            <v-btn v-if="fromDoctor" text class="font-weight-bold add-button" @click="addPatient">Add User</v-btn>
            <v-btn v-else text class="font-weight-bold add-button" @click="addPatient">التسجيل</v-btn>
            <v-btn v-if="fromDoctor" text class="cancel-button" router to="/appointments/new">Cancel</v-btn>
        </div>
    </v-card>
</template>

<script>
import axios from "axios"
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'


export default {
    name: "AddPatient",
    components: { VJsf },
    data: () => ({
        medicardID: "",
        fromDoctor: false,
        valid: null,
        model: {
            "Photo": '',
            "First Name": '',
            'Last Name': '',
            'Email': '',
            'PIN': '',
            'MediCard ID': '',
            'Blood Type': null,
            'Status': '',
            'Height': '',
            'Weight': '',
            'Birth Date': '',
            'Gender': null,
            'City': '',

            'Emergency Contacts': [],
            'Medications': [],
            'Diseases': [],
            'Family History': [],
            'Immunizations': [],
            'Allergies': [],
            'Prescriptions': [],
            'Scans': [],
            'Lab tests': [],
        },
        schema: {
            required: ['First Name', 'Last Name'],
            type: 'object',
            properties: {
                'Photo': {
                    "title": {
                        "$ref": "#/i18n/~$locale~/photo"
                    },
                    'x-col': '12',
                    'x-class': 'col-sm-5 me-10',
                    'x-props': {
                        'prepend-icon': 'mdi-camera',
                    },
                    type: 'string', "contentMediaType": "image/*",
                    "writeOnly": true,
                    "x-options": {
                        "filesAsDataUrl": true
                    },
                },
                'First Name': {
                    title: {
                        "$ref": "#/i18n/~$locale~/first_name"
                    },
                    type: 'string', 'x-col': '12', "x-class": "col-sm-5"
                },
                'Last Name': {
                    title: {
                        "$ref": "#/i18n/~$locale~/last_name"
                    },
                    type: 'string', 'x-col': '12', "x-class": "col-sm-5 me-10"
                },
                'PIN': {
                    title: {
                        "$ref": "#/i18n/~$locale~/pin"
                    },
                    type: 'string', 'x-col': '12', 'x-class': 'col-sm-5',
                    'minLength': 6, 'maxLength': 6, 'x-props': { 'type': 'password', 'hint': "Password used to access patient's sensitive data" }
                },
                'Email': {
                    title: {
                        "$ref": "#/i18n/~$locale~/email"
                    },
                    type: 'string', 'x-col': '12', 'x-class': 'me-10 col-sm-5'
                },
                'Phone': {
                    title: {
                        "$ref": "#/i18n/~$locale~/phone"
                    },
                    type: 'number', 'x-col': '12', "x-class": "col-sm-5"
                },

                'Birth Date': {
                    title: {
                        "$ref": "#/i18n/~$locale~/birth_date"
                    },
                    type: 'string', format: 'date', 'x-col': '12', "x-class": "me-10 col-sm-5"
                },
                'Blood Type': {
                    title: {
                        "$ref": "#/i18n/~$locale~/blood_type"
                    },
                    type: 'string',
                    'enum': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                    'x-col': '12',
                    'x-class': 'col-sm-5'
                },
                'Gender': {
                    title: {
                        "$ref": "#/i18n/~$locale~/gender"
                    },
                    type: 'string', 'enum': ['Male', 'Female'], 'x-col': '12', "x-class": "me-10 col-sm-5"
                },
                'MediCard ID': {
                    type: 'string', 'x-col': '12', "x-class": "col-sm-5"
                },

                'Emergency Contacts': {
                    title: {
                        "$ref": "#/i18n/~$locale~/emergency_contacts"
                    },
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5 me-10 mt-5',
                    items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/contact_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/contact_name_hint"
                                    }
                                }
                            },
                            'Phone': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/contact_phone"
                                },
                                type: 'number', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/contact_phone_hint"
                                    }
                                }

                            }
                        },
                        required: ['Phone']
                    },
                },
                'Medications': {
                    title: {
                        "$ref": "#/i18n/~$locale~/medications"
                    },
                    type: 'array', 'x-col': '12', "x-class": "me-10 col-sm-5 mt-5",
                    items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/medication_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/medication_name_hint"
                                    }
                                }
                            },
                            'Dose': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/dose"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/dose_hint"
                                    }
                                }
                            },
                            'Start Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/start_date"
                                },
                                type: 'string', format: 'date'
                            },
                            'End Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/end_date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Name']
                    },
                },
                'Diseases': {
                    title: {
                        "$ref": "#/i18n/~$locale~/diseases"
                    },
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5 me-10  mt-5'
                    , items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/disease_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/disease_name_hint"
                                    }
                                }
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/disease_details"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/disease_details_hint"
                                    }
                                }
                            },
                            'Start Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/start_date"
                                },
                                type: 'string', format: 'date'
                            },
                            'End Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/end_date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Name']
                    },
                },
                'Family History': {
                    title: {
                        "$ref": "#/i18n/~$locale~/family_history"
                    },
                    type: 'array', 'x-col': '12', "x-class": "col-sm-5 mt-5", items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/disease_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/disease_name_hint"
                                    }
                                }
                            },
                            'Family member': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/family_member_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/family_member_name_hint"
                                    }
                                }
                            },
                            'Start Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/start_date"
                                },
                                type: 'string', format: 'date'
                            },
                            'End Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/end_date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Name']
                    },
                },
                'Immunizations': {
                    title: {
                        "$ref": "#/i18n/~$locale~/immunizations"
                    },
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5 me-10  mt-5', items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/immunization_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/immunization_name_hint"
                                    }
                                }
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/immunization_details"
                                }, 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/immunization_details_hint"
                                    }
                                },
                                type: 'string'
                            },
                            'Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Name']
                    },
                },
                'Allergies': {
                    title: {
                        "$ref": "#/i18n/~$locale~/allergies"
                    },
                    type: 'array', 'x-col': '12', "x-class": "col-sm-5 mt-5", items: {
                        type: 'object',
                        properties: {
                            'Name': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/allergy_name"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/allergy_name_hint"
                                    }
                                }
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/details"
                                }, 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/allergy_details_hint"
                                    }
                                },
                                type: 'string'
                            },
                            'Start Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/start_date"
                                },
                                type: 'string', format: 'date'
                            },
                            'End Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/end_date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Name']
                    },
                },
                'Prescriptions': {
                    title: {
                        "$ref": "#/i18n/~$locale~/prescriptions"
                    },
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5 me-10 mt-5', items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/prescription_image"
                                },
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/details"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/prescription_details_hint"
                                    }
                                }
                            },
                            'Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Details']
                    },
                },
                'Scans': {
                    title: {
                        "$ref": "#/i18n/~$locale~/scans"
                    },
                    type: 'array', 'x-col': '12', "x-class": "me-10 col-sm-5 mt-5", items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/scan_image"
                                },
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/details"
                                },
                                type: 'string', 'x-props': {
                                    'hint': {
                                        "$ref": "#/i18n/~$locale~/scan_details_hint"
                                    }
                                }
                            },
                            'Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Details']
                    },
                },
                'Lab tests': {
                    title: {
                        "$ref": "#/i18n/~$locale~/lab_tests"
                    },
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5 mt-5 mb-5', items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/lab_test_image"
                                },
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/details"
                                },
                                type: 'string', 'x-props': {
                                    'hint':
                                    {
                                        "$ref": "#/i18n/~$locale~/lab_test_details_hint"
                                    }
                                }
                            },
                            'Date': {
                                title: {
                                    "$ref": "#/i18n/~$locale~/date"
                                },
                                type: 'string', format: 'date'
                            },
                        },
                        required: ['Details']
                    },
                },
            },
            "i18n": {
                "en": {
                    "pin": "PIN",
                    "photo": "Photo",
                    "first_name": "First Name",
                    "last_name": "Last Name",
                    "email": "Email",
                    "phone": "Phone",
                    "gender": "Gender",
                    "birth_date": "Birth Date",
                    "medications": "Medications",
                    "emergency_contacts": "Emergency Contacts",
                    "diseases": "Diseases",
                    "family_history": "Family History",
                    "blood_type": "Blood Type",
                    "immunizations": "Immunizations",
                    "allergies": "Allergies",
                    "prescriptions": "Prescriptions",
                    "scans": "Scans",
                    "lab_tests": "Lab tests",

                    "name": "Name",
                    "details": "Details",
                    "start_date": "Start Date",
                    "end_date": "End Date",
                    "image": "Image",
                    "date": "Date",
                    "details_hint": "Details",
                    "name_hint": "Name",
                    "prescription_details_hint": "Ex: 1 tablet of paracetamol 500mg every 6 hours",
                    "scan_details_hint": "Ex: X-Ray",
                    "lab_test_details_hint": "Ex: PCR Test",
                    "prescription_image": "Prescription Image",
                    "scan_image": "Scan Image",
                    "lab_test_image": "Lab Test Image",
                    "contact_name": "Emergency Contact Name",
                    "contact_phone": "Emergency Contact Phone",

                    "disease_name": "Disease Name",
                    "disease_details": "Disease Details",
                    "disease_start_date": "Disease Start Date",
                    "disease_end_date": "Disease End Date",
                    "disease_image": "Disease Image",

                    "family_member_name": "Family Member Name",
                    "family_member_disease": "Disease",
                    "family_member_disease_details": "Disease Details",

                    "immunization_name": "Immunization Name",
                    "immunization_details": "Immunization Details",

                    "allergy_name": "Allergy Name",
                    "allergy_details": "Allergy Details",

                    "medication_name": "Medication Name",
                    "medication_details": "Medication Details",
                    "medication_start_date": "Medication Start Date",

                    "prescription_name": "Prescription Name",
                    "prescription_details": "Prescription Details",
                    "prescription_start_date": "Prescription Start Date",

                    "scan_name": "Scan Name",
                    "scan_details": "Scan Details",


                    "dose": "Dose",
                    "dose_hint": "Ex: Twice a day",
                    "medication_name_hint": "Ex: Paracetamol",

                    "contact_name_hint": "Ex: Ahmed",
                    "contact_phone_hint": "Ex: 0123423411",

                    "disease_name_hint": "Ex: Diabetes",
                    "disease_details_hint": "Ex: Type 1",

                    "family_member_name_hint": "Ex: Father",

                    "immunization_name_hint": "Ex: Pfizer COVID-19 Vaccine",
                    "immunization_details_hint": "Ex: three shots",

                    "allergy_name_hint": "Ex: Penicillin",
                    "allergy_details_hint": "Ex: Rash",

                },

                "ar": {
                    "pin": "كلمة السر",
                    "photo": "صورة شخصية",
                    "first_name": "الاسم الاول",
                    "last_name": "الاسم الاخير",
                    "email": "البريد الالكتروني",
                    "phone": "رقم الهاتف",
                    "gender": "النوع",
                    "birth_date": "تاريخ الميلاد",
                    "emergency_contacts": "جهات الاتصال الطارئة",
                    "medications": "الادوية",
                    "blood_type": "فصيلة الدم",
                    "diseases": "الامراض",
                    "family_history": "تاريخ العائلة المرضي",
                    "immunizations": "التطعيمات",
                    "allergies": "الحساسيات",
                    "prescriptions": "الروشتات الطبية",
                    "scans": "الاشعة",
                    "lab_tests": "التحاليل",

                    "dose": "الجرعة",
                    "dose_hint": "مثال: مرتين فاليوم",
                    "medication_name_hint": "مثال: بانادول",

                    "contact_name_hint": "مثال: احمد",
                    "contact_phone_hint": "مثال: 0123445342",

                    "disease_name_hint": "مثال: السكري",
                    "disease_details_hint": "مثال: سكري من النوع الاول",

                    "family_member_name_hint": "مثال: الاب",

                    "immunization_name_hint": "مثال: تطعيم كورونا",
                    "immunization_details_hint": "مثال: ثلاث جرعات",

                    "allergy_name_hint": "مثال: الحساسية للماء",
                    "allergy_details_hint": "مثال: الحساسية للماء منذ الصغر",

                    "name": "الاسم",
                    "details": "التفاصيل",
                    "image": "الصورة",
                    "date": "التاريخ",
                    "details_hint": "التفاصيل",
                    "name_hint": "الاسم",


                    "prescription_details_hint": "مثال: روشته للسكري",
                    "scan_details_hint": "مثال: اشعة للرقبة",
                    "lab_test_details_hint": "مثال: تحليل للكرورنا",
                    "prescription_image": "صورة الروشتة",
                    "scan_image": "صورة الاشعة",
                    "lab_test_image": "صورة التحليل",

                    "contact_name": "اسم جهة الاتصال الطارئة",
                    "contact_phone": "رقم جهة الاتصال الطارئة",

                    "disease_name": "اسم المرض",
                    "disease_details": "تفاصيل المرض",
                    "start_date": "منذ تاريخ",
                    "end_date": "حتي تاريخ",

                    "family_member_name": "اسم عضو العائلة",
                    "family_member_disease": "المرض",

                    "immunization_name": "اسم التطعيم",
                    "immunization_details": "تفاصيل التطعيم",

                    "allergy_name": "اسم الحساسية",
                    "allergy_details": "تفاصيل الحساسية",

                    "medication_name": "اسم الدواء",

                    "prescription_details": "تفاصيل الروشتة",

                    "scan_details": "تفاصيل الاشعة",
                }
            }
        },
        options: {
            locale: 'ar',
        }
    }),
    methods: {
        async addPatient() {
            await this.$refs.form.validate();

            var toastMessage = '';

            if (!this.valid) {
                if (this.fromDoctor) {
                    toastMessage = "Please fill all the required fields";
                } else {
                    toastMessage = "يرجى ملء جميع الحقول المطلوبة";
                }
                this.$toast.error(toastMessage);
                return false;
            }

            if (this.fromDoctor) {
                toastMessage = "Adding Patient...";
            } else {
                toastMessage = "جاري التسجيل...";
            }

            this.$toast.info(toastMessage);

            const send_model = {}

            for (const key in this.model) {
                send_model['patient' + String(key).replace(/ /g, '')] = this.model[key]
            }

            axios.post("https://api.medicloud.care/api/patients/", {
                ...send_model
            }).then(res => {
                const Patient = res.data;

                if (this.fromDoctor) {
                    toastMessage = "Patient Added Successfully";
                } else {
                    toastMessage = "تم التسجيل بنجاح";
                }

                this.$toast.clear();
                this.$toast.success(toastMessage);

                if (this.fromDoctor) {
                    this.$router.push({
                        path: '/appointments/new/patient/' + Patient._id,
                    })
                } else {
                    this.$router.push({ name: 'Patient Detail', params: { id: this.medicardID } });
                    this.$vuetify.lang.current = 'en';
                    this.$vuetify.rtl = false;
                }
            }).catch(err => {
                console.log(err);
                this.$toast.clear();

                if (this.fromDoctor) {
                    toastMessage = "Error Adding Patient";
                } else {
                    toastMessage = "حدث خطأ أثناء التسجيل";
                }
                this.$toast.error(toastMessage);
            }
            )
        },
        checkLoggedIn() {
            if (this.$store.state.isLoggedIn) {
                this.options.locale = 'en';
                this.fromDoctor = true;
            } else {
                this.$vuetify.lang.current = 'ar';
                this.$vuetify.rtl = true;
            }
        },
    },
    created() {
        this.checkLoggedIn();

        this.medicardID = this.$route.params.id;
    },
    mounted() {
        if (this.medicardID) {
            this.model['MediCard ID'] = this.medicardID;
        }
    }
}
</script>


<style lang="scss" scoped>
.patient-form {
    margin: 0 40px;
}

.end-buttons {
    margin: 10px 40px;

    .add-button {
        padding: 20px;
        font-size: 15px !important;
        letter-spacing: 0cm;
        color: white !important;
        background-color: #26b3ff;
        border-radius: 25px;
        // text-decoration: none;

        &:hover {
            opacity: 0.6;
        }
    }

    .cancel-button {
        letter-spacing: 0cm;
        font-size: 15px !important;
        border-radius: 25px;
        background-color: rgb(255, 0, 0);
        color: white !important;
        margin-left: 10px;
        text-decoration: none;

        &:hover {
            opacity: 0.6;
        }
    }


}

.parent-card {
    overflow: hidden;
}

::v-deep .vjsf-array-add-button {
    margin-right: 20px !important;
    margin-left: 20px !important;
}
</style>