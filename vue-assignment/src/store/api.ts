import axios from 'axios';
import { UserSubmit, UserResponse, User, ArticlesResponse, ProfileResponse, Profile, UserForUpdate } from './models';
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

export async function getProfile(username: string): Promise<Profile> {
    const response = await conduitApi.get(`${Urls.profile}/${username}`);
    return (response.data as ProfileResponse).profile
}

export async function getGlobalFeed() {
    const response = await conduitApi.get(Urls.articlesUrl);
    return response.data as ArticlesResponse;
}

export async function updateUser(user: UserForUpdate): Promise<User> {
    const response = await conduitApi.put(Urls.userUpdate, {
        user
    });
    return (response.data as UserResponse).user;
}