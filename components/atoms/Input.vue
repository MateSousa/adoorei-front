<template>
    <input class="input" :placeholder="placeholder" :type="type"/>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        }
    })
</script>

<style scoped>

.input {
    width: 100%;
}

</style>