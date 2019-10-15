import axios from 'axios';
import { UserSubmit, UserResponse, User, ArticlesResponse, ProfileResponse, Profile, UserForUpdate, Article, ArticleResponse, CommentsResponse, ArticleSubmit, CommentSubmit, CommentResponse, CommentDelete, TagsResponse, UserRegister } from './models';
import * as Urls from './urls';

export const conduitApi = axios.create({
    baseURL: Urls.baseURL,
})
export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

export function clearJWT() {
    delete conduitApi.defaults.headers.common['Authorization'];
}
export async function loginUser(user: UserSubmit): Promise<User> {
    const response = await conduitApi.post(Urls.login, {
        user
    });
    return (response.data as UserResponse).user;
}

export async function registerUser(user: Partial<UserForUpdate>){
    const response = await conduitApi.post(Urls.registerUser, {
        user
    });
    return (response.data as UserResponse).user;
}

export async function getProfile(username: string): Promise<Profile> {
    const response = await conduitApi.get(`${Urls.profile}/${username}`);
    return (response.data as ProfileResponse).profile
}

export async function getGlobalFeed() {
    const response = await conduitApi.get(Urls.articlesUrl);
    return response.data as ArticlesResponse;
}

export async function getUserFeed() {
    const response = await conduitApi.get(Urls.userFeed);
    return response.data as ArticlesResponse;
}

export async function updateUser(user: UserForUpdate): Promise<User> {
    const response = await conduitApi.put(Urls.userUpdate, {
        user
    });
    return (response.data as UserResponse).user;
}

export async function fetchArticle(slug: string): Promise<ArticleResponse> {
    const response = await conduitApi.get(Urls.articlesUrl + `/${slug}`);
    return response.data as ArticleResponse;
}

export async function fetchArticleByQuery(query: string): Promise<ArticlesResponse> {
    const response = await conduitApi.get(Urls.articlesUrl + `?${query}`);
    return response.data as ArticlesResponse;
}

export async function createArticle(article: ArticleSubmit): Promise<ArticleResponse> {
    const response = await conduitApi.post(Urls.articlesUrl, {
        article
    });
    return response.data as ArticleResponse;
}

export async function fetchComents(slug: string): Promise<CommentsResponse> {
    const response = await conduitApi.get(Urls.articlesUrl + `/${slug}` + Urls.comments);
    return response.data as CommentsResponse;
}

export async function createComment(comment: CommentSubmit): Promise<CommentResponse> {
    const response = await conduitApi.post(Urls.articlesUrl + `/${comment.slug}` + Urls.comments, {
        comment
    });
    return response.data as CommentResponse;
}

export async function deleteComment(comment:CommentDelete){
    await conduitApi.delete(Urls.articlesUrl + `/${comment.slug}` + Urls.comments + `/${comment.id}`);
}

export async function fetchTags(){
    const response = await conduitApi.get(Urls.tags);
    return response.data as TagsResponse;
}

