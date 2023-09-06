<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
   
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <span class="ml-4 headline white--text font-weight-light" >Você pode Salvar & Carregar os Dados</span>
    </v-sheet>
   
    <v-sheet :elevation="6" class="pa-2 mt-3" color="success">
      <span class="headline white--text font-weight-light" >Clique em 'Finalizar Dia' para iniciar um novo dia!</span>
    </v-sheet>
    <v-divider class="my-4"/>
    <p class="display-1"><strong>Seu Saldo: </strong>{{ funds }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
