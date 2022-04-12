<template>
    <header class="header h-5">
        <Container class="flex justify-between items-center pt-5">
            <Navigation />
            <SearchInput class="sm:hidden" />   
            <Bag />  
        </Container>   
    </header>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>

.container  {
    max-width: 1200px;
}

</style>