<template>
  <div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        Login
      </h2>
      <!-- login with email and password -->
      <form>
        <div>
          <v-text-field
            v-model.trim="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <v-text-field
            v-model.trim="password"
            type="password"
            password="password"
            placeholder="Password"
            required
          />
        </div>
      </form>
      <!-- social login -->
      <div v-if="loading" class="text-center mt-4">
        <v-progress-circular
        :size="70"
        :width="7"
        color="#415893"
        indeterminate
        />
      </div>
      <div v-else class="text-center mt-4">
        <v-btn @click="loginWithGoogle" large color="#f5b3a8" class="btn btn-bg btn-lg btn-block">
          Login with Google
        </v-btn>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from "../router";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: ""
    };
  },
  methods: {
    async loginWithGoogle() {
      // loading set to true
      this.loading = true;
      // clear old errors
      this.errors = [];
      try {
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user = response.user;
        this.loading = false;
        router.push("/");
      } catch (error) {
        this.errors.push(error.message);
        // set loading to false
        this.loading = false;
      }
    }
  }
};
</script>

<style lang='postcss' scoped>
@import "../styles/base/_variables.css";
* {
  border-radius: 0;
}

.jumbotron-bg {
  background-color: $color-primary;
}

.login-header {
  color: $color-primary-dark;
}

.btn-bg {
  background-color: #000;
  color: $color-white;
}
</style>
