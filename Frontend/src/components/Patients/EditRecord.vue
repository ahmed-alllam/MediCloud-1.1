<template>

    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
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
            'Name': { type: 'string' },
            'Phone': { type: 'number' },
            'Date': { type: 'string', format: 'date' },
            'Start Date': { type: 'string', format: 'date' },
            'End Date': { type: 'string', format: 'date' },
            'Family Member': { type: 'string' },
            'Details': { type: 'string' },
            'Dose': { type: 'string' },
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
    created() {
        this.update_schema();
    },
    methods: {
        update_schema() {
            var schema = {
                type: 'object',
                properties: {}
            };

            this.model = this.section_data;
            for (let field in this.schema2) {
                if (this.model[field] !== undefined) {
                    schema.properties[field] = this.schema2[field]
                }
            }

            this.schema = schema;
        },
        editPatient() {
            this.$refs.form.validate();

            if (this.valid) {
                axios.patch("https://medicloudeg.herokuapp.com/api/patients/" + this.patient_data._id + "/", {
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