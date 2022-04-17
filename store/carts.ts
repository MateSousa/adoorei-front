import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $cookies } from '@/utils/nuxt-instance'

interface Payload {
    id: number
    title: string
    price: number
    image: string
    productQuantity: number
}

function updateLocalStorage(cart: Payload[]) {
    $cookies.set('cart', JSON.stringify(cart))
}

@Module({ namespaced: true, name: 'carts', stateFactory: true })
export default class Carts extends VuexModule {
    private cart = [] as Payload[]

    public get $all() {
        return $cookies.get('cart')
    }  


    @Mutation
    private SET_CART() {
        const cookies = $cookies.get('cart')    
        if (cookies) {
            this.cart = cookies
        } else {
            this.cart = []
            $cookies.set('cart', [])
        }
    }

    @Mutation
    private ADD_CART(cart: Payload) {
        const localStorage = $cookies.get('cart')
        if (localStorage.length === 0) {
            localStorage.push(cart)
            updateLocalStorage(localStorage)    
        } else if (localStorage.length > 0) {
            const index = localStorage.findIndex(item => item.id === cart.id)
            if (index > -1) {
                localStorage[index].productQuantity += cart.productQuantity
                localStorage[index].price += cart.price
                updateLocalStorage(localStorage)
            } else {
                localStorage.push(cart)
                updateLocalStorage(localStorage)
            }            
        }   
    }

    @Mutation
    private ADD_ONE_PRODUCT(cart: Payload) {
        const localStorage = $cookies.get('cart')
        const index = localStorage.findIndex(item => item.id === cart.id)
        if (index > -1) {
            localStorage[index].price += localStorage[index].price / localStorage[index].productQuantity        
            localStorage[index].productQuantity += 1
            updateLocalStorage(localStorage)
        } else {
            return `Something went wrong`
        }
        
    }        
    

    @Mutation
    private REMOVE_ONE_PRODUCT(cart: Payload) {
       const localStorage = $cookies.get('cart')
        const index = localStorage.findIndex(item => item.id === cart.id)
        if (index > -1) {
            localStorage[index].price -= localStorage[index].price / localStorage[index].productQuantity
            localStorage[index].productQuantity -= 1
            updateLocalStorage(localStorage)
        } else {
            return `Something went wrong`
        }
        
    }

    @Mutation
    private REMOVE_CART_PRODUCT(cart: Payload) {
        const localStorage = $cookies.get('cart')
        const index = localStorage.findIndex(item => item.id === cart.id)
        if (index > -1) {
            localStorage.splice(index, 1)
            updateLocalStorage(localStorage)
        } else {
            return `Something went wrong`
        }

    }

    @Action({ rawError: true })
    public index() {
       this.context.commit('SET_CART')
    }

    @Action({ rawError: true })
    public addProduct(payload: Payload) {
        const product = payload
        this.context.commit('ADD_CART', product)
    }

    @Action({ rawError: true }) 
    public addOneProduct(payload: Payload) {
        const product = payload        
        this.context.commit('ADD_ONE_PRODUCT', product)
    }

    @Action({ rawError: true })
    public removeProduct(payload: Payload) {
        const product = payload
        this.context.commit('REMOVE_CART_PRODUCT', product)
    }

    @Action({ rawError: true })
    public removeOneProduct(payload: Payload) {
        const product = payload
        this.context.commit('REMOVE_ONE_PRODUCT', product)
    }

    



}