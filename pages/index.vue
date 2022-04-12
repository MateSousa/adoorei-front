<template>
  <HomeTemplate/>
</template>

<script lang="ts">
import Vue from 'vue'
import { products, categories } from '@/store'

export default Vue.extend({
  layout: 'adoorei',
  async asyncData() {
    await products.index()
    await categories.index()
    
  },
})
</script>
