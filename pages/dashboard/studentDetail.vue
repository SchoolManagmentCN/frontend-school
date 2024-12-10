<template>
  <v-container>
    <v-card class="pa-4">
      <v-form @submit.prevent="fetchStudentDetails">
        <v-text-field
          v-model="studentId"
          label="Enter Student ID"
          type="text"
          required
        />
        <v-btn color="primary" type="submit">
          Search
        </v-btn>
      </v-form>
      <v-divider class="my-4" />
      <v-row v-if="student">
        <v-col cols="4">
          <v-img
            :src="student.profileImageUrl || ''"
            alt="Student Image"
            contain
            class="student-image"
            height="200px"
          />
        </v-col>
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ student.name }}
          </div>
          <p class="mb-4">
            {{ student.description || 'No description available.' }}
          </p>
          <v-row>
            <v-col cols="4"><strong>ID:</strong></v-col>
            <v-col cols="8">{{ student.id }}</v-col>
            <v-col cols="4"><strong>Name:</strong></v-col>
            <v-col cols="8">{{ student.name }}</v-col>
            <v-col cols="4"><strong>Gender:</strong></v-col>
            <v-col cols="8">{{ student.gender === 'M' ? 'Male' : 'Female' }}</v-col>
            <v-col cols="4"><strong>Class:</strong></v-col>
            <v-col cols="8">{{ student.classes }}</v-col>
            <v-col cols="4"><strong>Parents:</strong></v-col>
            <v-col cols="8">{{ student.parents }}</v-col>
            <v-col cols="4"><strong>Address:</strong></v-col>
            <v-col cols="8">{{ student.address }}</v-col>
            <v-col cols="4"><strong>Date of Birth:</strong></v-col>
            <v-col cols="8">{{ student.dateOfBirth }}</v-col>
            <v-col cols="4"><strong>Email:</strong></v-col>
            <v-col cols="8">{{ student.email }}</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
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
      studentId: null,
      student: null
    }
  },
  methods: {
    async fetchStudentDetails () {
      try {
        const response = await axios.get(`${API_URL}/api/students/${this.studentId}`)
        this.student = response.data
      } catch (error) {
        console.error('Error fetching student details:', error)
      }
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
