import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { User, Profile, UserSubmit } from '../models';
import { loginUser, getProfile } from '../api';
import { loginFailed } from '../constants';


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
    setUser(user: User) { this.user = user }

    @Mutation
    setProfile(profile: Profile) {
        this.profile = profile;
    }

    get usernameExists(): string {
        return this.user != null ? this.user.username : '';
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


}

export default getModule(UsersModule);