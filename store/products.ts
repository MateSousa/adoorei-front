import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Product } from  '@/models'

interface Show {
  id: Product['id']
}

@Module({ namespaced: true, name: 'products', stateFactory: true })
export default class Products extends VuexModule { 

    private products = {} as  Product[]
    private product = {} as Product
    
    get $all() {
        return this.products
    }

    get $single() {
        return this.product
    }

    @Mutation
    SET_PRODUCTS(products: Product[]) {
        this.products = products
    }

    @Mutation
    SET_PRODUCT(product: Product) {
        this.product = product
    }

    @Action({ rawError: true })
    public async index() {
        const products = await $axios.$get('/products')
        this.context.commit('SET_PRODUCTS', products)
    }

    @Action({ rawError: true })
    public async show({ id }: Show) {
        const product = await $axios.$get(`/products/${id}`)
        this.context.commit('SET_PRODUCT', product)
    }

}