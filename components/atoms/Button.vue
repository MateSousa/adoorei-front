<template>
    <button @click="$emit('click')">{{text}}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true
        }
    }        
})
</script>

<style scoped>

</style>