<!-- SearchBar.vue -->
<template>
    <div class="row">
      <div class="col-md-8 col-lg-5">
        <div class="input-group mt-4">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            v-model="searchTerm"
          />
          <div class="input-group-append">
            <span
              class="input-group-text material-icons"
              id="basic-addon2"
              @click="performSearch"
            >
              search
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['searchFunction']);
  const searchTerm = ref('');
  
  const performSearch = () => {
    props.searchFunction(searchTerm.value);
    searchTerm.value = '';
  };
  </script>
  
  <style scoped>
  /* Add any scoped styling if needed */
  </style>
  