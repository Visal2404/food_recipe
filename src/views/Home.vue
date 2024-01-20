<template>
    <!-- <h1>Why Food Important?</h1> -->
    <HomeText />
    <HomeContent />
    <RandomFood />
    <Footer />
  </template>
<script>
import HomeContent from '../components/HomeContent.vue';
import HomeText from '../components/HomeText.vue';
import RandomFood from '../components/RandomFood.vue';
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components: {
        HomeContent,
        HomeText,
        RandomFood,
        Footer,
    },
};

</script>
<style scoped>
/* *{  background: linear-gradient(45deg, #008631, #00A36C);
} */
</style>
  