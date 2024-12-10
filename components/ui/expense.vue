<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Acc</span>ount
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > Expenses</span>
    </p>
    <v-card class="pa-4">
      <h3 class="h3-style">
        All Expense
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
            label="Search by expense type"
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
          <v-btn class="save-style" color="red" type="submit" @click="filterExpenses">
            Search
          </v-btn>
        </v-col>
      </v-row>

      <!-- Tabla de gastos -->
      <v-data-table
        :items="filteredExpenses"
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

const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://backendappsmcn-dwgwdpe6h2d2dmee.canadacentral-01.azurewebsites.net'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Expense',
  layout: 'navegation',
  data () {
    return {
      searchQuery: '',
      selectedClass: '',
      expenses: [],
      classes: ['A', 'B', 'C'],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Expense Type', value: 'expenseType' },
        { text: 'Status', value: 'status' },
        { text: 'Amount', value: 'amount' },
        { text: 'Phone', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Due Date', value: 'dueDate' }
      ]
    }
  },
  computed: {
    filteredExpenses () {
      return this.expenses.filter((expense) => {
        const matchesName = expense.name ? expense.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : false
        const matchesClass = this.selectedClass ? expense.expenseType === this.selectedClass : true
        return matchesName && matchesClass
      })
    }
  },
  created () {
    this.fetchExpenses()
  },
  methods: {
    async fetchExpenses () {
      try {
        const response = await axios.get(`${API_URL}/api/expenses`)
        this.expenses = response.data
      } catch (error) {
        console.error('Error fetching expenses:', error)
      }
    },
    filterExpenses () {
      // This method is already handled by the computed property `filteredExpenses`
    }
  }
}
</script>

<style>
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
