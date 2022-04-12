import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Product } from '@/models'

interface Show {
  category: string
}

@Module({ namespaced: true, name: 'categories', stateFactory: true })
export default class Categories extends VuexModule { 

    private categories: string = ''
    private category = {} as  Product[]
    
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
    SET_CATEGORY(category: Product[]) {
        this.category = category
    }

    @Action({ rawError: true })
    public async index() {
        const categories = await $axios.$get('/products/categories')
        this.context.commit('SET_CATEGORIES', categories)
    }

    @Action({ rawError: true })
    public async show(category: string) {
        const singleCategory = await $axios.$get(`/products/category/${category}`)
        this.context.commit('SET_CATEGORY', singleCategory)
    }   

}