<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Teac</span>hers
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > All Teachers</span>
    </p>
    <v-card>
      <v-card-title>
        <h3 class="h3-style">
          All Teachers Data
        </h3>
        <v-row class="align-center" style="width: 100%;">
          <v-col cols="4" class="d-flex">
            <v-text-field
              v-model="searchQuery"
              label="Search by name"
              color="#14238A"
              background-color="#DDDEEE80"
              filled
            />
          </v-col>

          <!-- Selector de asignatura -->
          <v-col cols="4">
            <v-select
              v-model="selectedSubject"
              :items="subjects"
              label="Select subject"
              color="#14238A"
              background-color="#DDDEEE80"
              filled
            />
          </v-col>

          <!-- Botón de búsqueda -->
          <v-col cols="right">
            <v-btn class="save-style" color="red" @click="filterTeachers">
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
    <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style">2021. All rights reserved</span>
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
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: #D60A0B;
}

.p-style {
  padding-bottom: 33px;
}

.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.save-style {
  color: white;
  font-size: 12px;
  width: 200px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 25px;
}

.firm-style {
  color: #757575;
}
</style>
