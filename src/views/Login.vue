<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <ValidationObserver ref="admin" v-slot="{ passes }">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{ appTitle }} Billing System</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <TextField
                  v-model="email"
                  :loading="isLoading"
                  rules="required|email"
                  hide-details
                  prepend-icon="fas fa-user-shield"
                  class="ma-0 pa-0"
                  label="Email"
                />
                <TextField
                  v-model="password"
                  :loading="isLoading"
                  rules="required"
                  hide-details
                  prepend-icon="fas fa-lock"
                  class="ma-0 pa-0"
                  label="Password"
                  type="password"
                  @keyup.enter="passes(login)"
                />
              </v-card-text>
              <v-card-text class="py-0 text-center font-italic">
                *Please sign in with any valid email-password to continue
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn :loading="isLoading" color="primary" @click="passes(login)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </ValidationObserver>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import TextField from "@/components/TextField";
import config from "@/config.js";

export default {
  name: "Login",
  components: {
    ValidationObserver,
    TextField
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  computed: {
    appTitle() {
      return config.appTitle();
    }
  },
  methods: {
    login() {
      const postData = {
        email: this.email,
        password: this.password
      };

      this.$router.push({ name: "home.dashboard" });
    }
  }
};
</script>
