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
          <BudgetListItem v-for="(item, prop) in list" :key="prop" v-bind="{deleteItem, item}" :bdType="budgetData.type"/>
        </template>
        <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
      </div>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue"
export default {
  name: 'BudgetList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    budgetData: {
      type: "ALL",
    },
    header: "Budget List",
    emptyTitle: 'EmptyList',
  }),
  computed: {
    isEmpty(){
      return Boolean(!Object.keys(this.list).length)
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id)
    }
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