<template>
    <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
      <v-card class="pa-5" width="400">
        <v-card-title class="text-h5 text-center">Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit" v-model="valid" lazy-validation>
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
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-alert v-if="errorMessage" type="error" dismissible>
              {{ errorMessage }}
            </v-alert>
  
            <v-btn :disabled="!valid" color="primary" block class="mt-4" @click="submit">
              Login
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { reactive, ref } from "vue";
  import axios from "axios";
  
  export default {
    setup() {
      const formData = reactive({
        email: "",
        password: "",
      });
  
      const valid = ref(false);
      const errorMessage = ref("");

      const rules = {
        required: (value) => !!value || "Required.",
        email: (value) => /.+@.+\..+/.test(value) || "Invalid email format.",
      };
  
      const submit = async () => {
        try {
          const response = await axios.post("/api/login", {
            email: formData.email,
            password: formData.password,
          });
  
      
          console.log("Login successful:", response.data);

          localStorage.setItem("auth_token", response.data.token);
  
       
          this.$router.push("/admin/dashboard");
        } catch (error) {
          if (error.response) {
            console.error("Backend error:", error.response.data);
            errorMessage.value = error.response.data.message || "Login failed.";
          } else if (error.request) {
            console.error("No response from server:", error.request);
            errorMessage.value = "Unable to connect to the server.";
          } else {
            console.error("Other error:", error.message);
            errorMessage.value = "An unexpected error occurred.";
          }
        }
      };
  
      return {
        formData,
        valid,
        rules,
        submit,
        errorMessage,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  