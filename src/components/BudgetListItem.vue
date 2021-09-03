<template>
  <div class="list-item" v-if="item.type === bdType || bdType === 'ALL'">
          <i class="el-icon-top" v-if="item.value > 0 "/>
          <i class="el-icon-bottom" v-else-if=" item.value < 0" />
          <span class="budget-comment">{{item.comment}}</span>
          <span class="budget-value" :style="totalColorByValue">{{item.value}}</span>
          <ElButton type="danger" size="mini" @click="deleteCurrentItem(item)">Delete</ElButton>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "BudgetListItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    bdType: String,

  },
  computed: {
    totalColorByValue() {
      return {
        color: this.item.value === 0 ? 'black' : this.item.value > 0 ? 'green' : 'red'
      }
    },
  },
  methods: {
    ...mapActions("budgetStore", ["deleteItem"]),
    deleteCurrentItem(item){
      this.deleteItem(item)
    }
  }
}
</script>

<style scoped>
.list-item{
  display: flex;
  align-items: center;
  padding: 10px 15px ;
  text-align: left;
}
.budget-value{
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>