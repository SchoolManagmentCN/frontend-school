<template>
  <v-navigation-drawer
    v-model="drawer"
    style="background-color: #14238A;"
    app
    mini-variant-width="80"
    :mini-variant.sync="mini"
  >
    <template #prepend>
      <v-list-item style="background-color: #D60A0B; height: 70px;">
        <v-btn icon color="white" @click="mini = !mini">
          <v-icon>{{ mini ? 'mdi-window-close' : 'mdi-text' }}</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-list>
      <v-list-item-group>
        <nuxt-link to="/dashboard/admin" exact style="text-decoration: none;">
          <v-list-item
            style="background-color: #14238A; color: #BDBDBD;"
            title="DashBoard"
            class="d-flex align-center"
          >
            <v-icon style="color: white;" class="mr-3">
              mdi-av-timer
            </v-icon>
            <p class="mb-0">
              Dashboard
            </p>
          </v-list-item>
        </nuxt-link>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 1px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Students"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item
              style="background-color: #14238A; color: #BDBDBD;"
              title="Students"
              class="d-flex align-center"
            >
              <v-icon style="color: white;" class="mr-3">
                mdi-account-school-outline
              </v-icon>
              <p class="mb-0">
                Students
              </p>
            </v-list-item>
          </template>
          <v-list-item-group style="background-color: #263AC3;">
            <nuxt-link to="/dashboard/student" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item d-flex align-center">
                <v-list-item-title style="color: #BDBDBD;">
                  > All Students
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddStudentIndex" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item d-flex align-center">
                <v-list-item-title style="color: #BDBDBD;">
                  > Add Students
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/StudentPromoIndex" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item d-flex align-center">
                <v-list-item-title style="color: #BDBDBD;">
                  > Student Promotion
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/studentDetail" exact style="text-decoration: none;">
              <v-list-item>
                <v-icon style="color: white;" class="mr-3">
                  mdi-account-search
                </v-icon>
                <p class="mb-0" style="color: white;">
                  Find Student
                </p>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <nuxt-link to="/dashboard/parent" exact style="text-decoration: none;">
          <v-list-item style="background-color: #14238A; color: #BDBDBD;" title="Parents" class="d-flex align-center">
            <v-icon style="color: white;" class="mr-3">
              mdi-account-multiple
            </v-icon>
            <p class="mb-0">
              Parents
            </p>
          </v-list-item>
          <v-list-item-group style="background-color: #14238A;">
            <nuxt-link to="/dashboard/parentDetail" exact style="text-decoration: none;">
              <v-list-item>
                <v-icon style="color: white;" class="mr-3">
                  mdi-account-search
                </v-icon>
                <p class="mb-0" style="color: white;">
                  Find Parent
                </p>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </nuxt-link>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Teachers"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item
                style="background-color: #14238A; color: #BDBDBD;"
                title="Teachers"
                class="d-flex align-center"
              >
                <v-icon style="color: white;" class="mr-3">
                  mdi-human-male-board-poll
                </v-icon>
                <p class="mb-0">
                  Teachers
                </p>
              </v-list-item>
            </v-list-item-content>
          </template>
          <v-list-item-group style="background-color: #263AC3;">
            <nuxt-link to="/dashboard/teacher" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > All Teachers
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddTeacherIndex" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > Add Teachers
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/teacherDetail" exact style="text-decoration: none;">
              <v-list-item>
                <v-icon style="color: white;" class="mr-3">
                  mdi-account-search
                </v-icon>
                <p class="mb-0" style="color: white;">
                  Find Teacher
                </p>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <v-list-group
          style="background-color: #14238A; color: white;"
          title="Account"
          active-class="active-group"
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item style="background-color: #14238A; color: #BDBDBD;" class="d-flex align-center">
                <v-icon style="color: white;" class="mr-3">
                  mdi-calculator
                </v-icon>
                <p class="mb-0">
                  Account
                </p>
              </v-list-item>
            </v-list-item-content>
          </template>
          <v-list-item-group style="background-color: #263AC3;">
            <nuxt-link to="/dashboard/FeesGroupIndex" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > Fees Group
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/studentfees" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > Student Fees
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/expense" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > Expense
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/dashboard/AddExpensesIndex" style="text-decoration: none; color: white;">
              <v-list-item class="hover-item">
                <v-list-item-title style="color: #BDBDBD;">
                  > Add Expense
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list-group>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <nuxt-link to="/dashboard/adminSubjects" exact style="text-decoration: none;">
          <v-list-item style="background-color: #14238A; color: #BDBDBD;" title="Subject" class="d-flex align-center">
            <v-icon style="color: white;" class="mr-3">
              mdi-book-open-page-variant
            </v-icon>
            <p class="mb-0">
              Subject
            </p>
          </v-list-item>
        </nuxt-link>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
        <nuxt-link to="/dashboard/Usersettings" exact style="text-decoration: none;">
          <v-list-item style="background-color: #14238A; color: #BDBDBD;" title="Settings" class="d-flex align-center">
            <v-icon style="color: white;" class="mr-3">
              mdi-cog
            </v-icon>
            <p class="mb-0">
              Settings
            </p>
          </v-list-item>
        </nuxt-link>
        <v-divider
          class="my-3"
          style="
            background-color: #131F73;
            height: 20px;
            width: 100%;
            margin: 0 auto;
          "
        />
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
.hover-item {
  transition: background-color 0.3s, color 0.3s;
}

.hover-item:hover {
  background-color: #14238A;
  color: white;
}

.hover-item:hover .v-list-item-title {
  color: #000000;
}
</style>
