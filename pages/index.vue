<template>
  <HomeTemplate/>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
  layout: 'adoorei',
  async asyncData() {
    return await products.index()
  },
})
</script>
