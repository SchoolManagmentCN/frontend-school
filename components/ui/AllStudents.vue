<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Stud</span>ents
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > All Students</span>
    </p>
    <v-card class="pa-4">
      <!-- Título de la tabla -->
      <h3 class="h3-style">
        All Students Data
      </h3>

      <!-- Filtros de búsqueda -->
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

      <!-- Tabla de estudiantes -->
      <v-data-table
        :items="filteredStudents"
        :headers="headers"
        dense
        item-key="id"
        class="elevation-1"
      >
        <!-- Personalización de la columna de género -->
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
        const response = await axios.get('http://localhost:8080/api/students/')
        this.students = response.data
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    },
    filterStudents () {
      this.filteredStudents = this.students.filter((student) => {
        const matchesName = student.name ? student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : false
        const matchesClass = this.selectedClass ? student.class === this.selectedClass : true
        return matchesName && matchesClass
      })
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
