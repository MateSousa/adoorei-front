<template>
    <header class="header h-16">
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

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);    
}
.container  {
    max-width: 1200px;
}

</style>