<template>
    <header class="header">
        <nav class="nav">
            <ul class="items">
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
        <SearchInput />   
        <Bag />     
    </header>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>

</style>