<template>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <router-link class="nav-link" to="/">
                <i class="ion-compose"></i>&nbsp;Home
            </router-link>
          </li>
          <li class="nav-item" v-if="username">
            <router-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
            </router-link>
          </li>
          <li class="nav-item" v-if="username">
              <router-link class="nav-link" to="/settings">
                <i class="ion-compose"></i>&nbsp;Settings
            </router-link>
           
          </li>
           <li class="nav-item" v-if="username">
            <router-link class="nav-link" :to="'/@'+username">
              {{username}}
            </router-link>
          </li>
          <li class="nav-item" v-if="!username">
           <router-link class="nav-link" to="/register">
           Sign up
           </router-link>
          </li>
           <li class="nav-item" v-if="!username">
           <router-link class="nav-link" to="/login">
           Sign in
           </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">
import {Vue,Component } from 'vue-property-decorator';
import users from '../store/modeules/users';

@Component
export default class Navbar extends Vue {
  
  get username(){
    return users.usernameExists;
  }
}
</script>