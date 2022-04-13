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
    },
    head(){
        return{
            title: `Adoorei | ${categories.$single[0].category.toLocaleUpperCase()}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `A list of products in ${categories.$single[0].category}`
                }
            ]
        }
    }
})
</script>


