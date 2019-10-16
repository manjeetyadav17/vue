import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Article, Comment, ArticleSubmit, CommentSubmit, CommentDelete } from '../models';
import { getGlobalFeed, getUserFeed, fetchArticle, fetchComents, createArticle, createComment, deleteComment, fetchArticleByQuery,fetchTags,deleteArticle, updateArticle } from '@/store/api'
type FeedType = 'global' | 'user';

@Module({
    namespaced: true,
    name: 'articles',
    store,
    dynamic: true,
})
class ArticlesModule extends VuexModule {
    Feed: Article[] = [];
    article?: Article | null = null;
    comments?: Comment[] = [];
    tab: string = 'global';
    tags?: string[] | null = [];

    @Mutation
    setFeed(articles: Article[]) {
        this.Feed = articles;
    }

    @Mutation
    setArticle(article: Article) {
        this.article = article;
    }

    @Mutation
    setComments(comments: Comment[]) {
        this.comments = comments;
    }

    @Mutation
    addComment(comment: Comment) {
        if (this.comments) {
            this.comments = this.comments.splice(0, 0, comment);
        }
    }
    @Mutation
    removeComment(id: number) {
        if (this.comments) {
            this.comments.splice(this.comments.findIndex(x => x.id == id), 1);
        }
    }

    @Mutation
    setTags(tags: string[]) {
        this.tags = tags;
    }

    @Action({ commit: 'setFeed' })
    async refreshGlobalFeed(feed: FeedType) {
        if (feed == "global") {
            const response = await getGlobalFeed();
            return response.articles;
        }
        else {
            const response = await getUserFeed();
            return response.articles;
        }
    }

    @Action({ commit: 'setFeed' })
    async getFeedByQuery(query: string) {
        const response = await fetchArticleByQuery(query);
        return response.articles
    }

    @Action({ commit: 'setArticle' })
    async getArticle(slug: string) {
        const response = await fetchArticle(slug);
        return response.article;
    }



    @Action({ commit: 'setComments' })
    async getComments(slug: string) {
        const response = await fetchComents(slug);
        return response.comments;
    }

    @Action({ commit: 'setArticle' })
    async createArticle(article: ArticleSubmit) {
        const response = await createArticle(article);
        return response.article;
    }

    @Action({ commit: 'setArticle' })
    async updateArticle(article: ArticleSubmit) {
        const response = await updateArticle(article);
        return response.article;
    }

    @Action({})
    async deleteArticle(slug:string){
        await deleteArticle(slug)
    }

    @Action({ commit: 'addComment' })
    async createComment(comment: CommentSubmit) {
        // console.log(comment);
        const response = await createComment(comment);
        return response.comment;
    }

    @Action({ commit: 'removeComment' })
    async deleteComment(comment: CommentDelete) {
        await deleteComment(comment);
        return comment.id;
    }

    @Action({commit: 'setTags'})
    async fetchTags(){
        const response=await fetchTags();
        return response.tags;
    }

    
}

export default getModule(ArticlesModule);
