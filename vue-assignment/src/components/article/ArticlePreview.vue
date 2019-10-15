<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="'/@'+article.author.username">
        <img :src="article.author.image" />
      </router-link>
      <div class="info">
        <router-link :to="'/@'+article.author.username">{{article.author.username}}</router-link>
        <span class="date">{{article.createdAt}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i>
        {{article.favoritesCount}}
      </button>
    </div>
    <router-link class="preview-link" :to="'/article/'+article.slug">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
      <ul class="tag-list" v-for="tag in article.tagList" :key="tag">
        <li class="tag-default tag-pill tag-outline">{{tag}}</li>
      </ul>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Article } from "../../store/models";

@Component
export default class ArticlePreview extends Vue {
  @Prop() article?: Article;
}
</script>