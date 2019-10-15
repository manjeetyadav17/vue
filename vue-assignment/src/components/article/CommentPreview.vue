<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{comment.body}}</p>
    </div>
    <div class="card-footer">
      <router-link class="comment-author" :to="'/@'+comment.author.username">
        <img :src="comment.author.image" class="comment-author-img" />
      </router-link>&nbsp;
      <router-link
        class="comment-author"
        :to="'/@'+comment.author.username"
      >{{comment.author.username}}</router-link>
      <span class="date-posted">{{comment.createdAt}}</span>
      <span class="mod-options" @click="deleteComment()">
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Comment } from "../../store/models";
import articles from "../../store/modeules/articles";
@Component
export default class CommentPreview extends Vue {
  @Prop() comment?: Comment;

  deleteComment() {
    if (articles.article && this.comment) {
      articles.deleteComment({
        id: this.comment.id,
        slug: articles.article.slug
      });
    }
  }
}
</script>