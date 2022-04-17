<template>
  <HomeTemplate/>
</template>

<script lang="ts">
import Vue from 'vue'
import { products, categories, carts } from '@/store'

export default Vue.extend({
  layout: 'adoorei',
  async asyncData() {
    await products.index()
    await categories.index()
    await carts.index()
  },
  
  head() {
    return {
      title: 'Adoorei | Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A simple list of products'
        }
      ]
    }
  }
})
</script>
