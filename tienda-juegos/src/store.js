// src/store.js
import { createStore } from 'vuex';
import juegosData from './assets/juegos.json';  // Importa el JSON directamente

export const store = createStore({
  state: {
    juegos: juegosData  // Asigna el contenido del JSON al estado
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    },
    incrementarStock(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) juego.stock++;
    },
    decrementarStock(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego && juego.stock > 0) juego.stock--;
    }
  },
  actions: {
    cargarJuegos({ commit }) {
      commit('setJuegos', juegosData);  // Carga los juegos directamente desde el JSON importado
    },
    modificarStock({ commit }, { codigo, accion }) {
      if (accion === '+') {
        commit('incrementarStock', codigo);
      } else if (accion === '-') {
        commit('decrementarStock', codigo);
      }
    }
  }
});
