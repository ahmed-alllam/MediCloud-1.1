<template>

    <v-card color="#fff">
        <v-card-title class="text-h5 lighten-2">
            Edit this record
        </v-card-title>

        <v-card-text>
            <v-card flat>
                <div>
                    <v-form v-model="valid" ref="form">
                        <v-jsf v-model="model" :schema="schema" />
                    </v-form>
                </div>
                <div>
                    <v-btn text color="primary" class="font-weight-bold" @click="editPatient">Edit Patient</v-btn>
                    <v-btn text color="red" @click="$emit('update', false)">Cancel</v-btn>
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
        schema: {
            type: 'object',
            properties: {}
        },
        schema2: {
            'Emergency Contacts': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', default: '', 'x-props': { 'hint': 'Ex: Father' } },
                    'Phone': { type: 'number', 'x-props': { 'hint': 'Ex: 01123456789' } }
                },
                required: ['Phone']
            },
            'Medications': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Panadol' } },
                    'Dose': { type: 'string', default: '', 'x-props': { 'hint': 'Ex: Twice a day' } },
                    'Start Date': { type: 'string', format: 'date', default: '' },
                    'End Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Diseases': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Diabetes' } },
                    'Details': { type: 'string', default: '', 'x-props': { 'hint': 'Ex: type 2' } },
                    'Start Date': { type: 'string', format: 'date', default: '', },
                    'End Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Family History': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', 'x-props': { 'hint': 'Ex: High Blood Pressure' } },
                    'Family member': { type: 'string', default: '', 'x-props': { 'hint': 'Ex: Mother' } },
                    'Start Date': { type: 'string', format: 'date', default: '' },
                    'End Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Immunizations': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', default: '', 'x-props': { 'hint': 'Ex: Pfizer Covid-19' } },
                    'Details': { type: 'string', default: '' },
                    'Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Name']
            },
            'Allergies': {
                type: 'object',
                properties: {
                    'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Lactose Intolerance' } },
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
                        "writeOnly": true,
                        //  default: ''
                    },
                    'Details': { type: 'string', 'x-props': { 'hint': 'Ex: Prescription for Covid-19' } },
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
                        }, 
                        // default: ''
                    },
                    'Details': { type: 'string', 'x-props': { 'hint': 'Ex: X-Ray for Chest' } },
                    'Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Details']
            },
            'Lab Tests': {
                type: 'object',
                properties: {
                    'Image': {
                        type: 'string', "contentMediaType": "image/*",
                        "writeOnly": true,
                        "x-options": {
                            "filesAsDataUrl": true
                        },
                        // default: ''
                    },
                    'Details': { type: 'string', 'x-props': { 'hint': 'Ex: Blood Sugar test' } },
                    'Date': { type: 'string', format: 'date', default: '' },
                },
                required: ['Details']
            },
        }
    }),
    props: {
        patient_data: {
            type: Object,
            required: true
        },
        section: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        section_data: {
            type: Object,
            required: true
        }
    },
    watch: {
        section_data() {
            this.update_schema();
        }
    },
    mounted() {
        this.update_schema();
    },
    methods: {
        update_schema() {
            this.model = this.section_data;
            this.schema.properties = this.schema2[this.section].properties
            this.schema.required = this.schema2[this.section].required
        },
        editPatient() {
            this.$refs.form.validate();

            if (this.valid) {
                axios.patch("https://api.medicloud.care/api/patients/" + this.patient_data._id + "/", {
                    ['patient' + String(this.section).replace(/ /g, '')]: this.model
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        //todo
                    });

                this.patient_data.details_sections[this.section][this.index] = this.model
                this.$emit('update')
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.v-card {
    box-shadow: none !important;
}
</style>