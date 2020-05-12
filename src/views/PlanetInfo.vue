<template>
  <div class="container">
    <img class="planetimg" src="image-placeholder.jpg" alt="planet" />
    <h2>Jupiter</h2>
    <p>Information</p>
    <div class="buttongroup">
      <button>More Info</button>
      <button>Nearby POI</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: sans-serif;
  color: white;
  width: 768px;
  background: #0a0e28;
}

.planetimg {
  width: 80%;
  margin: 10%;
}

h2 {
  text-align: center;
}

p {
  width: 80%;
  margin: 1em auto;
}

.buttongroup {
  text-align: center;
}

button {
  margin: 1em 2em;
  border: none;
  background: white;
  padding: 1em;
  font-weight: bold;
  border-radius: 50%;
}
</style>
