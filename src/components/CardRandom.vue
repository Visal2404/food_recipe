<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card mt-5 border-0">
        <div class="card-body">
          <routerLink :to="{name:'recipe', params:{id: recipe.idMeal}}"><img class="card-img-top rounded" :src="recipe.strMealThumb" :alt="recipe.strMeal" /></routerLink>
          <h6 class="card-title mt-2">{{ recipe.strMeal }}</h6>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRecipeStore } from '../store/RecipeStore';
  
  const props = defineProps({
    recipe: {
      type: Object,
      required: true,
    }
  })
  const recipeStore = useRecipeStore();
  
  </script>

  <style scoped>
.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #000080;
  margin-top: 10px;
  font-family: 'Trebuchet MS', sans-serif;
}
.card-img-top {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
  </style>