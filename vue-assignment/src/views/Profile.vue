<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p v-if="profile.bio">{{profile.bio}}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{profile.username}}
            </button>
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
                <a class="nav-link" @click="MyArticles()" v-bind:class="{active:tab=='myarticle'}">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="favoriteArticle()" v-bind:class="{active:tab!='myarticle'}">Favorited Articles</a>
              </li>
            </ul>
          </div>
          <ArticlePreview v-for="article in Feed" :article="article" :key="article.slug"></ArticlePreview>
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
  Feed: Article[] = [];
  tab:string='myarticle';

  created() {
    users.loadProfile(this.$route.params.username);
    this.MyArticles();
  }

  get profile() {
    return users.profile;
  }

  MyArticles() {
    this.tab="myarticle";
    this.getFeed("author");
  }

  favoriteArticle() {
    this.tab="favoriatedarticle";
    this.getFeed("favorited");
  }

  private getFeed(query: string) {
    if (users.user) {
      articles.getFeedByQuery(query + "=" + users.user.username)
        .then(() => (this.Feed = articles.Feed));
    }
  }
}
</script>