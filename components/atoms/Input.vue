<template>
    <input class="input" :placeholder="placeholder" :type="type" v-model="search" @keyup.enter="searchProducts"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

    export default Vue.extend({
        data() {
            return {
                search: '',
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            searchProducts() {
                products.filter(this.search)
            }
        },
       
    })
</script>

<style scoped>

.input {
    width: 100%;
}

</style>