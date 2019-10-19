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
          <button
            class="btn btn-sm btn-outline-secondary"
            v-if="article.author.username!=user.username && !profile.following"
            @click="followUser()"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{article.author.username}}
          </button>
          <button
            class="btn btn-sm btn-secondary"
            v-if="article.author.username!=user.username  && profile.following"
            @click="followUser()"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            Unfollow {{article.author.username}}
          </button>
          &nbsp;&nbsp;
          <button
            class="btn btn-sm btn-primary"
            v-if="article.author.username!=user.username && article.favorited"
            @click="favoriteArticle()"
          >
            <i class="ion-heart"></i>
            &nbsp;
            UnFavorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
          <button
            class="btn btn-sm btn-outline-primary"
            v-if="article.author.username!=user.username && !article.favorited"
            @click="favoriteArticle()"
          >
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
          <router-link
            class="btn btn-sm btn-outline-secondary"
            v-if="article.author.username==user.username"
            :to="'/editor/'+article.slug"
          >
            <i class="ion-edit"></i>
            &nbsp;
            Edit Article
          </router-link>&nbsp;&nbsp;
          <button
            class="btn btn-sm btn-outline-danger"
            v-if="article.author.username==user.username"
            @click="deleteArticle()"
          >
            <i class="ion-trash-a"></i>
            &nbsp;
            Delete Article
            <span class="counter"></span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{article.body}}</p>
        </div>

      <ul class="tag-list" v-for="tag in article.tagList" :key="tag">
        <li class="tag-default tag-outline tag-pill">{{tag}}</li>
      </ul>

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

          <button
            class="btn btn-sm btn-outline-secondary"
            v-if="article.author.username!=user.username && !profile.following"
            @click="followUser()"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{article.author.username}}
          </button>
          <button
            class="btn btn-sm btn-secondary"
            v-if="article.author.username!=user.username  && profile.following"
            @click="followUser()"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            Unfollow {{article.author.username}}
          </button>
          &nbsp;&nbsp;
          <button
            class="btn btn-sm btn-primary"
            v-if="article.author.username!=user.username && article.favorited"
            @click="favoriteArticle()"
          >
            <i class="ion-heart"></i>
            &nbsp;
            UnFavorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
          <button
            class="btn btn-sm btn-outline-primary"
            v-if="article.author.username!=user.username && !article.favorited"
            @click="favoriteArticle()"
          >
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Article
            <span
              class="counter"
            >({{article.favoritesCount}})</span>
          </button>
          <router-link
            class="btn btn-sm btn-outline-secondary"
            v-if="article.author.username==user.username"
            :to="'/editor/'+article.slug"
          >
            <i class="ion-edit"></i>
            &nbsp;
            Edit Article
          </router-link>&nbsp;&nbsp;
          <button
            class="btn btn-sm btn-outline-danger"
            v-if="article.author.username==user.username"
            @click="deleteArticle()"
          >
            <i class="ion-trash-a"></i>
            &nbsp;
            Delete Article
            <span class="counter"></span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2" v-if="user.username">
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
        <div class="col-xs-12 col-md-8 offset-md-2" v-if="!user.username">
          <router-link to="/login">Sign in</router-link>or
          <router-link to="/register">sign up</router-link>to add comments on this article.
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
  comment: CommentSubmit = {
    body: "",
    slug: ""
  };

  created() {
    articles.getArticle(this.$route.params.slug).then(() => {
      users.loadProfile(this.article.author.username);
    });
    articles.getComments(this.$route.params.slug);
  }
  get article() {
    return articles.article || { slug: "", author: { username: "" }, favorited:false };
  }

  get comments() {
    return articles.comments || [];
  }

  get user() {
    return users.user || {};
  }

  get profile() {
    return users.profile || { following: false };
  }

  postComment() {
    if (this.article) {
      this.comment.slug = this.article.slug;
      articles.createComment(this.comment).then(() => (this.comment.body = ""));
    }
  }

  deleteArticle() {
    if (this.article) {
      articles
        .deleteArticle(this.article.slug)
        .then(() => this.$router.push("/"));
    }
  }

  followUser() {
    if (!this.profile.following) {
      users.follow(this.article.author.username);
    } else {
      users.unfollow(this.article.author.username);
    }
  }

  favoriteArticle(){
    if (!this.article.favorited) {
      articles.favoriteArticle(this.article.slug);
    } else {
      articles.unFavoriteArticle(this.article.slug);
    }
  }
}
</script>