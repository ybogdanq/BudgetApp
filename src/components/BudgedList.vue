<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <ElSelect class="budget-list-select" v-model="budgetData.type" placeholder="Choose type...">
          <ElOption label="All" value="ALL"></ElOption>
          <ElOption label="Income" value="INCOME"></ElOption>
          <ElOption label="Outcome" value="OUTCOME"></ElOption>
      </ElSelect>
      <div class="budget-list-container">
        <template v-if="!isEmpty">
          <BudgetListItem v-for="(item, prop) in getList" :key="prop" v-bind="{item}" :bdType="budgetData.type"/>
        </template>
        <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
      </div>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue"
import { mapGetters } from "vuex"

export default {
  name: 'BudgetList',
  data: () => ({
    budgetData: {
      type: "ALL",
    },
    header: "Budget List",
    emptyTitle: 'EmptyList',
  }),
  computed: {
    isEmpty(){
      return Boolean(!Object.keys(this.getList).length)
    },
    ...mapGetters("budgetStore", ["getList"])
  },
  methods: {
  },
  components: {
    BudgetListItem,
  }
}
</script>

<style scoped>
.budget-list-wrap{
  max-width: 500px;
  margin: 0 auto;
}
.budget-list-select{
  margin-bottom: 20px;
}
</style>