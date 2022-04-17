<template>
    <NuxtLink to="/cart">
        <div class="bag flex justify-center">
            <div class="img ">
                <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
            </div>
            <p class="count">
                {{ $carts.length }}
            </p>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { carts } from '@/store'

    export default Vue.extend({
        data() {
            return {
                count: 0
            }
        },
        computed: {
            $carts() {
                return carts.$all
            }
        },
    })
</script>

<style scoped>


    svg {
        width: 25px;
        height: 25px;
    }

    .count {
        position: relative;
        z-index: 10;
        top: -5px;
        right: 10px;
        color: #ff7300;        
    }
</style>
 
