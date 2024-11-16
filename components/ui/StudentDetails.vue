<template>
  <v-container>
    <v-card class="pa-4">
      <v-row>
        <!-- Imagen del estudiante -->
        <v-col cols="4">
          <v-img
            src=""
            alt="Student Image"
            contain
            class="student-image"
            height="200px"
          />
        </v-col>

        <!-- Información del estudiante -->
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ student.name }}
          </div>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>

          <!-- Información detallada del estudiante -->
          <v-row>
            <v-col cols="4">
              <strong>ID:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.id }}
            </v-col>

            <v-col cols="4">
              <strong>Name:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.name }}
            </v-col>

            <v-col cols="4">
              <strong>Gender:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.gender === 'M' ? 'Male' : 'Female' }}
            </v-col>

            <v-col cols="4">
              <strong>Class:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.class }}
            </v-col>

            <v-col cols="4">
              <strong>Parents:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.parents }}
            </v-col>

            <v-col cols="4">
              <strong>Address:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.address }}
            </v-col>

            <v-col cols="4">
              <strong>Date of Birth:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.dob }}
            </v-col>

            <v-col cols="4">
              <strong>Phone:</strong>
            </v-col>
            <v-col cols="8">
              {{ student.phone }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    studentId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      students: [
        { id: 1, name: 'John Doe', gender: 'M', class: 'A', parents: 'Mr & Mrs Doe', address: '123 Elm St', dob: '2005-06-14', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', gender: 'F', class: 'B', parents: 'Mr & Mrs Smith', address: '456 Oak St', dob: '2006-08-24', phone: '234-567-8901' },
        { id: 3, name: 'Alice Brown', gender: 'F', class: 'A', parents: 'Mr & Mrs Brown', address: '789 Pine St', dob: '2007-02-17', phone: '345-678-9012' },
        { id: 4, name: 'Bob Johnson', gender: 'M', class: 'C', parents: 'Mr & Mrs Johnson', address: '101 Maple St', dob: '2004-12-30', phone: '456-789-0123' }
      ]
    }
  },
  computed: {
    student () {
      // Encontrar el estudiante por su ID
      return this.students.find(student => student.id === this.studentId) || {}
    }
  }
}
</script>

<style scoped>
.student-image {
  border-radius: 8px;
  background-color: #f0f0f0;
}
</style>
