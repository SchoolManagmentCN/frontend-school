<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Stud</span>ents
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > All Students</span>
    </p>
    <v-card class="pa-4">
      <h3 class="h3-style">
        All Students Data
      </h3>

      <v-row align="center">
        <v-col cols="4">
          <v-text-field
            v-model="searchQuery"
            color="#14238A"
            label="Search by name..."
            background-color="#DDDEEE80"
            type="name"
            filled
          />
        </v-col>

        <v-col cols="4">
          <v-select
            v-model="selectedClass"
            :items="classes"
            color="#14238A"
            label="Select class"
            background-color="#DDDEEE80"
            filled
          />
        </v-col>
        <v-col cols="right">
          <v-btn class="save-style" color="red" type="submit" @click="filterStudents">
            Search
          </v-btn>
        </v-col>
      </v-row>

      <v-data-table
        :items="filteredStudents"
        :headers="headers"
        dense
        item-key="id"
        class="elevation-1"
      >
        <template #[`item.gender`]="{ item }">
          {{ item.gender === 'M' ? 'Male' : 'Female' }}
        </template>
      </v-data-table>
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
      selectedClass: '',
      students: [],
      classes: ['A', 'B', 'C'],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Class', value: 'class' },
        { text: 'Parents', value: 'parents' },
        { text: 'Address', value: 'address' },
        { text: 'Date of Birth', value: 'dob' },
        { text: 'Phone', value: 'phone' }
      ]
    }
  },
  created () {
    this.fetchStudents()
  },
  methods: {
    async fetchStudents () {
      try {
        const response = await axios.get(`${API_URL}/api/students/`)
        this.students = response.data.map(student => ({
          id: student.id,
          name: student.name,
          gender: student.gender,
          class: student.classes,
          parents: `${student.fatherName}, ${student.motherName}`,
          address: student.address || 'N/A',
          dob: student.dateOfBirth,
          email: student.email || 'N/A'
        }))
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    },
    filterStudents () {
      // This method is already handled by the computed property `filteredStudents`
    }
  },
  computed: {
    filteredStudents () {
      return this.students.filter((student) => {
        const matchesName = student.name ? student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : false
        const matchesClass = this.selectedClass ? student.class === this.selectedClass : true
        return matchesName && matchesClass
      })
    }
  }
}
</script>

<style scoped>
.v-data-table {
  min-height: 400px;
}

.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.p-style {
  padding-bottom: 33px;
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
