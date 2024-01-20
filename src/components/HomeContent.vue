<template>
    <div class="content-container">
      <img src="../assets/1.jpg" class="img-thumbnail" alt="Food" style="width: 500px; height: 300px; float: left; margin-right: 10px;">
      <figcaption class="figure-caption text-start ms-3">
        <h2>Nutrition and Sustenance:</h2>
      </figcaption>
      <p>
        <strong>Essential Nutrients:</strong> Food provides essential nutrients such as proteins, carbohydrates, fats, vitamins, and minerals, which are crucial for the proper functioning of the body.
      </p>
      <p>
        <strong>Energy Source:</strong> Calories derived from food serve as the energy needed for bodily functions, growth, and daily activities.
      </p>
    </div>
  
    <div class="content-container-1">
      <img src="../assets/3.jpg" class="img-thumbnail" alt="Food" style="width: 400px; height: 300px; float: right; margin-left: 10px;">
      <figcaption class="figure-caption text-start ms-3">
        <h2>Health and Well-being:</h2>
      </figcaption>
      <p>
        <strong>Disease Prevention:</strong> A well-balanced and nutritious diet plays a vital role in preventing various health conditions, including deficiencies, obesity, and chronic diseases.
      </p>
      <p>
        <strong>Physical and Mental Health:</strong> Nutrient-rich foods contribute to physical health and can also impact mental well-being and cognitive function.
      </p>
    </div>

    <div class="content-container-2">
      <img src="../assets/4.jpg" class="img-thumbnail" alt="Food" style="width: 500px; height: 300px; float: left; margin-right: 10px;">
      <figcaption class="figure-caption text-start ms-3">
        <h2>Cultural and Social Significance:</h2>
      </figcaption>
      <p>
        <strong>Traditions and Rituals:</strong>  Food is often deeply intertwined with cultural traditions and rituals, playing a central role in celebrations, ceremonies, and gatherings.
      </p>
      <p>
        <strong>Identity and Heritage:</strong>  Different cuisines reflect the identity and heritage of a community or region, preserving cultural diversity.
      </p>
    </div>
  
  </template>
<script>
export default{
    name: 'Content',
}

</script>
  <style scoped>
  .content-container {
    padding-top: 40px;
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Trebuchet MS', sans-serif;
  }
  .content-container-1 {
    padding-top: 120px;
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Trebuchet MS', sans-serif;
  }
  .content-container-2 {
    padding-top: 140px;
    margin-left: 100px;
    margin-right: 100px;;
    font-family: 'Trebuchet MS', sans-serif;
  }
  
  h2 {
    font-size: 24px;
  }
  
  p {
    font-size: 18px;
    text-align: justify;
  }
  </style>
  