import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Cart } from '@/models'



@Module({ namespaced: true, name: 'cart', stateFactory: true })
export default class Carts extends VuexModule {
    private cart = {} as Cart

    get $single() {
        return this.cart
    }

    @Mutation
    SET_CART(cart: Cart) {
        this.cart = cart
    }

    @Mutation
    ADD_PRODUCT(product: Cart['products'][0]) {
        this.cart.products.push(product)
    }

    @Mutation
    REMOVE_PRODUCT(product: Cart['products'][0]) {
        this.cart.products.splice(this.cart.products.indexOf(product), 1)
    }

    @Action({ rawError: true })
    public async index() {
        const cart = this.cart || [] 
        return cart
    }

    @Action({ rawError: true })
    public async addProduct(product: Cart['products'][0]) {
        this.context.commit('ADD_PRODUCT', product)
    }

    @Action({ rawError: true })
    public async removeProduct(product: Cart['products'][0]) {
        this.context.commit('REMOVE_PRODUCT', product)
    }

    
    


        
        






    




}