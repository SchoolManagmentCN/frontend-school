<template>
  <div>
    <navegation />
    <!-- <toolbar /> -->
    <Studentfees />
  </div>
</template>

<script>
import navegation from '~/layouts/navegation.vue'
import Studentfees from '~/components/studentfees.vue'
// import toolbar from '~/layouts/toolbar.vue'
export default {
  components: {
    navegation,
    Studentfees
    // toolbar
  }
}
</script>

  <style>

  </style>
