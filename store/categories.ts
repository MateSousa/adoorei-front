import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'



@Module({ namespaced: true, name: 'categories', stateFactory: true })
export default class Categories extends VuexModule { 

    private categories: string = ''
    private category: string = ''
    
    get $all() {
        return this.categories
    }

    get $single() {
        return this.category
    }

    @Mutation
    SET_CATEGORIES(categories: string) {
        this.categories = categories
    }

    @Mutation
    SET_CATEGORY(category: string) {
        this.category = category
    }

    @Action({ rawError: true })
    public async index() {
        const categories = await $axios.$get('/product/categories/')
        this.context.commit('SET_CATEGORIES', categories)
    }

    @Action({ rawError: true })
    public async show(category: string) {
        const singleCategory = await $axios.$get(`/product/categories/${category}`)
        this.context.commit('SET_CATEGORY', singleCategory)
    }   

}