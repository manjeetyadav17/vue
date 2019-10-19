<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags" v-model="tagList" />
                <div class="tag-list"></div>
              </fieldset>
              <a
                class="btn btn-lg pull-xs-right btn-primary"
                @click="publishArticle()"
              >Publish Article</a>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Article, ArticleSubmit } from "../store/models";
import articles from "../store/modeules/articles";
import users from "../store/modeules/users";

@Component
export default class Editor extends Vue {
  article: ArticleSubmit = {
    title: "",
    description: "",
    body: "",
    tagList: [],
    slug: ""
  };
  articleSlug?: string | null = null;
  tagList: string = "";

  created() {

    if(!users.usernameExists){
      this.$router.push('/');
    }

    if (this.$route.params.slug) {
      this.articleSlug = this.$route.params.slug;
      articles.getArticle(this.articleSlug).then(() => {
        if (articles != null && articles.article) {
          this.article.slug = articles.article.slug;
          this.article.title = articles.article.title;
          this.article.description = articles.article.description;
          this.article.body = articles.article.body;
          this.tagList =
            articles.article.tagList != null
              ? articles.article.tagList.toString()
              : "";
        }
      });
    }
  }

  publishArticle() {
    if (this.article != null) {
      this.article.tagList = this.tagList.split(",").filter(x => x.trim.length != 0);
    }
    if (this.articleSlug == null) {
      articles
        .createArticle(this.article)
        .then(() => {
          if (articles.article != null) {
            this.$router.push(`/article/${articles.article.slug}`);
          }
        })
        .catch(() => {});
    } else {
       articles
        .updateArticle(this.article)
        .then(() => {
          if (articles.article != null) {
            this.$router.push(`/article/${articles.article.slug}`);
          }
        })
        .catch(() => {});
    }
  }
}
</script>