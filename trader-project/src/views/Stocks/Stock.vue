<template>
  <div class="pr-3 pb-3" xs="12" md="8" lg="6">
    <v-card class="nome">
      <v-card-title class="headline">
        <p>
          {{ stock.name }} <small> (Preço: {{ stock.price }})</small>
        </p>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          min="0"
          v-model.number="quantity"
        />
        <v-btn class="nome" :disabled="quantity <= 0" @click="buyStock"
          >Comprar</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>
    
    <script>
export default {
  name: "BuyStock",
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order)
      this.quantity = 0;
    },
  },
};
</script>
    
 <style scoped>
.nome {
  background-color: darkgreen;
  color: beige;
}
</style>