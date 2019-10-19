<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p v-if="profile.bio">{{profile.bio}}</p>
            <button
              class="btn btn-sm btn-secondary action-btn"
              v-if="profile.following && user.username != profile.username"
              @click="followUser()"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              Unfollow {{profile.username}}
            </button>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="!profile.following && user.username != profile.username"
              @click="followUser()"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{profile.username}}
            </button>
            <router-link
              to="/settings"
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="user.username == profile.username"
            >
              <i class="ion-gear-a"></i> Edit Profile Settings
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="MyArticles()"
                  v-bind:class="{active:tab=='myarticle'}"
                >My Articles</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="favoriteArticle()"
                  v-bind:class="{active:tab!='myarticle'}"
                >Favorited Articles</a>
              </li>
            </ul>
          </div>
          <ArticlePreview v-for="article in Feed" :article="article" :key="article.slug"></ArticlePreview>
          <div class="artcle-preview" v-show="!Feed.length">No articles are here... yet.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticlePreview from "@/components/article/ArticlePreview.vue";
import users from "../store/modeules/users";
import { Article } from "../store/models";
import articles from "../store/modeules/articles";

@Component({
  components: { ArticlePreview }
})
export default class Profile extends Vue {
  tab: string = "myarticle";

  created() {
    users
      .loadProfile(this.$route.params.username)
      .then(() => this.MyArticles());
  }

  get profile() {
    return users.profile || { following: false, username: "" };
  }

  get user() {
    return users.user || {};
  }

  MyArticles() {
    this.tab = "myarticle";
    this.getFeed("author");
  }

  favoriteArticle() {
    this.tab = "favoriatedarticle";
    this.getFeed("favorited");
  }

  get Feed(){
    return articles.Feed || [];
  }

  private getFeed(query: string) {
    if (users.profile) {
      articles
        .getFeedByQuery(query + "=" + users.profile.username);
    }
  }
  followUser() {
    if (!this.profile.following) {
      users.follow(this.profile.username);
    } else {
      users.unfollow(this.profile.username);
    }
  }
}
</script>