// eslint-disable-next-line no-unused-vars
import Vue from "vue";

const budgetStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      }
    }
  },
  getters: {
    getList: ({ list }) => {
      return list
    },
  },
  mutations: {
    DELETE_ITEM(state, item){
      Vue.delete(state.list, item.id)
    },
    ADD_ITEM(state, item){
      let length;
      for(let i = 1; i < Number.POSITIVE_INFINITY; i++){
        if(state.list[i] === undefined){
          if(i === 1){
            length = 1;
          }
          break
        }
        length = i + 1;
      }
      const newItem = {
        ...item,
        id: length
      }
      Vue.set(state.list, length, newItem)
    }
  },
  actions: {
    deleteItem({ commit }, item){
      commit("DELETE_ITEM", item)
    },
    addItem({ commit }, item){
      commit("ADD_ITEM", item)
    }
  }
}

export default budgetStore;