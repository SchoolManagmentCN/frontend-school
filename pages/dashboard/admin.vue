<template>
  <div>
    <navegation />
    <Admindashboard />
  </div>
</template>

<script>
import navegation from '~/layouts/navegation.vue'
import Admindashboard from '~/components/admindashboard.vue'
export default {
  components: {
    navegation,
    Admindashboard
  }
}
</script>

<style>

</style>
