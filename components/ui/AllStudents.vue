<template>
  <v-container>
    <v-card class="pa-4">
      <!-- Título de la tabla -->
      <v-card-title class="text-h5">
        All Students Data
      </v-card-title>

      <!-- Filtros de búsqueda -->
      <v-row class="mb-4" align="center">
        <v-col cols="4">
          <v-text-field
            v-model="searchQuery"
            label="Search by name"
            outlined
            dense
          />
        </v-col>

        <v-col cols="4">
          <v-select
            v-model="selectedClass"
            :items="classes"
            label="Select class"
            outlined
            dense
            clearable
          />
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      selectedClass: '',
      students: [
        { id: 1, name: 'John Doe', gender: 'M', class: 'A', parents: 'Mr & Mrs Doe', address: '123 Elm St', dob: '2005-06-14', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', gender: 'F', class: 'B', parents: 'Mr & Mrs Smith', address: '456 Oak St', dob: '2006-08-24', phone: '234-567-8901' },
        { id: 3, name: 'Alice Brown', gender: 'F', class: 'A', parents: 'Mr & Mrs Brown', address: '789 Pine St', dob: '2007-02-17', phone: '345-678-9012' },
        { id: 4, name: 'Bob Johnson', gender: 'M', class: 'C', parents: 'Mr & Mrs Johnson', address: '101 Maple St', dob: '2004-12-30', phone: '456-789-0123' }
      ],
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
  computed: {
    filteredStudents () {
      return this.students.filter((student) => {
        const matchesName = student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
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
</style>
