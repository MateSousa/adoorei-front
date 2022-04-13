<template>
    <div class="product-category-template">
      <ProductFilter @change="changeOrder" />  
      <ProductCard v-for="product in $products" :key="product.id" :product="product" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { categories } from '@/store'

    export default Vue.extend({
        data() {
            return {
                order: 'No filter',
            }
        },
        methods: {
            changeOrder(order) {
                this.order = order
                this.$emit('change', order)
            }
        },
        computed: {
            $products() {
                const category = categories.$single[0].category
                if (!this.order) {
                    return categories.$single
                }
                else if (this.order === 'title') {
                    categories.sortByTitle(category)
                    return categories.$single
                }
                else if (this.order === 'price') {
                    categories.sortByPrice(category)
                    return categories.$single
                }
                else if (this.order === 'rating') {
                    categories.sortByRating(category)
                    return categories.$single
                }
                else if (this.order === 'No filter') {
                    categories.show(category)
                    return categories.$single
                }
               
            }

        },
    })
</script>

<style scoped>

.product-category-template {
    display: grid;
    grid-template-columns: auto;
    gap: 20px;

}

.product-filter { grid-area: 1 / 1 / 2 / 3; }

.product-card { grid-area: 2 / 1 / 3 / 3; }



</style>