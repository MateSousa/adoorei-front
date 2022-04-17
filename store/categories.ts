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
    
    public get $all() {
        return this.categories
    }

    public get $single() {
        return this.category
    }

    @Mutation
    private SET_CATEGORIES(categories: string) {
        this.categories = categories
    }

    @Mutation
    private SET_CATEGORY(category: Product[]) {
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

    @Action({ rawError: true })
    public async sortByTitle(category: string) { 
        const products = await $axios.$get(`/products/category/${category}`)
        const sorted = products.sort((a, b) => {
            if (a.title < b.title) {
                return -1
            }
            if (a.title > b.title) {
                return 1
            }
            return 0
        })
        this.context.commit('SET_CATEGORY', sorted)
    }

    @Action({ rawError: true })
    public async sortByPrice(category: string) {
        const products = await $axios.$get(`/products/category/${category}`)
        const sorted = products.sort((a, b) => {
            if (a.price < b.price) {
                return -1
            }
            if (a.price > b.price) {
                return 1
            }
            return 0
        })
        this.context.commit('SET_CATEGORY', sorted)
    }

    @Action({ rawError: true })
    public async sortByRating(category: string) {
        const products = await $axios.$get(`/products/category/${category}`)
        const sorted = products.sort((a, b) => {
            if (a.rating.count > b.rating.count) {
                return -1
            }
            if (a.rating.count < b.rating.count) {
                return 1
            }
            return 0
        })
        this.context.commit('SET_CATEGORY', sorted)
    }
    


}