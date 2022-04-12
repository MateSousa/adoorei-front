<template>
    <div class="container">
        <slot/>
    </div>
</template>



<style  scoped>
.container {
  margin: 0 auto;
  max-width: 1000px;
  @media  (max-width: 480px) {
    width: 90%;
  }

  @media  (min-width: 481px) {
    width: 85%;
  }
}
</style>