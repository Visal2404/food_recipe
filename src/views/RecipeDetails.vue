<template>
  <div class="card mt-5 border-0 mx-auto">
    <div class="card-body">
      <img
          v-if="recipeStore.selectedRecipe"
          class="card-img-top rounded"
          :src="recipeStore.selectedRecipe.strMealThumb"
          :alt="recipeStore.selectedRecipe.strMeal"
        />
      <div class="d-flex justify-content-between">
        <h2 class="card-title mt-2">{{ recipeStore.selectedRecipe.strMeal }}</h2>
      </div>
      <h4 class="card-text mt-5">Ingredients</h4>
      <div>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="recipeStore.selectedRecipe[`strIngredient${index + 1}`]">
              {{ recipeStore.selectedRecipe[`strMeasure${index + 1}`] }} {{ recipeStore.selectedRecipe[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <h4 class="card-text mt-5">Instructions</h4>
      <div>
        <p>{{ recipeStore.selectedRecipe.strInstructions }}</p>
      </div>
    </div>
    <div v-if="recipeStore.error">
      <p>An error occurred: {{ recipeStore.error.message }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useRecipeStore } from '../store/RecipeStore';

const route = useRoute();
const recipeStore = useRecipeStore();

onMounted(async () => {
  try {
    await recipeStore.getOneRecipe(route.params.id);
  } catch (error) {
    recipeStore.setError(error);
    console.error(error);
  }
});
</script>

<style scoped>
.card-img-top {
  max-width: 350px; 
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.card-text{
  font-size : 24px;
  font-family: 'Trebuchet MS', sans-serif;
  color:#000080;
  font-weight: bold;
}
.card-title{
  font-size: 30;
  font-family: 'Trebuchet MS', sans-serif;
  color:#000080;
  font-weight: bold;
}
</style>
