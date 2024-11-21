<template>
  <div>
    <navegation />
    <!-- <toolbar /> -->
    <Expense />
  </div>
</template>

<script>
import Expense from '~/components/expense.vue'
import navegation from '~/layouts/navegation.vue'

// import toolbar from '~/layouts/toolbar.vue'
export default {
  components: {
    navegation,
    Expense
    // toolbar
  }
}
</script>

  <style>

  </style>
