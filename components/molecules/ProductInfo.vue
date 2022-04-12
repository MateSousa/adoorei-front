<template>
    <div class="product-info">
        <div class="product-description">
            <h2 class="text-xl" >{{ $product.description }}</h2>
        </div>
        <div class="product-price">
            <p class="text-lg content-start"> 
                <span class="font-bold">
                    Price:
                </span> 
                ${{ $product.price }}
            </p>
        </div>
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
    }
})
</script>

<style scoped>

</style>