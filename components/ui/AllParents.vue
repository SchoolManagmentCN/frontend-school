<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Pare</span>nts
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > All Parents</span>
    </p>
    <v-card>
      <v-card-title>
        <h3 class="h3-style">
          All Parents Data
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

          <!-- Selector de ocupación -->
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
          <v-btn class="save-style" color="red" type="submit" @click="filterParents">
            Search
          </v-btn>
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
              <th>Occupation</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="parent in filteredParents" :key="parent.id">
              <td>{{ parent.id }}</td>
              <td>{{ parent.name }}</td>
              <td>{{ parent.gender === 'M' ? 'Male' : 'Female' }}</td>
              <td>{{ parent.occupation }}</td>
              <td>{{ parent.address }}</td>
              <td>{{ parent.email }}</td>
              <td>{{ parent.phone }}</td>
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
      parents: [],
      filteredParents: []
    }
  },
  created () {
    this.fetchParents()
  },
  methods: {
    async fetchParents () {
      try {
        const response = await axios.get(`${API_URL}/api/parents/`)
        this.parents = response.data
        this.filteredParents = this.parents
      } catch (error) {
        console.error('Error fetching parents:', error)
      }
    },
    filterParents () {
      this.filteredParents = this.parents.filter((parent) => {
        const matchesName = parent.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesOccupation = this.selectedOccupation
          ? parent.occupation === this.selectedOccupation
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
