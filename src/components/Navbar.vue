<template>
  <div>
    <div>
      <nav class="nav">
        <img src="../assets/recipe.png" alt="Logo" class="small-logo" />
        <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">Home</router-link>
        <router-link to="/feed" class="nav-link" :class="{ 'active': $route.path === '/feed' }">Food Recipe</router-link>
        <button @click="$store.dispatch('logout')" class="btn btn-danger">Logout</button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style scoped>
.nav {
  background: linear-gradient(45deg, #008631, #00A36C); /* Gradient background */
  padding: 20px;
  display: flex;
  align-items: center;
}

.nav-link {
  color: #fff;
  transition: color 0.3s ease;
  font-size: 18px;
  font-family: 'Trebuchet MS', sans-serif;
  margin-right: 20px; 
  text-decoration: none;
}

.nav-link.active {
  color: #000080;
}

.btn {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 18px;
}

.small-logo {
  width: 40px;
  height: 40px;
}
</style>
