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

        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Students"
          prepend-icon="mdi-account-school"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title style="color: white;">
                Students
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group style="background-color: #2979FF;">
            <nuxt-link to="/dashboard/student" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > All Students
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddStudentIndex" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Add Students
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/StudentPromoIndex" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Student Promotion
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>

        <nuxt-link to="/dashboard/parent">
          <v-list-item style="background-color: #14238A; color: white;" title="Parents">
            <v-icon style="color: white;">
              mdi-account-multiple
            </v-icon>
            <p>Parents</p>
          </v-list-item>
        </nuxt-link>

        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Students"
          prepend-icon="mdi-human-male-board"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title style="color: white;">
                Teachers
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group style="background-color: #2979FF;">
            <nuxt-link to="/dashboard/teacher" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > All Teachers
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddTeacherIndex" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Add Teachers
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>

        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Account"
          prepend-icon="mdi-laptop"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title style="color: white;">
                Account
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group style="background-color: #2979FF;">
            <nuxt-link to="/dashboard/FeesGroupIndex" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Fees Group
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/studentfees" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Student Fees
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/expense" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Expense
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddExpensesIndex" style="text-decoration: none; color: white;">
              <v-list-item>
                <v-list-item-title style="color: white;">
                  > Add Expense
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>

        <nuxt-link to="/dashboard/adminSubjects">
          <v-list-item style="background-color: #14238A; color: white;" title="Subject">
            <v-icon style="color: white;">
              mdi-book-open-blank-variant-outline
            </v-icon>
            <p>Subject</p>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="/dashboard/Usersettings">
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
