<template>
  <div class="container">
    <h1>Tienda 32 bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio | currency }}</td>
          <td>
            <button @click="modificarStock(juego.codigo, '+')">+</button>
            <button @click="modificarStock(juego.codigo, '-')">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  mounted() {
    this.$store.dispatch('cargarJuegos');  // Cargar juegos cuando el componente se monta
  },
  computed: {
    ...mapState({
      juegos: state => state.juegos
    })
  },
  methods: {
    modificarStock(codigo, accion) {
      this.$store.dispatch('modificarStock', { codigo, accion });
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
      }).format(value);
    }
  }
};
</script>

<style>
/* Centrar la tabla y el contenido */
.container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

h1, h2 {
  margin: 20px 0;
}

/* Estilos de la tabla */
table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  text-align: center;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;  /* Borde en cada celda */
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
