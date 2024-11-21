<template>
  <ParentsDetails :student-id="selectedStudentId" />
</template>

<script>
import ParentsDetails from '~/components/ui/ParentsDetails.vue'

export default {
  components: {
    ParentsDetails
  },
  data () {
    return {
      selectedStudentId: 1 // Cambia esto para mostrar un estudiante diferente
    }
  }
}
</script>
