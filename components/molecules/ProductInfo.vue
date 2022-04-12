<template>
    <div class="product-info">
        <div class="product-description">
            <h2>{{ $product.description }}</h2>
        </div>
        <div class="product-price">
            <p>{{ $product.price }}</p>
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