<template>
    <div class="product-img">
        <img :src="$product.image" :alt="`Image of ${$product.title}`" />
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