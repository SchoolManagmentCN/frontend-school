<template>
  <StudentDetails :student-id="selectedStudentId" />
</template>

<script>
import StudentDetails from '~/components/ui/StudentDetails.vue'

export default {
  components: {
    StudentDetails
  },
  data () {
    return {
      selectedStudentId: 1 // Cambia esto para mostrar un estudiante diferente
    }
  }
}
</script>
