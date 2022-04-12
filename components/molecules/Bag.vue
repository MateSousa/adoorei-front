<template>
    <div class="bag flex align-center justify-center">
        <div class="img">
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" />
        </div>
        <div class="count">
            {{ count }}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                count: 0
            }
        }
    })
</script>

<style scoped>

    .img {
        position: relative;
        z-index: -1;
    }

    svg {
        width: 25px;
        height: 25px;
    }

    .count {
        position: relative;
        z-index: 10;
        top: -5px;
        right: 10px;
        color: red;        
    }
</style>
 
