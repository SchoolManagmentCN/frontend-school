<template>
  <v-navigation-drawer
    v-model="drawer"
    style="background-color: #14238A;"
    app
    :mini-variant.sync="mini"
  >
    <template #prepend>
      <v-list-item style="background-color: #D60A0B;">
        <v-btn icon @click="mini = !mini">
          <v-icon>{{ mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-list>
      <v-list-item-group>
        <nuxt-link to="/dashboard/admin" exact>
          <v-list-item style="background-color: #14238A; color: white;" title="DashBoard">
            <v-icon style="color: white;">
              mdi-view-dashboard
            </v-icon>
            <p>Dashboard</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/dashboard/student">
          <v-list-item style="background-color: #14238A; color: white;" title="Students">
            <v-icon style="color: white;">
              mdi-account-school
            </v-icon>
            <p>Students</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/dashboard/parent">
          <v-list-item style="background-color: #14238A; color: white;" title="Parents">
            <v-icon style="color: white;">
              mdi-account-multiple
            </v-icon>
            <p>Parents</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/dashboard/teacher">
          <v-list-item style="background-color: #14238A; color: white;" title="Teachers">
            <v-icon style="color: white;">
              mdi-human-male-board
            </v-icon>
            <p>Teachers</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/account">
          <v-list-item style="background-color: #14238A; color: white;" title="Account">
            <v-icon style="color: white;">
              mdi-laptop
            </v-icon>
            <p>Account</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/dashboard/adminSubjects">
          <v-list-item style="background-color: #14238A; color: white;" title="Subject">
            <v-icon style="color: white;">
              mdi-book-open-blank-variant-outline
            </v-icon>
            <p>Subject</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/settings">
          <v-list-item style="background-color: #14238A; color: white;" title="Settings">
            <v-icon style="color: white;">
              mdi-cog
            </v-icon>
            <p>Settings</p>
          </v-list-item>
        </nuxt-link>
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
