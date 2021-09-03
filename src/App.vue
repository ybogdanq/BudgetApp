<template>
  <div id="app">
    <Form />
    <TotalBalance :total="totalBalance" />
    <BudgetList />

  </div>
</template>

<script>
import BudgetList from "./components/BudgedList.vue"
import Form from "./components/Form.vue"
import TotalBalance from "./components/TotalBalance.vue"
import { mapGetters } from "vuex"

export default {
  name: 'App',
  components: {
    BudgetList,
    Form,
    TotalBalance
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters("budgetStore", ["getList"]),
    totalBalance() {
      return Object.values(this.getList).reduce((acc, item) => {
        if ((item.value >= 0 && item.type === "OUTCOME") || (item.value <= 0 && item.type === "INCOME")){
          item.value = -item.value
        }
        return acc += item.value
      }, 0)
    },
  },
  methods: {

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
