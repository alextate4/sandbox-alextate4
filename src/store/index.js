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
      },
      mercury: {
        planetStats: [
          'Slightly larger than the Moon',
          '18 Mercurys can fit into Earth',
          '3.2 minutes light travel from the Sun',
          "5.5% of Earth's mass",
          '0 moons'
        ],
        poi: 'Lackman Library',
        position: {
          lat: 38.581216,
          lng: -94.455392
        }
      },
      venus: {
        planetStats: [
          'Slightly smaller than Earth',
          '8 minute 20 second light to travel from the Sun',
          "Earth's Sister Planet",
          '0 moons'
        ],
        poi: 'Deanna Rose Farmstead',
        position: {
          lat: 38.877896,
          lng: -94.70253
        }
      },
      Earth: {
        planetStats: [
          'Largest terrestrial planet',
          'Only known planet to support life',
          'Axil tilt: 23.5 degrees',
          '1 moon'
        ],
        poi: 'Moon Marble Co',
        position: {
          lat: 39.05935,
          lng: -94.87651
        }
      }
    } //end of planets
  }, //end of state
  mutations: {},
  actions: {},
  modules: {}
});
