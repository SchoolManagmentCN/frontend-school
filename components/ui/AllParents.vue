<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Pare</span>nts
    </h2>
    <p class="p-style">
      Home<span style="color: red;">> All Parents</span>
    </p>
    <v-card>
      <v-card-title>
        <v-row class="align-center" style="width: 100%;">
          <!-- Título -->
          <v-col cols="4">
            <span class="text-h6">All Parents Data</span>
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

          <!-- Selector de ocupación -->
          <v-col cols="3">
            <v-select
              v-model="selectedOccupation"
              :items="occupations"
              label="Select occupation"
              clearable
              outlined
              dense
              hide-details
            />
          </v-col>

          <!-- Botón de búsqueda -->
          <v-col cols="1">
            <v-btn color="red" @click="filterParents">
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      selectedOccupation: null,
      occupations: ['Doctor', 'Engineer', 'Teacher', 'Business Owner', 'Other'],
      parents: [
        { id: 1, name: 'John Doe', gender: 'M', occupation: 'Engineer', address: '123 Elm St', email: 'john.doe@mail.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', gender: 'F', occupation: 'Teacher', address: '456 Oak St', email: 'jane.smith@mail.com', phone: '234-567-8901' },
        { id: 3, name: 'Alice Brown', gender: 'F', occupation: 'Doctor', address: '789 Pine St', email: 'alice.brown@mail.com', phone: '345-678-9012' },
        { id: 4, name: 'Bob Johnson', gender: 'M', occupation: 'Business Owner', address: '101 Maple St', email: 'bob.johnson@mail.com', phone: '456-789-0123' }
      ],
      filteredParents: []
    }
  },
  created () {
    this.filteredParents = this.parents
  },
  methods: {
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
</style>
