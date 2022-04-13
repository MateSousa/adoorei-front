import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Products from '@/store/products'
import Categories from '@/store/categories'
import Carts from '@/store/carts'

/* eslint-disable import/no-mutable-exports */
let products: Products
let categories: Categories
let carts: Carts

const initializeStores = (store: Store<any>): void => {
    products = getModule(Products, store)
    categories = getModule(Categories, store)
    carts = getModule(Carts, store)
}

export {
    initializeStores,
    products,
    categories,
    carts,
}