<template>
    <div class="error-layout">
        <Header />
            <main class="main mt-32">
                <Container>
                    <div class="error-msg flex flex-col justify-center items-center text-3xl sm:text-lg un">
                        <h1 class="text-orange">Oops!</h1>
                        <h2>We can't seem to find the page you are looking for.</h2>
                        <a href="/" class="underline">Go to home page</a>
                    </div>
                </Container>
            </main>
        <Footer />
    </div>
</template>


<style scoped>

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    
}

</style>

