<template>
  <v-container>
    <v-card class="pa-4">
      <v-form @submit.prevent="fetchTeacherDetails">
        <v-text-field
          v-model="teacherId"
          label="Enter Teacher ID"
          type="text"
          required
        />
        <v-btn color="primary" type="submit">
          Search
        </v-btn>
      </v-form>
      <v-divider class="my-4" />
      <v-row v-if="teacher">
        <v-col cols="4">
          <v-img
            :src="teacher.profileImageUrl || ''"
            alt="Teacher Image"
            contain
            class="teacher-image"
            height="200px"
          />
        </v-col>
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ teacher.name }}
          </div>
          <p class="mb-4">
            {{ teacher.description || 'No description available.' }}
          </p>
          <v-row>
            <v-col cols="4"><strong>ID:</strong></v-col>
            <v-col cols="8">{{ teacher.id }}</v-col>
            <v-col cols="4"><strong>Name:</strong></v-col>
            <v-col cols="8">{{ teacher.name }}</v-col>
            <v-col cols="4"><strong>Gender:</strong></v-col>
            <v-col cols="8">{{ teacher.gender === 'M' ? 'Male' : 'Female' }}</v-col>
            <v-col cols="4"><strong>Class:</strong></v-col>
            <v-col cols="8">{{ teacher.class }}</v-col>
            <v-col cols="4"><strong>Subject:</strong></v-col>
            <v-col cols="8">{{ teacher.subject }}</v-col>
            <v-col cols="4"><strong>Address:</strong></v-col>
            <v-col cols="8">{{ teacher.address }}</v-col>
            <v-col cols="4"><strong>Date of Birth:</strong></v-col>
            <v-col cols="8">{{ teacher.dateOfBirth }}</v-col>
            <v-col cols="4"><strong>Phone:</strong></v-col>
            <v-col cols="8">{{ teacher.phone }}</v-col>
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
      teacherId: null,
      teacher: null
    }
  },
  methods: {
    async fetchTeacherDetails () {
      try {
        const response = await axios.get(`${API_URL}/api/teachers/${this.teacherId}`)
        this.teacher = response.data
      } catch (error) {
        console.error('Error fetching teacher details:', error)
      }
    }
  }
}
</script>

<style scoped>
.teacher-image {
  border-radius: 8px;
  background-color: #f0f0f0;
}
</style>
