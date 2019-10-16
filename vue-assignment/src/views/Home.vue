<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="GetMyFeed()"
                  v-bind:class="{active:tab=='user', disabled:!username}"
                >Your Feed</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="GetGlobalFeed()"
                  v-bind:class="{active:tab=='global'}"
                >Global Feed</a>
              </li>
              <li class="nav-item" v-if="tab!='global'&&tab!='user'">
                <a class="nav-link" v-bind:class="{active:tab!='global'&&tab!='user'}">#{{tab}}</a>
              </li>
            </ul>
          </div>

          <ArticlePreview v-for="article in globalFeed" :article="article" :key="article.slug"></ArticlePreview>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list" v-for="tag in tags" :key="tag">
              <a class="tag-pill tag-default" @click="filterByTag(tag)">{{tag}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import ArticlePreview from "@/components/article/ArticlePreview.vue";
import { Article } from "../store/models";
import articles from "../store/modeules/articles";
import users from "../store/modeules/users";

@Component({
  components: {
    ArticlePreview
  }
})
export default class Home extends Vue {
  globalFeed: Article[] = [];
  tab: string = "";
  tags?: string[] | null = [];

  created() {
    users.userAlredyLoggedIn();
    this.GetGlobalFeed();
    articles.fetchTags().then(() => (this.tags = articles.tags));
  }

  GetMyFeed() {
    if (!users.usernameExists) return;
    this.tab = "user";
    articles.refreshGlobalFeed("user").then(() => {
      this.globalFeed = articles.Feed;
    });
  }

  GetGlobalFeed() {
    this.tab = "global";
    articles.refreshGlobalFeed("global").then(() => {
      this.globalFeed = articles.Feed;
    });
  }

  get username() {
    return users.usernameExists;
  }

  filterByTag(tag: string) {
    this.tab = tag;
    articles.getFeedByQuery("tag=" + tag).then(() => {
      this.globalFeed = articles.Feed;
    });
  }
}
</script>