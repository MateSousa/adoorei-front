<template>
    <div class="product-details-template">        
        <h1 class="text-2xl" >{{ $product.title }}</h1>
        <ProductDetails />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
    computed: {
        $product() {
            return products.$single
        }
    },

        
})
</script>

<style scoped>

</style>