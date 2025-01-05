<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
    <v-card class="pa-5" width="400">
      <v-card-title class="text-h5 text-center">Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit" v-model="valid" lazy-validation>
          <v-text-field v-model="formData.name" label="name" :rules="[rules.required]" required></v-text-field>
          <v-text-field v-model="formData.email" label="Email" :rules="[rules.required, rules.email]" required></v-text-field>
          <v-text-field v-model="formData.password" label="Password" type="password" :rules="[rules.required, rules.min(6)]" required></v-text-field>
          <v-text-field v-model="formData.confirmPassword" label="Confirm Password" type="password" :rules="[rules.required, rules.matchPassword]" required></v-text-field>

          <v-alert v-if="errorMessage" type="error" dismissible>
            {{ errorMessage }}
          </v-alert>

          <v-btn :disabled="!valid" color="primary" block class="mt-4" @click="submit">
            Register
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  setup() {
    const formData = reactive({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
   const router = useRouter();
    const valid = ref(false);
    const errorMessage = ref("");

    // Validation rules
    const rules = {
      required: (value) => !!value || "Required.",
      email: (value) => /.+@.+\..+/.test(value) || "E-mail khong dung.",
      min: (length) => (value) => (value && value.length >= length) || `Min ${length} characters.`,
      matchPassword: (value) => value === formData.password || "Passwords must match.",
    };

    const submit = async () => {
      try {
        const response = await axios.post("/api/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        });

        console.log("Success:", response.data);
        alert("Dang Ky Thanh Cong");
        router.push('/login')
      } catch (error) {
        if (error.response) {
          console.error("Server lỗiỗi", error.response.data);
          errorMessage.value = error.response.data.message || "Dang Ky Thâts BạiBại";
        } else if (error.request) {
          console.error("Lỗi khi reponse lên serverserver", error.request);
          errorMessage.value = "Không kết nối đượcđược server.";
        } else {
          console.error("Lỗi không xác đinhjnhj:", error.message);
          errorMessage.value = "Không kết nối được server.";
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
