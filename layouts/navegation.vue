<template>
  <v-navigation-drawer
    style="background-color: #311B92;"
    app
    permanent
    left
  >
    <v-list-item style="background-color: red;">
      <v-icon>
        mdi-close
      </v-icon>
    </v-list-item>

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
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
  }
}
</script>

<style>
</style>
