<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../src/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch('fetchUser');
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
