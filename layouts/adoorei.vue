<template>
    <div class="adoorei-layout">
        <Header />
        <main class="main mt-32">
            <Container>
                <Nuxt/>
            </Container>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>

.footer {
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    
}

</style>