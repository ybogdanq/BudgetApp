<template>
  <div class="total-value" :style="totalColorByValue">
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    totalValueWrap: document.querySelector('.total-value'),
  }),
  computed: {
    totalColorByValue() {
      return {
        color: this.total === 0 ? 'black' : this.total > 0 ? 'green' : 'red'
      }
    }
  }
}
</script>

<style scoped>
.total-value{
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>