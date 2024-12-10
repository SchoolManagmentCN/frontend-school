<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Sub</span>jects
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > All Subjects</span>
    </p>
    <v-card class="pa-4">
      <h3 class="h3-style">
        All Subjects Data
      </h3>

      <!-- Filtros de búsqueda -->
      <v-row class="mb-4" align="center">
        <v-col cols="3">
          <v-text-field
            v-model="searchQuery"
            label="Search by name"
            color="#14238A"
            background-color="#DDDEEE80"
            filled
          />
        </v-col>

        <v-col cols="3">
          <v-select
            v-model="selectedClass"
            :items="classes"
            label="Search by class"
            color="#14238A"
            background-color="#DDDEEE80"
            filled
          />
        </v-col>

        <v-col cols="right">
          <v-btn class="save-style" color="red" type="submit" @click="filterSubjects">
            Search
          </v-btn>
        </v-col>
      </v-row>

      <!-- Tabla de subjects -->
      <v-data-table
        :items="filteredSubjects"
        :headers="headers"
        dense
        item-key="name"
        class="elevation-1"
      >
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
      subjects: [],
      classes: ['10-A', '10-B', '9-A', '9-B', '11-C', '12-C'],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Teacher', value: 'teacher' },
        { text: 'Classes', value: 'classes' },
        { text: 'Days', value: 'days' }
      ]
    }
  },
  created () {
    this.fetchSubjects()
  },
  methods: {
    async fetchSubjects () {
      try {
        const response = await axios.get(`${API_URL}/api/subjects/`)
        this.subjects = response.data
      } catch (error) {
        console.error('Error fetching subjects:', error)
      }
    },
    filterSubjects () {
      // This method is already handled by the computed property `filteredSubjects`
    }
  },
  computed: {
    filteredSubjects () {
      return this.subjects.filter((subject) => {
        const matchesName = subject.name ? subject.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : false
        const matchesClass = this.selectedClass ? subject.classes.includes(this.selectedClass) : true
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
