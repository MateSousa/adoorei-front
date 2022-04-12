import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Products from '@/store/products'

/* eslint-disable import/no-mutable-exports */
let products: Products

const initializeStores = (store: Store<any>): void => {
    products = getModule(Products, store)

}

export {
    initializeStores,
    products
}