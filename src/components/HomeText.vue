<template>
    <figure class="figure">
      <div class="image-container">
        <img :src="imageUrl" class="figure-img img-fluid rounded" alt="...">
        <!-- <figcaption class="figure-caption text-end">A caption for the above image.</figcaption> -->
        <div class="overlay-text">{{ overlayText }}</div>
        <div class="overlay-p">{{ overlayP }}</div>
      </div>
    </figure>
  </template>
  
  <script>
  export default {
    components:{
        name: 'HomeText'
    },
    data() {
      return {
        imageUrl: require('../assets/cover1.jpg'), // Use the correct path based on your project structure
        overlayText: 'Welcome to Food Recipe',
        overlayP:'Why food so important?',
      };
    },
  };
  </script>
  
  <style scoped>
  .figure {
    position: relative;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 20px;
  }
  .figure-img {
  width: 70%; /* Adjust the width as needed */
  height: auto;
}
  
.overlay-text {
  position: absolute;
  top: 10%;
  left: 20%;
  color: #0abdea;
  font-size: 42px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Trebuchet MS', sans-serif;
}
.overlay-p {
  position: absolute;
  top: 30%;
  left: 20%;
  /* right: 20%; */
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Trebuchet MS', sans-serif;
}
  </style>
  