<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <a
                class="btn btn-lg btn-primary pull-xs-right"
                @click="updateSettings()"
              >Update Settings</a>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logout()">Or click here to logout.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import users from "../store/modeules/users";
import { User, UserForUpdate } from "../store/models";
import { userUpdate } from "../store/urls";

@Component
export default class Settings extends Vue {
  user: UserForUpdate = {
    image: "",
    bio: "",
    username: "",
    email: "",
    password: ""
  };

  created() {
    this.user.image = users.user != null ? users.user.image : "";
    this.user.bio = users.user != null ? users.user.bio : "";
    this.user.username = users.user != null ? users.user.username : "";
    this.user.email = users.user != null ? users.user.email : "";
  }

  logout() {
    users.logoutUser().then(()=>this.$router.push("/"));
  }

  updateSettings() {
    users.updateUser(this.user);
  }
}
</script>