<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>

          <ul class="error-messages" v-if="loginError">
            <li>{{loginError}}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <a class="btn btn-lg btn-primary pull-xs-right" @click="login()">Sign in</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import users from "@/store/modeules/users";

@Component
export default class Login extends Vue {
  email = "";
  password = "";
  loginError = "";

  login() {
    users
      .login({
        email: this.email,
        password: this.password
      })
      .then(() =>{ this.$router.push("/")})
      .catch(err => (this.loginError = err.message));
  }
}
</script>