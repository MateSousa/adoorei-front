<template>
    <ProductDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
    async asyncData({ params }) {
        await products.show({ id: params.id as any })
    }
})
</script>


