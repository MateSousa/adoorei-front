<template>
    <div class="cart-details">
        <div v-for="product in $carts" :key="product.id" class="cart-product">
            <div class="products-cart flex justify-start items-center gap-10 sm:justify-center ">
                <div class="product-cart-img">
                    <img class="w-40" :src="product.image" :alt="`Image of ${product.title}`" />
                </div>
                <div class="product-cart-info">
                    <h2>{{product.title}}</h2>
                    <h3>${{product.price}}</h3>
                </div>
            </div>
            <div class="product-cart-action flex items-center gap-10">
                <ProductQuantity 
                @decrease="removeOneProduct(product)" 
                @increase="addOneProduct(product)"
                :quantity="product.productQuantity" />
                <Button text="Remove" class="remove-product" @click="removeProduct(product)"/>
            </div>      
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { carts } from '@/store'

export default Vue.extend({
    computed: {
        $carts() {            
            return carts.$all                  
        }
    },
    methods: {  
        addOneProduct(product) {
            carts.addOneProduct(product);
        },
        removeOneProduct(product) {
            carts.removeOneProduct(product);
        },
        removeProduct(product) {
            carts.removeProduct(product);            
        }
    }
})
</script>

<style scoped>

.cart-product {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px;
}

.remove-product {

    width: 100px;
    height: 3rem;
    background-color: #ff7300;
    color: #fff;
    border: none;
    margin-top: 19px;
    border-radius: .25rem;
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>