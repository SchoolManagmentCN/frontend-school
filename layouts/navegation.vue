<template>
  <v-navigation-drawer
    v-model="drawer"
    style="background-color: #311B92;"
    app
    :mini-variant.sync="mini"
  >
    <template #prepend>
      <v-list-item style="background-color: red;">
        <v-btn icon @click="mini = !mini">
          <v-icon>{{ mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-list>
      <v-list-item-group>
        <v-list-item style="background-color: #311B92; color: white;" link title="DashBoard">
          <v-icon style="color: white;">
            mdi-view-dashboard
          </v-icon>
          <p>Dashboard</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Students">
          <v-icon style="color: white;">
            mdi-account-school
          </v-icon>
          <p>Students</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Parents">
          <v-icon style="color: white;">
            mdi-account-multiple
          </v-icon>
          <p>Parents</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Teachers">
          <v-icon style="color: white;">
            mdi-human-male-board
          </v-icon>
          <p>Teachers</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Account">
          <v-icon style="color: white;">
            mdi-laptop
          </v-icon>
          <p>Account</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Subject">
          <v-icon style="color: white;">
            mdi-book-open-blank-variant-outline
          </v-icon>
          <p>Subject</p>
        </v-list-item>

        <v-list-item style="background-color: #311B92; color: white;" link title="Settings">
          <v-icon style="color: white;">
            mdi-cog
          </v-icon>
          <p>Settings</p>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true, // Controla si la sidebar está abierta o cerrada
      mini: false // Controla si la sidebar está en modo colapsado
    }
  }
}
</script>

<style>
/* Puedes agregar estilos personalizados aquí si lo necesitas */
</style>
