<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>
  
  <script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  name: "Portfolio",
  components: { Stock },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
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