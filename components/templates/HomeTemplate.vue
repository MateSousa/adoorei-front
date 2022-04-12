<template>
    <div class="home-template grid sm:grid-cols-2 grid-rows-5  justify-center items-center place-items-center gap-5">
        <ProductCard v-for="product in $products" :key="product.id" :product="product" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

    export default Vue.extend({
        computed: {
            $products() {
                return products.$all
            }
        }
    })
</script>

<style scoped>

@media (min-width: 481px) {
    .home-template {
        grid-template-columns: repeat(4, 300px);
    }

}

</style>