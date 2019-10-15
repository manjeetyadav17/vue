<template>
    <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign up</h1>
        <p class="text-xs-center">
          <a href="">Have an account?</a>
        </p>

        <ul class="error-messages" v-if="signuperror">
            <li>{{signuperror}}</li>
          </ul>

        <form>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.user.username">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.user.email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.user.password">
          </fieldset>
          <a class="btn btn-lg btn-primary pull-xs-right" @click="signUp()">
            Sign up
          </a>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import users from "../store/modeules/users";
import { UserRegister } from "../store/models";

@Component
export default class Register extends Vue{
  user:UserRegister={
    user:{
      email:'',
      password:'',
      username:''
    }
  };

  signuperror:string='';

  signUp(){
    users.registerUser(this.user).then(()=>this.$router.push("/")).catch((err) => console.log(err));
  }
}
</script>