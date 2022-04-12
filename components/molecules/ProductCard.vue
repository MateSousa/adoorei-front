<template>
    <NuxtLink class="hover:bg-red" :to="`/product/${product.id}`" >
        <div
        class="product-card flex flex-col justify-center items-center gap-10 ">
            <div class="product-img">
                <img class="w-16 h-16" :src="product.image" :alt="`Image of ${product.title}`">
            </div>
            <div class="product-info">
                <h3 class="text-lg sm:text-base font-bold">
                    {{product.title}}
                </h3>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product } from '@/models'

export default Vue.extend({
    props: {
        product:  {
            type: Object,
            required: true
        } as PropOptions<Product>
    } 
})

</script>

<style scoped>

</style>