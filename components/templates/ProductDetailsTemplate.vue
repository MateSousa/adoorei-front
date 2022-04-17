<template>
    <div class="product-details-template flex flex-col items-center">        
        <h1 class="text-2xl self-start" >{{ $product.title }}</h1>
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

.product-details-template  {
    width: 100%;
}

</style>