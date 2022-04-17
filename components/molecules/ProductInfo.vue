<template>
    <div class="product-info">
        <div class="product-description">
            <h2 class="text-xl" >{{ product.description }}</h2>
        </div>
        <div class="product-price">
            <p class="text-lg content-start"> 
                <span class="font-bold">
                    Price:
                </span> 
                ${{ product.price }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        product: {
            type: Object,
            required: true
        }
    }
})
</script>

<style scoped>

</style>