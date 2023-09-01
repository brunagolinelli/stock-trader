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
      <v-btn flat>Finalizar dia</v-btn>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"> Salvar & Carregar </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      items: [{ title: "Salvar Dados" }, { title: "Carregar Dados" }],
    };
  },
};
</script>