<template>
    <nav class="nav">
        <ul class="items flex justify-center items-center gap-20">
            <li class="item">
                <NuxtLink to="/">
                    Home
                </NuxtLink>
            </li>
            <li class="item">
                Categories
                <div class="categories">
                    <ul class="categories-items" v-for="category in categories" :key="category.id" >
                        <li class="categories-item">
                            <NuxtLink :to="'/categories/' + category.id">
                                {{ category.name }}
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

    export default Vue.extend({
        
    })
</script>

<style scoped>

li {
    font-size: 18px;
}

</style>