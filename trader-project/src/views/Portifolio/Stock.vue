<template>
    <div class="pr-3 pb-3" xs="12" md="8" lg="6">
      <v-card class="nome">
        <v-card-title class="headline">
          <p>
            {{ stock.name }} 
            <small> (Preço: {{ stock.price }} | Qtde: {{ stock.quantity }})</small>
          </p>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fill-height>
          <v-text-field
            label="Quantidade"
            type="number"
            min="0"
            :error="insufficientQuantity || !Number.isInteger(quantity)"
            v-model.number="quantity"
          />
          <v-btn class="nome" :disabled="insufficientQuantity || quantity <= 0" @click="sellStock"
            >{{insufficientQuantity ? 'Insuficiente' : 'Vender'}}</v-btn
          >
        </v-container>
      </v-card>
    </div>
  </template>
      
      <script>
      import { mapActions } from 'vuex';
  export default {
    name: "SellStock",
    props: ["stock"],
    data() {
      return {
        quantity: 0,
      };
    },
    methods: {
      ...mapActions({ sellStockAction: 'sellStock' }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        this.sellStockAction(order)
        this.quantity = 0;
      },

    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      }
    }
  };
  </script>
      
   <style scoped>
  .nome {
    background-color: darkblue;
    color: beige;
  }
  </style>