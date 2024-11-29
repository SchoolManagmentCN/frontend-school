<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1 style="font-weight: bold; text-decoration: underline; text-decoration-color: red;">
            Admin Dashboard
          </h1>
          <p>Home</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-row align="center">
              <v-col cols="3">
                <v-avatar color="light-green">
                  <v-icon color="green">
                    mdi-account-group
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
                <v-avatar color="light-blue">
                  <v-icon color="blue">
                    mdi-account-group
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
                <v-avatar color="light-orange">
                  <v-icon color="orange">
                    mdi-account-group
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
                <v-avatar color="light-red">
                  <v-icon color="red">
                    mdi-account-group
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <div class="d-flex flex-column">
                  <span>Ernings</span>
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
            <v-card-title>Earnings</v-card-title>
            <v-divider />
            <v-card-text>
              <!-- Placeholder for a line chart component -->
              <p>Grafica</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="pa-3">
            <v-card-title>Expenses</v-card-title>
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
            <v-card-title>Students</v-card-title>
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
            <v-card-title>Event Calendar</v-card-title>
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
            <v-card-title>Reminders</v-card-title>
            <v-divider />
            <v-card-text>
              <p style="text-align: center;">
                Eventos
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

</style>
