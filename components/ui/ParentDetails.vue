<template>
  <v-container>
    <v-card class="pa-4">
      <v-form @submit.prevent="fetchParentDetails">
        <v-text-field
          v-model="parentId"
          label="Enter Parent ID"
          type="text"
          required
        />
        <v-btn color="primary" type="submit">
          Search
        </v-btn>
      </v-form>
      <v-divider class="my-4" />
      <v-row v-if="parent">
        <v-col cols="4">
          <v-img
            :src="parent.profileImageUrl || ''"
            alt="Parent Image"
            contain
            class="parent-image"
            height="200px"
          />
        </v-col>
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ parent.name }}
          </div>
          <p class="mb-4">
            {{ parent.description || 'No description available.' }}
          </p>
          <v-row>
            <v-col cols="4"><strong>ID:</strong></v-col>
            <v-col cols="8">{{ parent.id }}</v-col>
            <v-col cols="4"><strong>Name:</strong></v-col>
            <v-col cols="8">{{ parent.name }}</v-col>
            <v-col cols="4"><strong>Gender:</strong></v-col>
            <v-col cols="8">{{ parent.gender === 'Male' ? 'Male' : 'Female' }}</v-col>
            <v-col cols="4"><strong>Occupation:</strong></v-col>
            <v-col cols="8">{{ parent.occupation }}</v-col>
            <v-col cols="4"><strong>Address:</strong></v-col>
            <v-col cols="8">{{ parent.address }}</v-col>
            <v-col cols="4"><strong>Email:</strong></v-col>
            <v-col cols="8">{{ parent.email }}</v-col>
            <v-col cols="4"><strong>Phone:</strong></v-col>
            <v-col cols="8">{{ parent.phone }}</v-col>
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
      parentId: null,
      parent: null
    }
  },
  methods: {
    async fetchParentDetails () {
      try {
        const response = await axios.get(`${API_URL}/api/parents/${this.parentId}`)
        this.parent = response.data
        console.log('Parent details:', this.parent)
      } catch (error) {
        console.error('Error fetching parent details:', error)
      }
    }
  }
}
</script>

<style scoped>
.parent-image {
  border-radius: 8px;
  background-color: #f0f0f0;
}
</style>
