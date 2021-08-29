<template>
  <div id="app">
    <Form @submitForm="formSubmit"/>
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />

  </div>
</template>

<script>
import BudgetList from "./components/BudgedList.vue"
import Form from "./components/Form.vue"
import TotalBalance from "./components/TotalBalance.vue"

export default {
  name: 'App',
  components: {
    BudgetList,
    Form,
    TotalBalance
  },
  data: () => ({
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
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => {
        if ((item.value >= 0 && item.type === "OUTCOME") || (item.value <= 0 && item.type === "INCOME")){
          item.value = -item.value
        }
        return acc += item.value
      }, 0)
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id)
    },
    formSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      }

      this.$set(this.list, newObj.id, newObj)
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
