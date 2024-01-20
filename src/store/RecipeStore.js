import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],
    favoriteList: JSON.parse(localStorage.getItem('favoriteList')) || [],
    selectedRecipe: {},
    error: null,
  }),
  actions: {
    async getRecipes() {
      try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const seafood = await res.json();
        this.recipes = [...seafood.meals];
      } catch (error) {
        this.setError(error);
      }
    },
    async getOneRecipe(id) {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        this.selectedRecipe = data.meals[0];
      } catch (error) {
        this.setError(error);
      }
    },
    async searchRecipes(searchTerm) {
      try {
        if (searchTerm) {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
          const data = await res.json();
          if (data.meals) {
            this.recipes = data.meals.filter((meal) => meal.strCategory === "Seafood");
          } else {
            this.recipes = [];
          }
        } else {
          this.getRecipes();
        }
      } catch (error) {
        this.setError(error);
      }
    },
    toggleFav(recipe) {
      if (this.favoriteList.some(({ idMeal }) => idMeal === recipe.idMeal)) {
        const filteredList = this.favoriteList.filter(({ idMeal }) => idMeal !== recipe.idMeal);
        this.favoriteList = filteredList;
        localStorage.setItem('favoriteList', JSON.stringify(filteredList));
      } else {
        this.favoriteList.push(recipe);
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));
      }
    },
    isFavorite(id) {
      return this.favoriteList.some(({ idMeal }) => idMeal === id);
    },
    setError(error) {
      this.error = error;
    },
  },
});
