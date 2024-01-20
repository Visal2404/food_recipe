<template>
    <div class="c1 .container-fluid">
      <div class="header">
        <h1 class="main-header">Bored with your everyday Food</h1>
        <h2 :class="{ 'not-selected': isFavorite }" class="sub-heading px-4 hover" @click="getRecipesVegan">Try some new food with us</h2>
      </div>
      <div class="row" v-if="!isFavorite">
        <CardRandom v-if="recipeStore.recipes.length > 0" v-for="recipe in recipeStore.recipes" :key="recipe.idMeal" :recipe="recipe" />
        <div class="pt-5" v-if="recipeStore.recipes.length === 0 && !loading">No recipe found!!</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRecipeStore } from '../store/RecipeStore';
  import { onMounted, ref } from 'vue';
  import CardRandom from '../components/CardRandom.vue';
  
  const recipeStore = useRecipeStore();
  const loading = ref(true);
  const isFavorite = ref(false);
  
  const getRecipesVegan = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan');
      const Vegan = await res.json();
      recipeStore.recipes = [...Vegan.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(async () => {
    await getRecipesVegan();
  });
  </script>
  
  <script>
  export default {
    name: 'FoodRandom',
  };
  </script>
  
  <style scoped>
  * {
    margin-left: 40px;
    margin-right: 40px;
  }
.header{
    padding-top: 140px;
}
  
  .main-header {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Trebuchet MS', sans-serif;
  }
  
  .sub-heading {
    font-size: 22px;
    cursor: pointer;
    font-family: 'Trebuchet MS', sans-serif;
  }
  
  </style>
  