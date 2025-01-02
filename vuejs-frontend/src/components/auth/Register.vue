<template>
    <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
      <v-card class="pa-5" width="400">
        <v-card-title class="text-h5 text-center">Register</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
   
            <v-text-field
              v-model= "formData.username"
              label="Full Name"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
       
            <v-text-field
              v-model="formData.email"
              label="Email"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
  
       
            <v-text-field
              v-model="formData.password"
              label="Password"
              type="password"
              :rules="[rules.required, rules.min(6)]"
              required
            ></v-text-field>
  
       
            <v-text-field
              v-model="formData.confirmPassword"
              label="Confirm Password"
              type="password"
              :rules="[rules.required, rules.matchPassword]"
              required
            ></v-text-field>
  
        
            <v-btn :disabled="!valid" color="primary" block class="mt-4" @click="submit">
              Register
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
 import { reactive, ref } from 'vue';

export default {
  setup() {
    const formData = reactive({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const valid = ref(false);

    const rules = {
      required: (value) => !!value || 'Required.',
      email: (value) => /.+@.+\..+/.test(value) || 'E-mail khong dung.',
      min: (length) => (value) => (value && value.length >= length) || `Min ${length} characters.`,
      matchPassword: (value) => value === formData.password || 'Passwords must match.',
    };

    const submit = () => {
      console.log('Submitted:', formData);
    };

    return {
      formData,
      valid,
      rules,
      submit,
    };
  },
};

  </script>
  
  <style>

  </style>
  