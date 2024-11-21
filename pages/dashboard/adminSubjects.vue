<template>
  <v-container>
    <div>
      <AllSubjects />
      <AddSubjects />
    </div>
  </v-container>
</template>

<script>
import AddSubjects from '~/components/ui/AddSubjects.vue'
import AllSubjects from '~/components/ui/AllSubjects.vue'

export default {
  components: {
    AllSubjects,
    AddSubjects
  },
  auth: false,
  layout: 'default'
}
</script>

<style scoped>
</style>
