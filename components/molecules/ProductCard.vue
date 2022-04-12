<template>
    <NuxtLink :to="`/product/${product.id}`" >
        <div
        class="product-card flex flex-col justify-center items-center gap-10">
            <div class="product-img">
                <img :src="product.image" :alt="`Image of ${product.title}`">
            </div>
            <div class="product-info">
                <h3 class="text-base sm:text-sm font-bold p-2.5">
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

.product-card {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 200px;
    height: 250px;
}

.product-card:hover  {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

img {
    width: 70px;
    height: 65px;
}

@media (min-width: 481px) {
    .product-card {
        width: 260px;
        height: 270px;
    }

    img { 
        width: 100px;
        height: 95px;
    }
}

</style>