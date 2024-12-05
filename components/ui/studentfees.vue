<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Acc</span>ount
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > Student Fees</span>
    </p>
    <v-card class="pa-4">
      <h3 class="h3-style">
        All Students Fees Data
      </h3>
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
            label="Select class"
            color="#14238A"
            background-color="#DDDEEE80"
            filled
          />
        </v-col>

        <v-col cols="3">
          <v-select
            v-model="selectedClass"
            :items="classes"
            label="Select Status"
            color="#14238A"
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
export default {
  name: 'StudentFees',
  layout: 'navegation',
  data () {
    return {
      searchQuery: '',
      selectedClass: '',
      students: [
        //  { id: 1, name: 'John Doe', gender: 'M', class: 'A', parents: 'Mr & Mrs Doe', address: '123 Elm St', dob: '2005-06-14', phone: '123-456-7890' },
        // { id: 2, name: 'Jane Smith', gender: 'F', class: 'B', parents: 'Mr & Mrs Smith', address: '456 Oak St', dob: '2006-08-24', phone: '234-567-8901' },
        // { id: 3, name: 'Alice Brown', gender: 'F', class: 'A', parents: 'Mr & Mrs Brown', address: '789 Pine St', dob: '2007-02-17', phone: '345-678-9012' },
        // { id: 4, name: 'Bob Johnson', gender: 'M', class: 'C', parents: 'Mr & Mrs Johnson', address: '101 Maple St', dob: '2004-12-30', phone: '456-789-0123' }
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
  },
  methods: {
    filterStudents () {
    },
    goToDetails (studentId) {
      this.$router.push({ path: `/studentDetail/${studentId}` })
    }
  }
}
</script>

<style>
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: #D60A0B;
}

.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.p-style {
  padding-bottom: 30px;
}

.firm-style {
  color: #757575;
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
</style>
