<template>

    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            Edit this record
        </v-card-title>

        <v-card-text>
            <v-card flat>
                <v-card-title class="body-1">
                    Symptoms
                    <v-spacer></v-spacer>
                    <v-text-field clearable label="Symptoms">
                    </v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                symptom
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
            <v-text-field label="Patient Diagnosis">
            </v-text-field>
            <v-card flat>
                <v-card-title class="body-1">
                    Medications
                    <v-spacer></v-spacer>
                    <v-text-field clearable label="Medications">
                    </v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                medication
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="$emit('update', false)">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

</script>