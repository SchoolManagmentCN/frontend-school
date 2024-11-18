<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="blue"
    dark
  >
    <v-list dense nav>
      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Logo
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Dashboard
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Students
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Parents
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Teachers
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Account
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Subject
          </v-list-item-title>
        </v-list-item>
      </v-list-item>

      <v-list-item link>
        <v-list-item link>
          <v-icon @click="toggleExpanded('dashboard')">
            mdi-view-dashboard
          </v-icon>
          <v-list-item-title v-show="expandedItems.dashboard">
            Settings
          </v-list-item-title>
        </v-list-item>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      expandedItems: {
        dashboard: false
        // ...
      }
    }
  },
  methods: {
    toggleExpanded (item) {
      this.expandedItems[item] = !this.expandedItems[item]
    }
  }
}
</script>
