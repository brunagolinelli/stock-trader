<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/portifolio">Portifólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"> Salvar & Carregar </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="saveData" style="cursor: pointer;">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-layout style="align-items: center;" >
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: R$ {{ funds }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';
import apiStock from "@/axios"
export default {
  name: "HeaderComponent",
  data() {
    return {
      items: [{ title: "Salvar Dados" }, { title: "Carregar Dados" }],
    };
  },
  computed:{
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      const {funds, stockPortfolio, stocks} = this.$store.getters
      apiStock.post('dados', { funds, stockPortfolio, stocks });
    }
  }
};
</script>

<style scoped>

</style>