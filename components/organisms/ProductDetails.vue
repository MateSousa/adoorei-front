<template>
    <div class="product-details flex flex-col justify-center items-center">      

        <ProductCover class="w-56" :product="$product" />

        <ProductInfo class="flex flex-col mt-5 gap-5" :product="$product" />

        <ProductQuantity :quantity="quantity" @decrease="decrease"  @increase="increase"  />

        <div class="button-add-to-cart mt-5">
            <Button text="Add to  cart" @click="addToCart($product.id, quantity)" class="button-cart"/>
        </div>

        <div class="button-to-checkout mt-5">
            <NuxtLink to="/cart">
                <Button text="Go to cart" class="cart" />
            </NuxtLink>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products, carts } from '@/store'

export default Vue.extend({
    data() {
        return {
            quantity: 1
        }
    },    
    computed: {
        $product() {
            return products.$single
        }
    },
    methods: {
        addToCart() {
            carts.addProduct({
                id: this.$product.id,
                productQuantity: this.quantity,
                price: this.$product.price,
                title: this.$product.title,
                image: this.$product.image
            })
        },
        increase() {
            this.quantity++
        },
        decrease() {
            if (this.quantity > 1) {
                this.quantity--
            }
        }
    },
        
})
</script>

<style scoped>
.button-cart, .cart {
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

.cart {
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