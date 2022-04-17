<template>
    <CartTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import  {carts} from '@/store'

export default Vue.extend({
    layout: 'adoorei',
    head() {
        return {
            title: 'Adoorei | Cart',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'A simple list of products'
                }
            ]
        }
    },
    async asyncData(){
        await carts.index()
    }
})
</script>

<style scoped>

</style>