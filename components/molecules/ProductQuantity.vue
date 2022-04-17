<template>
    <div class="product-quantity">
        <div class="product-qnt flex justify-between items-center text-xl mt-5">
            <span @click="$emit('decrease')" class="decrease">-</span>
            <span class="quantity" >{{ quantity }}</span>
            <span @click="$emit('increase')" class="increase">+</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        },           
    })
</script>

<style scoped>


.product-qnt {
    width: 100px;
    height: 3rem;
    background-color: #111;
    color: #fff;
    border-radius: .25rem;
    border: 1px solid #ccc;
    text-transform: uppercase;
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.product-qnt:active {
    background-color: #fd7e14;
}

</style>