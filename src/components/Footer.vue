<template>
    <div>
        <div class="text">
            <p><router-link to="/feed" class="nav-link" :class="{ 'active': $route.path === '/feed' }">For more food recipe to cook and eat visit Food Recipe</router-link></p>
        </div>
    </div>

</template>
<script>
export default{
    name: 'Footer',
}
</script>
<style scoped>
*{
    background: linear-gradient(45deg, #008631, #00A36C);
}
.text{
    margin-left: 100px;
  padding: 10px;
  font-size: 20px;
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: bold;
  color: white;
}
</style>