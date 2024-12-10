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
              color="#14238A"
              label="Search by name..."
              background-color="#DDDEEE80"
              filled
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="selectedOccupation"
              :items="occupations"
              label="Select Occupation"
              color="#14238A"
              background-color="#DDDEEE80"
              filled
            />
          </v-col>
          <v-col cols="right" />
          <v-btn class="save-style" color="red" type="submit" @click="filterTeachers">
            Search
          </v-btn>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teacher in filteredTeachers" :key="teacher.id">
              <td>{{ teacher.id }}</td>
              <td>{{ teacher.name }}</td>
              <td>{{ teacher.gender === 'M' ? 'Male' : 'Female' }}</td>
              <td>{{ teacher.occupation }}</td>
              <td>{{ teacher.address }}</td>
              <td>{{ teacher.email }}</td>
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
import axios from 'axios'

const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://backendappsmcn-dwgwdpe6h2d2dmee.canadacentral-01.azurewebsites.net'

export default {
  data () {
    return {
      searchQuery: '',
      selectedOccupation: null,
      occupations: ['Doctor', 'Engineer', 'Teacher', 'Business Owner', 'Other'],
      teachers: [],
      filteredTeachers: []
    }
  },
  created () {
    this.fetchTeachers()
  },
  methods: {
    async fetchTeachers () {
      try {
        const response = await axios.get(`${API_URL}/api/teachers/`)
        this.teachers = response.data
        this.filteredTeachers = this.teachers
        console.log('Teachers fetched:', this.teachers)
      } catch (error) {
        console.error('Error fetching teachers:', error)
      }
    },
    filterTeachers () {
      this.filteredTeachers = this.teachers.filter((teacher) => {
        const matchesName = teacher.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesOccupation = this.selectedOccupation
          ? teacher.occupation === this.selectedOccupation
          : true
        return matchesName && matchesOccupation
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
  margin-right: 55px;
  margin-bottom: 25px;
}

.firm-style {
  color: #757575;
}
</style>
