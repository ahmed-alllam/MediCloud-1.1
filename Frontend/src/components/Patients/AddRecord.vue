
<template>

    <v-card color="#fff">
        <v-card-title class="text-h5 lighten-2">
            Add New Record
        </v-card-title>

        <v-card-text>
            <v-card flat>
                <div>
                    <v-select v-model="section" @input="typeSelected" :items="sections" label="Record Type"
                        class="mr-10 mt-5"></v-select>

                    <v-form v-model="valid" ref="form">
                        <v-jsf v-model="model" :schema="schema" />
                    </v-form>
                </div>
                <div>
                    <v-btn text color="primary" class="font-weight-bold" @click="editPatient">Edit Patient</v-btn>
                    <v-btn text color="red" @click="$emit('update')">Cancel</v-btn>
                    <label>
                        {{ errorLabel }}
                    </label>
                </div>
            </v-card>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from "axios"
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'

export default {
    components: { VJsf },
    data: () => ({
        errorLabel: '',
        valid: null,
        model: {},
        section: '',
        sections: ['Emergency Contacts', 'Medications', 'Diseases', 'Prescriptions', 'Scans', 'Allergies', 'Immunizations', 'Lab Tests', 'Family History'],
        schema: {
            type: 'object',
            properties: {}
        },
        schema2: {
            'Emergency Contacts': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', default: '' },
                    'Phone': { type: 'number' }
                },
                required: ['Phone']
            },
            'Medications': {
                type: 'object',
                properties: {
                    'Name': { type: 'string' },
                    'Dose': { type: 'string' , default: ''},
                    'Start Date': { type: 'string', format: 'date' , default: ''},
                    'End Date': { type: 'string', format: 'date' , default: ''},
                },
                required: ['Name']
            },
            'Diseases': {
                type: 'object',
                properties: {
                    'Name': { type: 'string' },
                    'Details': { type: 'string' , default: ''},
                    'Start Date': { type: 'string', format: 'date' , default: ''},
                    'End Date': { type: 'string', format: 'date' , default: ''},
                },
                required: ['Name']
            },
            'Family History': {
                type: 'object',
                properties: {
                    'Name': { type: 'string' },
                    'Family member': { type: 'string', default: '' },
                    'Start Date': { type: 'string', format: 'date', default: '' },
                    'End Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Immunizations': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', default: '' },
                    'Details': { type: 'string', default: '' },
                    'Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Allergies': {
                type: 'object',
                properties: {
                    'Name': { type: 'string' },
                    'Details': { type: 'string', default: '' },
                    'Start Date': { type: 'string', format: 'date', default: '' },
                    'End Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Prescriptions': {
                type: 'object',
                properties: {
                    'Image': {
                        type: 'string', "contentMediaType": "image/*",
                        "x-options": {
                            "filesAsDataUrl": true
                        },
                        "writeOnly": true, default: ''
                    },
                    'Details': { type: 'string' },
                    'Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Details']
            },
            'Scans': {
                type: 'object',
                properties: {
                    'Image': {
                        type: 'string', "contentMediaType": "image/*",
                        "writeOnly": true,
                        "x-options": {
                            "filesAsDataUrl": true
                        }, default: ''
                    },
                    'Details': { type: 'string' },
                    'Date': { type: 'string', format: 'date' , default: ''},
                },
                required: ['Details']
            },
            'Lab tests': {
                type: 'object',
                properties: {
                    'Image': {
                        type: 'string', "contentMediaType": "image/*",
                        "writeOnly": true,
                        "x-options": {
                            "filesAsDataUrl": true
                        }
                        , default: ''
                    },
                    'Details': { type: 'string' },
                    'Date': { type: 'string', format: 'date' , default: ''},
                },
                required: ['Details']
            },
        }
    }),
    props: {
        patient_data: {
            type: Object,
            required: true
        }
    },
    methods: {
        typeSelected: function () {
            this.schema.properties = this.schema2[this.section].properties
            this.schema.required = this.schema2[this.section].required
        },
        editPatient() {
            this.$refs.form.validate();
            if (this.valid) {

                if (this.patient_data.details_sections[this.section] != undefined) {
                    this.patient_data.details_sections[this.section].push(this.model)
                } else {
                    this.patient_data.details_sections[this.section] = [this.model]
                }

                axios.patch("https://medicloudeg.herokuapp.com/api/patients/" + this.patient_data._id + "/", {
                    ['patient' + String(this.section).replace(/ /g, '')]: this.patient_data.details_sections[this.section]
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        //todo
                    });
                // update local data
                this.$emit('update')
            } else {
                this.errorLabel = 'Please fill in all required fields';
            }
        },
    }
}

</script>


<style lang="scss" scoped>
.v-card {
    box-shadow: none !important;
}

</style>