<template>
    <ProductDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
    layout: 'adoorei',
    async asyncData({ params }) {
        await products.show({ id: params.id as any })
    },
    head(){
        return{
            title: `Adoorei | ${products.$single.title}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: products.$single.description
                }
            ]
        }
    }
})
</script>


