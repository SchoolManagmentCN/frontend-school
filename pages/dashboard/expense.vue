<template>
  <div>
    <navegation />
    <!-- <toolbar /> -->
    <Expense />
  </div>
</template>

<script>
import Expense from '~/components/ui/expense.vue'
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
