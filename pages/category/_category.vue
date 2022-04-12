<template>
    <ProductCategoryTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { categories } from '@/store'

export default Vue.extend({
    layout: 'adoorei',
    async asyncData({ params }) {
        await categories.show(params.category as any)
    }
})
</script>


