<template>
    <div class="product-details flex flex-col justify-center items-center">      

        <ProductCover class="w-56" />

        <ProductInfo class="flex flex-col mt-5 gap-5" />

        <div class="product-qnt flex justify-between items-center text-xl mt-5">
            <span @click="qnt--" class="decrease">-</span>
            <span class="quantity" >{{ qnt }}</span>
            <span @click="qnt++" class="increase">+</span>
        </div>

        <div class="button-add-to-cart mt-5">
            <Button text="Add to  cart" @click="addToCart" class="button-cart"/>
        </div>

        <div class="button-to-checkout mt-5">
            <NuxtLink to="/checkout">
                <Button text="Go to checkout" class="checkout" />
            </NuxtLink>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
    data() {
        return {
            qnt: 1
        }
    },
    computed: {
        $product() {
            return products.$single
        }
    },
    methods: {
        addToCart() {
            console.log(this.$product.id)
        }
    },
        
})
</script>

<style scoped>
.button-cart, .checkout {
    width: 450px;
    height: 3rem;
    border-radius: .75rem;
    border: 1px solid #ccc;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.button-cart {
    background-color: #111;
    color: #fff;
}

.checkout {
    background-color: #808080;
    color: #fff;
}

.button-cart:active {
    background-color: #fd7e14;
}


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


@media (min-width: 481px) {
    .button-cart:hover, .checkout:hover {
        background-color: #fd7e14;
    }

    

}

</style>