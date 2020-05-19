<template>
  <div class="container">
    <div id="routerlinks">
      <router-link
        v-if="currentPlanet.previousPlanet"
        :to="currentPlanet.previousPlanet"
        >Previous Planet</router-link
      >
      <router-link
        v-if="currentPlanet.nextPlanet"
        :to="currentPlanet.nextPlanet"
        >Next Planet</router-link
      >
    </div>
    <img :src="currentPlanet.imgPath" :alt="currentPlanet.imgAlt" />
    <h2>{{ currentPlanet.name }}</h2>
    <h3 v-if="currentPlanet.altName">{{ currentPlanet.altName }}</h3>
    <p v-if="currentPlanet.attnGrab">{{ currentPlanet.attnGrab }}</p>
    <div class="buttongroup">
      <button>More Info</button>
      <button>Nearby POI</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetInfo',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentPlanet: {},
      planets: {
        sun: {
          name: 'Sun',
          altName: null,
          // imgPath: require('../assets/sun.png'), uncomment these once we have an image of the sun
          // imgAlt: 'An image of the Sun',
          previousPlanet: null,
          nextPlanet: 'mercury'
        },
        mercury: {
          name: 'Mercury',
          altName: 'The Swift Planet',
          imgPath: require('../assets/mercury.png'),
          imgAlt: 'An image of planet Mercury',
          attnGrab:
            "Most of us know Mercury is the closest planet to the sun but did you know it's not the hottest?",
          previousPlanet: 'sun',
          nextPlanet: 'venus'
        },
        venus: {
          name: 'Venus',
          altName: 'The Morning Star',
          imgPath: require('../assets/venus.png'),
          imgAlt: 'An image of planet Venus',
          attnGrab: null,
          previousPlanet: 'mercury',
          nextPlanet: 'earth'
        },
        earth: {
          name: 'Earth',
          altName: 'The Blue Planet',
          imgPath: require('../assets/earth.png'),
          imgAlt: 'An image of planet Earth',
          attnGrab: null,
          previousPlanet: 'venus',
          nextPlanet: 'mars'
        },
        mars: {
          name: 'Mars',
          altName: 'The Red Planet',
          imgPath: require('../assets/mars.png'),
          imgAlt: 'An image of planet Mars',
          attnGrab: null,
          previousPlanet: 'earth',
          nextPlanet: 'jupiter'
        },
        jupiter: {
          name: 'Jupiter',
          altName: 'The Gas Giant',
          imgPath: require('../assets/jupiter.png'),
          imgAlt: 'An image of planet Jupiter',
          attnGrab: null,
          previousPlanet: 'mars',
          nextPlanet: 'saturn'
        },
        saturn: {
          name: 'Saturn',
          altName: 'The Ringed Planet',
          imgPath: require('../assets/saturn.png'),
          imgAlt: 'An image of planet Saturn',
          attnGrab: null,
          previousPlanet: 'jupiter',
          nextPlanet: 'uranus'
        },
        uranus: {
          name: 'Uranus',
          altName: 'The Ice Giant',
          imgPath: require('../assets/uranus.png'),
          imgAlt: 'An image of planet Uranus',
          attnGrab:
            "Uranus is a lazy planet.  It's laying on its side and is basically rolling like a ball along its orbit around the sun.",
          previousPlanet: 'saturn',
          nextPlanet: 'neptune'
        },
        neptune: {
          name: 'Neptune',
          altName: 'Last of the Gas Giants',
          imgPath: require('../assets/neptune.png'),
          imgAlt: 'An image of planet Neptune',
          attnGrab: null,
          previousPlanet: 'uranus',
          nextPlanet: 'pluto'
        },
        pluto: {
          name: 'Pluto',
          altName: 'The Dwarf Planet',
          imgPath: require('../assets/pluto.png'),
          imgAlt: 'An image of planet Pluto',
          attnGrab: null,
          previousPlanet: 'neptune',
          nextPlanet: null
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
      this.currentPlanet = this.planets[this.name];
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
  font-size: 3em;
  margin-bottom: 0;
  text-align: center;
}

h3 {
  color: #dddd00;
  font-size: 2em;
  letter-spacing: 0.15em;
  margin-top: 0;
  text-align: center;
}

p {
  font-size: 1.5em;
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

a {
  background: white;
  border-radius: 50%;
  display: inline-block;
  font-weight: bold;
  font-size: 1.2em;
  height: 4em;
  line-height: 4em;
  margin-top: 1em;
  text-align: center;
  text-decoration: none;
  width: 9em;
}

a:link,
a:visited {
  color: #0a0e28;
}

#routerlinks {
  display: flex;
  justify-content: space-around;
}

img {
  display: block;
  margin: 0 auto;
}
</style>
