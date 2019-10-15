<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>

        <div class="article-meta">
          <router-link :to="'/@'+article.author.username">
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="'/@'+article.author.username"
              class="author"
            >{{article.author.username}}</router-link>
            <span class="date">{{article.createdAt}}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{article.author.username}}
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{article.body}}</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <router-link :to="'/@'+article.author.username">
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="'/@'+article.author.username"
              class="author"
            >{{article.author.username}}</router-link>
            <span class="date">{{article.createdAt}}</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{article.author.username}}
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="comment.body"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="user.image" class="comment-author-img" />
              <a class="btn btn-sm btn-primary" @click="postComment()">Post Comment</a>
            </div>
          </form>
          <CommentPreview v-for="comment in comments" :comment="comment" :key="comment.id"></CommentPreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import articles from "../store/modeules/articles";
import CommentPreview from "@/components/article/CommentPreview.vue";
import users from "../store/modeules/users";
import {
  Comment,
  Article as ArticleModel,
  CommentSubmit
} from "../store/models";

@Component({
  components: {
    CommentPreview
  }
})
export default class Article extends Vue {
  comments?: Comment[] = [];
  article?: ArticleModel|null=null;
  comment: CommentSubmit = {
    body: "",
    slug: ""
  };

  created() {
    articles
      .getArticle(this.$route.params.slug)
      .then(() => (this.article = articles.article));
    articles
      .getComments(this.$route.params.slug)
      .then(() => (this.comments = articles.comments));
  }

  get user() {
    return users.user;
  }

  postComment() {
    if (this.article) {
      console.log(this.comment.body);
      this.comment.slug = this.article.slug;
      articles.createComment(this.comment).then(()=>this.comment.body='');
    }
  }
}
</script>