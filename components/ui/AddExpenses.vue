<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Acc</span>ount
    </h2>
    <p class="p-style">
      Home <span style="color: red;">> Add Expense</span>
    </p>
    <v-container>
      <v-card class="pa-4" height="500">
        <v-form @submit.prevent="submitForm">
          <h3 class="h3-style">
            Add New Expenses
          </h3>
          <v-row>
            <v-col cols="3">
              <p>Name *</p>
              <v-text-field
                v-model="expenseData.name"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Expense Type *</p>
              <v-select
                v-model="expenseData.expenseType"
                :items="itemsExpenseType"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Type"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Status *</p>
              <v-select
                v-model="expenseData.status"
                :items="itemsStatus"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Amount *</p>
              <v-text-field
                v-model="expenseData.amount"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>Phone</p>
              <v-text-field
                v-model="expenseData.phone"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="phone"
              />
            </v-col>
            <v-col cols="3">
              <p>E-Mail Address</p>
              <v-text-field
                v-model="expenseData.email"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="correo"
              />
            </v-col>
            <v-col cols="3">
              <p>Due Date</p>
              <v-text-field
                v-model="expenseData.dueDate"
                color="red"
                background-color="#E8EAF6"
                filled
                label="dd/mm/yy"
                append-icon="mdi-calendar"
                :rules="date"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" />
            <v-btn class="save-style" color="red" type="submit">
              Save
            </v-btn>
            <v-col cols="auto" />
            <v-btn class="reset-style" color="#1A237E" @click="resetForm">
              Reset
            </v-btn>
          </v-row>
        </v-form>
      </v-card>
      <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style">2021. All rights reserved</span>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://backendappsmcn-dwgwdpe6h2d2dmee.canadacentral-01.azurewebsites.net'

export default {
  data () {
    return {
      expenseData: {
        name: null,
        expenseType: null,
        status: null,
        amount: null,
        phone: null,
        email: null,
        dueDate: null
      },
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ],
      itemsExpenseType: [
        'Water Service', 'Light Service', 'Teacher`s Payment', 'Repair`s Payment', 'Other'
      ],
      itemsStatus: [
        'Payed', 'Pending', 'Expired'
      ],
      date: [
        v => (v && v.length < 11) || 'Due Date must be less than 11 chars'
      ],
      phone: [
        v => (v && v.length > 9) || 'Phone must be less than 11 digits'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    resetForm () {
      this.expenseData = {
        name: null,
        expenseType: null,
        status: null,
        amount: null,
        phone: null,
        email: null,
        dueDate: null
      }
    },
    async submitForm () {
      try {
        const response = await axios.post(`${API_URL}/api/expenses`, this.expenseData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log('Expense added successfully:', response.data)
      } catch (error) {
        console.error('Error adding expense:', error)
      }
    }
  }
}
</script>
<style scoped>
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: red;
}

.save-style {
  color: white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}

.reset-style {
  color: white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}

.h2-style {
  padding-top: 82px;
  padding-left: 51px;
  padding-bottom: 10px;
  font-size: 30px;
}

.p-style {
  padding-left: 51px;
  padding-bottom: 19px;
}

.h3-style {
  padding-top: 25px;
  padding-bottom: 20px;
  font-size: 30px;
}

.firm-style {
  color: #757575;
}
</style>
