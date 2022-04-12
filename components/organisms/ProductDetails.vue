<template>
    <div class="product-details flex flex-col justify-center items-center">
        <div class="product-title">
            <h1>{{ $product.title }}</h1>
        </div>
        <ProductCover />
        <ProductInfo />
        <div class="product-qnt">
            <span @click="qnt--">-</span>
            <input type="text" v-model="qnt" placeholder="0"/>
            <span @click="qnt++" >+</span>
        </div>
        <div class="button-add-to-cart">
            <button @click="addToCart($product)">Add to cart</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
    data() {
        return {
            qnt: 1
        }
    },
    computed: {
        $product() {
            return products.$single
        }
    },
    methods: {
        addToCart() {
            console.log(this.$product.id)
        }
    },
        
})
</script>

<style scoped>

</style>