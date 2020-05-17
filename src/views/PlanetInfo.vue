<template>
  <div class="container">
    <router-link to="mercury">Mercury</router-link>
    <router-link to="venus">Venus</router-link>
    <router-link to="earth">Earth</router-link>
    <router-link to="mars">Mars</router-link>
    <router-link to="jupiter">Jupiter</router-link>
    <router-link to="saturn">Saturn</router-link>
    <router-link to="uranus">Uranus</router-link>
    <router-link to="neptune">Neptune</router-link>
    <img class="planetimg" src="planetimg.png" alt="Image of the planet" />
    <h2>{{ name }}</h2>
    <p>Information</p>
    <div class="buttongroup">
      <button>More Info</button>
      <button>Nearby POI</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetInfo',
  props: ['name'],
  data() {
    return {
      currentPlanet: {},
      planets: {
        mercury: {
          name: 'Mercury',
          imgPath: '../assets/mercury.png'
        },
        venus: {
          name: 'Venus',
          imgPath: '../assets/venus.png'
        }
      }
    };
  },
  watch: {
    $route() {
      this.updatePlanet();
    }
  },
  mounted() {
    this.updatePlanet();
  },
  methods: {
    updatePlanet() {
      const planet = this.name;
      this.currentPlanet = this.planets.planet;
      console.log(planet);
    }
  }
};
</script>

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
