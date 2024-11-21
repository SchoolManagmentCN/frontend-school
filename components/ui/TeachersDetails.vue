<template>
  <v-container>
    <v-card class="pa-4">
      <v-row>
        <!-- Imagen del profesor en forma circular -->
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-img
            src=""
            alt="Teacher Image"
            class="teacher-image"
            contain
            height="200px"
            width="200px"
          />
        </v-col>

        <!-- Información del profesor -->
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ teacher.name }}
          </div>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>

          <!-- Información detallada del profesor -->
          <v-row>
            <v-col cols="4">
              <strong>ID:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.id }}
            </v-col>

            <v-col cols="4">
              <strong>Name:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.name }}
            </v-col>

            <v-col cols="4">
              <strong>Gender:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.gender === 'M' ? 'Male' : 'Female' }}
            </v-col>

            <v-col cols="4">
              <strong>Class:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.class }}
            </v-col>

            <v-col cols="4">
              <strong>Subject:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.subject }}
            </v-col>

            <v-col cols="4">
              <strong>Address:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.address }}
            </v-col>

            <v-col cols="4">
              <strong>Date of Birth:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.dateOfBirth }}
            </v-col>

            <v-col cols="4">
              <strong>Phone:</strong>
            </v-col>
            <v-col cols="8">
              {{ teacher.phone }}
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
    teacherId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      teachers: [
        {
          id: 1,
          name: 'Mr. John Doe',
          gender: 'M',
          class: '10-A',
          subject: 'Math',
          address: '123 Elm St',
          dateOfBirth: '1980-05-12',
          phone: '123-456-7890'
        },
        {
          id: 2,
          name: 'Ms. Jane Smith',
          gender: 'F',
          class: '9-B',
          subject: 'English',
          address: '456 Oak St',
          dateOfBirth: '1985-08-20',
          phone: '234-567-8901'
        },
        {
          id: 3,
          name: 'Dr. Alice Brown',
          gender: 'F',
          class: '12-C',
          subject: 'Science',
          address: '789 Pine St',
          dateOfBirth: '1978-11-05',
          phone: '345-678-9012'
        },
        {
          id: 4,
          name: 'Mr. Bob Johnson',
          gender: 'M',
          class: '11-D',
          subject: 'History',
          address: '101 Maple St',
          dateOfBirth: '1975-02-18',
          phone: '456-789-0123'
        }
      ]
    }
  },
  computed: {
    teacher () {
      return this.teachers.find(teacher => teacher.id === this.teacherId) || {}
    }
  }
}
</script>

<style scoped>
.teacher-image {
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;
}
</style>
