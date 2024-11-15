<template>
  <AllStudents />
</template>

<script>
import AllStudents from '~/components/ui/AllStudents.vue'

export default {
  components: {
    AllStudents
  },
  auth: false,
  layout: 'default'
}
</script>

<style scoped>
</style>
