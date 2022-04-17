<template>
    <nav class="nav">
        <ul class="items flex justify-center items-center gap-20">
            <li class="item">
                <NuxtLink to="/">
                    Home
                </NuxtLink>
            </li>
            <li class="item" @click="isOpen">
                <p class="cursor-pointer">Categories</p>
                <div class="categories "  v-show="show">
                    <ul class="categories-items" v-for="category in $categories" :key="category" >
                        <li class="categories-item flex flex-col items-start cursor-pointer">
                            <NuxtLink :to="`/category/${category}`" @click="isOpen" class="p-5">
                                {{ category }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { categories } from '@/store'

export default Vue.extend({
    data() {
        return {
            show: false,
        }
    },
    computed: {
        $categories() {
            return categories.$all
        }
    },
    methods: {
        isOpen() {
            this.show = !this.show
        }
    }
})
</script>

<style scoped>

li {
    font-size: 18px;
}

.categories {
    position: absolute;
    background: #fff;
    z-index: 1;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
}

a::first-letter {
    text-transform: uppercase;
}

</style>