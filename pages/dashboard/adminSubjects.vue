<template>
  <v-container>
    <div>
      <AllSubjects />
      <AddSubjects />
    </div>
    <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style">2021. All rights reserved</span>
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
