<template>
    <header class="header h-16">
        <Container class="flex justify-between items-center pt-5">
            <Navigation />
            <SearchInput class="sm:hidden input" />   
            <Bag />  
        </Container>   
    </header>
</template>

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

.input {
    width: 400px;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #111;
    transition: all 0.2s ease-in-out;
    border:none;
}





</style>