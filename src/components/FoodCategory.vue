<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Meat
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="() => { recipeStore.getRecipes(); isFavorite=false }">Sea Food</a>
                  </li>
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesBeef">Beef</a>
                  </li>
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesChicken">Chicken</a>
                  </li>
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesPork">Pork</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesCanadian">Canadian</a>
                  </li>
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesAmerican">American</a>
                  </li>
                  <li class="nav-item" :class="{ 'active': !isFavorite }">
                    <a class="nav-link" href="#" @click="getRecipesThailand">Thailand</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" :class="{ 'active': !isFavorite }">
                <a class="nav-link" href="#" @click="getRecipesDessert">Dessert</a>
              </li>
              <li class="nav-item" :class="{ 'active': isFavorite }">
                <a class="nav-link" href="#" @click="isFavorite=true">My favorite meals</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row" v-if="!isFavorite">
        <RecipeCard v-if="recipeStore.recipes.length > 0" v-for="recipe in recipeStore.recipes" :key="recipe.idMeal" :recipe="recipe" />
        <div class="pt-5" v-if="recipeStore.recipes.length === 0 && !loading">No recipe found!!</div>
      </div>
      <div class="row" v-if="isFavorite">
        <RecipeCard v-for="fav in recipeStore.favoriteList" :key="fav.idMeal" :recipe="fav" />
      </div>
    </div>
  </template>
  
<script setup>
  import { useRecipeStore } from '../store/RecipeStore';
  import RecipeCard from '../components/RecipeCard.vue';
  import { onMounted, ref } from 'vue';
  
  const recipeStore = useRecipeStore();
  const loading = ref(true);
  const isFavorite = ref(false);
  
  const getRecipesBeef = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');
      const beef = await res.json();
      recipeStore.recipes = [...beef.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesChicken = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
      const chicken = await res.json();
      recipeStore.recipes = [...chicken.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesPork = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pork');
      const pork = await res.json();
      recipeStore.recipes = [...pork.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesCanadian = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      const canadian = await res.json();
      recipeStore.recipes = [...canadian.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesAmerican = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
      const american = await res.json();
      recipeStore.recipes = [...american.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesThailand = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=thai');
      const thai = await res.json();
      recipeStore.recipes = [...thai.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  const getRecipesDessert = async () => {
    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert');
      const dessert = await res.json();
      recipeStore.recipes = [...dessert.meals];
      isFavorite.value = false;
    } catch (error) {
      console.error(error);
    }
  };
  onMounted(() => {
    loading.value = true;
    recipeStore.getRecipes();
    loading.value = false;
    const savedFav = JSON.parse(localStorage.getItem('favoriteList')) || [];
    recipeStore.favoriteList = [...savedFav];
  });


</script>
<script>
  export default {
    name: 'FoodCategory',
  };

</script>
  
<style scoped>

.navbar{
  background: linear-gradient(45deg, #008631, #00A36C);
  padding: 10px;
}
.nav-item.active a {
  color: #000080;; 
}
.nav-link {
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: 'Trebuchet MS', sans-serif;
}
</style>