<template>
    <div class="cart-template">
        <div class="cart-empty" v-if="isEmpty">
            <h1>Your cart is empty</h1>
            <NuxtLink to="/">
                <Button text="Go to home" class="btn-to-shop"/>
            </NuxtLink>
        </div>
        <div class="cart-container" v-if="isEmpty === false">
            <CartDetails />
            <div class="cart-final-step mt-5 flex flex-col justify-center items-center">
                <h4 class="font-bold text-lg">Total price: <span class="font-normal">${{totalPrice}}</span></h4>
                <Button text="Checkout" class="btn-checkout"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { carts } from '@/store'

export default Vue.extend({       
    computed: {
        totalPrice()  {
            return carts.$all.reduce((total, cart) => {
                const price = total + cart.price
                const priceRounded = Math.round(price * 100) / 100
                return priceRounded
            }, 0)
        },
        isEmpty() {
            return carts.$all.length === 0
        }
    },
        
})
</script>

<style scoped>

.cart-empty { 
    text-align: center;

}



.btn-checkout, .btn-to-shop {
    background-color: #111;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    width: 200px;
    margin-top: 20px;
}

</style>