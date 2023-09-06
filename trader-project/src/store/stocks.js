import stocks from "@/data/stocks"

const state = {
    stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 280 },
        { id: 4, name: 'Twitter', price: 83 }
    ]
}

const getters = {
    stocks(state) {
        return state.stocks
    }
}

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks
    }
}

const actions = {
  
    buyStock({ commit }, order) {
        commit('buyStock', order)
    },
  
    initStocks({ commit }) {
        commit('setStocks', stocks)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

