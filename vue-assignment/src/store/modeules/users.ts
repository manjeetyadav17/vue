import { VuexModule, Module, getModule, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { User, Profile, UserSubmit, UserForUpdate, UserRegister } from '../models';
import { loginUser, getProfile, updateUser, setJWT, registerUser, clearJWT, follow, unFollow } from '../api';
import { loginFailed, localStorageUserKey } from '../constants';


@Module({
    dynamic: true,
    namespaced: true,
    name: 'users',
    store,
})
class UsersModule extends VuexModule {
    user?: User | null = null;
    profile?: Profile | null = null;

    @Mutation
    setUser(user: User) {
        setJWT(user.token);
        window.localStorage.setItem(localStorageUserKey,JSON.stringify(user));
        this.user = user;
    }

    @Mutation
    setProfile(profile: Profile) {
        this.profile = profile;
    }

    @Mutation
    userLogout(){
        clearJWT();
        window.localStorage.removeItem(localStorageUserKey);
        this.user=null;
    }

    @Mutation
    userLoggedIn(){
        if(window.localStorage.getItem(localStorageUserKey)){
            this.user= JSON.parse(String(window.localStorage.getItem(localStorageUserKey))) as User;
            setJWT(this.user.token);
        }
    }


    get usernameExists(): string | null{
        return this.user != null ? this.user.username : null;
    }

    @Action({ commit: 'setUser' })
    async login(userSubmit: UserSubmit) {

        try {
            const user = await loginUser(userSubmit);
            return user;
        }
        catch (e) {
            console.log(e);
            throw new Error(loginFailed);
        }
    }

    @Action({ commit: 'setProfile' })
    async loadProfile(username: string) {
        const profile = await getProfile(username);
        return profile;
    }

    @Action({commit: 'setProfile'})
    async follow(username:string){
        const profile = await follow(username);
        return profile;
    }

    @Action({commit: 'setProfile'})
    async unfollow(username:string){
        const profile = await unFollow(username);
        return profile;
    }

    @Action({ commit: 'setUser' })
    async updateUser(userUpdate: UserForUpdate) {
        const user = await updateUser(userUpdate);
        return user;
    }

    @Action({ commit: 'setUser' })
    async registerUser(userRegister: UserRegister) {
        const user = await registerUser(userRegister.user);
        return user;
    }

    @Action({ commit: 'userLogout' })
    async logoutUser() {
    }

    @Action({ commit: 'userLoggedIn' })
    async userAlredyLoggedIn(){
    }

}

export default getModule(UsersModule);