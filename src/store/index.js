import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planets: {
      sun: {
        planetStats: [
          'The most massive object and only star in our Solar System'
        ],
        poi: 'JCCC',
        poiPosition: {
          lat: [38.924671],
          lng: [-94.730601]
        }
      }, //end of sun
      venus: {
        poi: 'Lackman Library', //Is this where we will actually end up?
        position: {
          lat: 38.581216,
          lng: -94.455392
        },
        poiInfo: 'Lackman lbrary is cool!',
        basicStatistics: [
          'Scaled radius: 2.04 feet (0.621 m)',
          'Relative size to earth: a tad bit smaller',
          'Relative volume to earth: a little smaller',
          'Relative mass to earth: smaller but similar',
          'Light travel time: 6 minutes',
          'What’s it made out of: iron and rocky crust',
          'Number of moons: 0'
        ],
        uniqueFacts:
          'Often referred to as Earth’s sister planet, it is only in size and composition. In every way that counts, Venus is a very different world than our home planet. Venus may not be the closest to the Sun but it is the hottest planet. Due to the runaway greenhouse effect, temperatures on Venus are a sweltering 900°F (465°C); that’s hot enough that even lead will melt! The super dense atmosphere is mostly carbon dioxide that traps heat on the surface and makes every look orangey. If it were possible to stand on the surface, the pressure of the atmosphere would be the same as if you were 3000 feet (900 m) underwater on Earth! The tallest mountain on Venus is a volcano the size of Mt. Everest named Maxwell Montes and there are tens of thousands of active volcanoes on Venus. Venus is also different by how it rotates. It spins in a retrograde motion which means its rotation is backwards compared to the direction it moves around the sun. It sits almost straight up and down and so doesn’t experience seasonal extremes. It spins the slowest of the planets in the solar system at 4 mph (6.4 km/h). On average a human will walk 3mph (5 km/h)! Venus also revolves around the sun in an almost perfect circle giving it the least elliptical orbit of all the planets. Venus is the only planet named after a female deity and all of its features have been given female names as well.',
        magnetosphere: [
          'Magnetosphere',
          'Venus has a very weak magnetosphere because it spins so slowly.'
        ],
        atmosphereComposition: [
          'Atmosphere Composition',
          'The atmosphere blanketing Venus is mostly carbon dioxide with a little nitrogen.'
        ],
        internalComposition: [
          'Internal Composition',
          'Venus is like Earth in that it has a molten iron core with a rocky crust.'
        ],
        // eslint-disable-next-line prettier/prettier
        moonsAndRings: [
          'Moons and Rings',
          'Venus has no moons or rings'
        ],
        moreTrivia:
          'Venus has rain like Earth but instead of it raining water, it rains sulfuric acid. Venus is the third brightest object in our sky. Only the moon and sun are brighter. There is speculation about microorganisms being able to survive high up in the atmosphere. The Soviet Union made the first attempts to visit Venus starting in 1961. The first successful mission was a flyby by NASA in 1962 by Mariner 2. After 15 attempts, the Soviets got a probe to Venus in 1967, making Venera 4 the first spacecraft to return data about another planet’s atmosphere. It was crushed and melted by the atmosphere in about an hour and a half. Since then, there have been around 30 space missions that included Venus in some way.'
      }, //end of venus
      jupiter: {
        poi: 'Kansas State Capitol', //Is this where we will actually end up?
        poiposition: {
          lat: 39.048437,
          lng: -95.67748
        },
        poiInfo: 'Capitol Building',
        basicStatistics: [
          'Scaled Radius: 69,911 km',
          'Relative size to earth: 11 times the size of Earth',
          'Relative Volume to Earth: 1,321 times that of Earth',
          'Relative Mass to Earth: 319 time as massive than Earth',
          'Light Travel Time: 43 minutes',
          'Made up of: Hydrogen, Helium, Water, Methane, and Ammonia',
          'Number of Moons: 79',
          'Orbital period: 11.9 years',
          'Rotation period: 9 hours, 55 minutes',
          'Axial tilt: 3.13 degrees',
          'Surface Gravity: 2.528 g',
          'Temperature: -108 degrees C'
        ],
        moreInfo:
          'Jupiter is the largest planet in the solar system. It is 2.5 times more massive than all the other planets combined. Jupiter is also the fastest spinning planet at a velocity at 12.6 km/s. Even though Jupier is one of the outer planets, you can see Jupiter with the naked eye from Earth. It is the third brightest object in the solar system after Venus and Earth’s moon.',
        magnetosphere: ['Magnetosphere', 'Intense Global Field'],
        atmosphereComposition: [
          'Atmosphere Composition',
          '0.691 atm',
          '89% Hydrogen',
          '10% Helium'
        ],
        internalComposition: ['Internal Composition', 'Metallic Hydrogen'],
        // eslint-disable-next-line prettier/prettier
        moons: [
          'Scientists believe Jupiter has 79 moons, 53 of which are named. The four largest moons are Io, Europa, Ganymede, and Calisto. These moons make up the Galilean satellites, named after Italian astronomer Galileo Galilei who observed them in 1610. They also turn only once on their axis for every orbit around Jupiter, meaning the same part of the moon is always “facing” Jupiter.'
        ],
        moreTrivia:
          'Venus has rain like Earth but instead of it raining water, it rains sulfuric acid. Venus is the third brightest object in our sky. Only the moon and sun are brighter. There is speculation about microorganisms being able to survive high up in the atmosphere. The Soviet Union made the first attempts to visit Venus starting in 1961. The first successful mission was a flyby by NASA in 1962 by Mariner 2. After 15 attempts, the Soviets got a probe to Venus in 1967, making Venera 4 the first spacecraft to return data about another planet’s atmosphere. It was crushed and melted by the atmosphere in about an hour and a half. Since then, there have been around 30 space missions that included Venus in some way.'
      } //end of jupiter
    } //end of planets
  }, //end of state
  mutations: {},
  actions: {},
  modules: {}
});
