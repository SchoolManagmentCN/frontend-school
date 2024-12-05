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
                  <h3>50000</h3>
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
                  <h3>1500</h3>
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
                  <h3>60000</h3>
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
                  <h3>$200000</h3>
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
export default {
  name: 'AdminDashboard',
  layout: 'navegation'
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
