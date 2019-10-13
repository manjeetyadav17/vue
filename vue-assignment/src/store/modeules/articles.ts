import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import { Article } from '../models';
import { getGlobalFeed} from '@/store/api'


@Module({
    namespaced: true,
    name: 'articles',
    store,
    dynamic: true,
})
class ArticlesModule extends VuexModule {
    Feed: Article[] = [];

    @Mutation
    setGlobalFeed(articles: Article[]){
        this.Feed=articles;
    }

    @Action({commit:'setGlobalFeed'})
    async refreshGlobalFeed(){
        const response= await getGlobalFeed();
        return response.articles;
    }
}

export default getModule(ArticlesModule);
