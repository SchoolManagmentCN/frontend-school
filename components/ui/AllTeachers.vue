<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-row class="align-center" style="width: 100%;">
          <!-- Título -->
          <v-col cols="4">
            <span class="text-h6">All Teachers Data</span>
          </v-col>

          <!-- Barra de búsqueda -->
          <v-col cols="4" class="d-flex">
            <v-text-field
              v-model="searchQuery"
              label="Search by name"
              clearable
              outlined
              dense
              hide-details
            />
          </v-col>

          <!-- Selector de asignatura -->
          <v-col cols="3">
            <v-select
              v-model="selectedSubject"
              :items="subjects"
              label="Select subject"
              clearable
              outlined
              dense
              hide-details
            />
          </v-col>

          <!-- Botón de búsqueda -->
          <v-col cols="1">
            <v-btn color="red" @click="filterTeachers">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text>
        <!-- Tabla -->
        <v-simple-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teacher in filteredTeachers" :key="teacher.id">
              <td>{{ teacher.id }}</td>
              <td>{{ teacher.name }}</td>
              <td>{{ teacher.gender === 'M' ? 'Male' : 'Female' }}</td>
              <td>{{ teacher.class }}</td>
              <td>{{ teacher.subject }}</td>
              <td>{{ teacher.address }}</td>
              <td>{{ teacher.dateOfBirth }}</td>
              <td>{{ teacher.phone }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      selectedSubject: null,
      subjects: ['Math', 'Science', 'English', 'History', 'Physical Education'],
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
      ],
      filteredTeachers: []
    }
  },
  created () {
    this.filteredTeachers = this.teachers
  },
  methods: {
    filterTeachers () {
      this.filteredTeachers = this.teachers.filter((teacher) => {
        const matchesName = teacher.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesSubject = this.selectedSubject
          ? teacher.subject === this.selectedSubject
          : true
        return matchesName && matchesSubject
      })
    }
  }
}
</script>

<style scoped>
/* Estilos opcionales para mejor presentación */
</style>
