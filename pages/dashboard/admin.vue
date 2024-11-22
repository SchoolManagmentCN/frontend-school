<template>
  <div>
    <navegation />
    <!-- <toolbar /> -->
    <Admindashboard />
  </div>
</template>

<script>
import navegation from '~/layouts/navegation.vue'
import Admindashboard from '~/components/ui/admindashboard.vue'
// import toolbar from '~/layouts/toolbar.vue'
export default {
  components: {
    navegation,
    Admindashboard
    // toolbar
  }
}
</script>

<style>

</style>
