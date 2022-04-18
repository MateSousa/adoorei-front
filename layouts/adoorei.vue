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
    padding: 1rem;
    text-align: center;
}

</style>