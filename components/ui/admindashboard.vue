<template>
  <v-app>
    <v-container class="pa-4" height="500">
      <v-row>
        <v-col>
          <h2 class="h2-style">
            <span class="subrayado-rojo">Adm</span>in Dashboard
          </h2>
          <p class="p-style">
            Home
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-row align="center">
              <v-col cols="3">
                <v-avatar color="#D1F3E0">
                  <v-icon color="green">
                    mdi-account-school-outline
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <span>Students</span>
                  <h3>{{ studentCount }}</h3>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-row align="center">
              <v-col cols="3">
                <v-avatar color="#E1F1FF">
                  <v-icon color="blue">
                    mdi-human-male-board-poll
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <span>Teachers</span>
                  <h3>{{ teacherCount }}</h3>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-row align="center">
              <v-col cols="3">
                <v-avatar color="#FFF2D8">
                  <v-icon color="orange">
                    mdi-human-male-female-child
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <span>Parents</span>
                  <h3>{{ parentCount }}</h3>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-row align="center">
              <v-col cols="3">
                <v-avatar color="#FFEAEA">
                  <v-icon color="red">
                    mdi-currency-usd
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <span>Earnings</span>
                  <h3>{{ earnings }}</h3>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Additional dashboard section -->
      <v-row>
        <v-col cols="6">
          <v-card class="pa-3">
            <v-card-title class="d-flex justify-space-between align-center">
              <span>Earnings</span>
              <v-icon class="points-style" size="40">
                mdi-settings-helper
              </v-icon>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <!-- Placeholder for a line chart component -->
              <p>Grafica</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-card-title class="d-flex justify-space-between align-center">
              <span>Expenses</span>
              <v-icon class="points-style" size="40">
                mdi-settings-helper
              </v-icon>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <!-- Placeholder for a bar chart component -->
              <p style="text-align: center;">
                Grafica Barras
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-card-title class="d-flex justify-space-between align-center">
              <span>Students</span>
              <v-icon class="points-style" size="40">
                mdi-settings-helper
              </v-icon>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <!-- Placeholder for a pie chart component -->
              <p style="text-align: center;">
                Grafica Cirulo
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card class="pa-3">
            <v-card-title class="d-flex justify-space-between align-center">
              <span>Event Calendar</span>
              <v-icon class="points-style" size="40">
                mdi-settings-helper
              </v-icon>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <!-- Placeholder for a calendar component -->
              <p style="text-align: center;">
                Calendario
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-3">
            <v-card-title class="d-flex justify-space-between align-center">
              <span>Reminders</span>
              <v-icon class="points-style" size="40">
                mdi-settings-helper
              </v-icon>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <p style="text-align: center;">
                Eventos
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style">2021. All rights reserved</span>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://backendappsmcn-dwgwdpe6h2d2dmee.canadacentral-01.azurewebsites.net'

export default {
  name: 'AdminDashboard',
  layout: 'navegation',
  data () {
    return {
      studentCount: 0,
      teacherCount: 0,
      parentCount: 0,
      earnings: 0
    }
  },
  created () {
    this.fetchStudentCount()
    this.fetchTeacherCount()
    this.fetchParentCount()
    this.fetchEarnings()
  },
  methods: {
    async fetchStudentCount () {
      try {
        const response = await axios.get(`${API_URL}/api/students/`)
        this.studentCount = response.data.length
      } catch (error) {
        console.error('Error fetching student count:', error)
      }
    },
    async fetchTeacherCount () {
      try {
        const response = await axios.get(`${API_URL}/api/teachers/`)
        this.teacherCount = response.data.length
      } catch (error) {
        console.error('Error fetching teacher count:', error)
      }
    },
    async fetchParentCount () {
      try {
        const response = await axios.get(`${API_URL}/api/parents/`)
        this.parentCount = response.data.length
      } catch (error) {
        console.error('Error fetching parent count:', error)
      }
    },
    async fetchEarnings () {
      try {
        const response = await axios.get(`${API_URL}/api/expenses/`)
        this.earnings = response.data
          .filter(expense => expense.status === 'Payed')
          .reduce((total, expense) => total + expense.amount, 0)
      } catch (error) {
        console.error('Error fetching earnings:', error)
      }
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

.firm-style {
  color: #757575;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.p-style {
  padding-bottom: 1px;
  padding-top: 4px;
}

.h2-style {
  padding-top: 70px;
  padding-bottom: 10px;
  font-size: 30px;
}
</style>
