<template>
    <div class="product-img">
        <img :src="product.image" :alt="`Image of ${product.title}`" />
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