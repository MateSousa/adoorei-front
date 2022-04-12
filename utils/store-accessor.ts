import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Products from '@/store/products'
import Categories from '@/store/categories'

/* eslint-disable import/no-mutable-exports */
let products: Products
let categories: Categories

const initializeStores = (store: Store<any>): void => {
    products = getModule(Products, store)
    categories = getModule(Categories, store)
}

export {
    initializeStores,
    products,
    categories,
}