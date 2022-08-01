<template>

    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            Edit this record
        </v-card-title>

        <v-card-text>
            <v-card flat>
                <div class="edit-form">
                    <v-form v-model="valid" ref="form">
                        <v-jsf v-model="model" :schema="schema" />
                    </v-form>
                </div>
                <div class="end-buttons">
                    <v-btn text class="font-weight-bold add-button" @click="editPatient">Edit Patient</v-btn>
                    <v-btn text class="cancel-button" @click="$emit('update', false)">Cancel</v-btn>
                    <label class="ml-10">
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
            properties: {
                'Name': { type: 'string' },
                'Phone': { type: 'number' },
                'Date': { type: 'string', format: 'date' },
                'Start Date': { type: 'string', format: 'date' },
                'End Date': { type: 'string', format: 'date' },
                'Family Member': { type: 'string' },
                'Details': { type: 'string' },
                'Dose': { type: 'string' },
            }
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
        }
    },
    created() {
        this.model = this.patient_data.details_sections[this.section][this.index]

        for (let field in this.schema.properties) {
            if (this.model[field] === undefined) {
                delete this.schema.properties[field]
            }
        }
    },
    methods: {
        editPatient() {
            // delete from database
            axios.patch("http://localhost:5000/api/patients/" + this.patient_data._id + "/", {
                ['patient' + String(this.section).replace(/ /g,'')]: this.model
            }) //todo: change to real url
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    //todo
                });
            // update local data
            this.patient_data.details_sections[this.section][this.index] = this.model
            this.$emit('update')
        }
    }
}

</script>