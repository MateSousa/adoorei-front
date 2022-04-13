<template>
    <div class="product-filter flex items-center gap-10">
        <p class="text-lg font-medium">Filter by</p>
        <select name="filters" v-model="select" @change="onChange">
            <option value="No filter" >No filter</option>
            <option  value="title">Name</option>
            <option  value="price" >Price</option>
            <option  value="rating" >Rating</option>
        </select>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            select: 'No filter'
        }
    },   
    methods: {
        onChange() {
            this.$emit('change', this.select)
        }
    }

})
            
</script>

<style scoped>

select  {
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    color: #333;
    outline: none;
}

</style>