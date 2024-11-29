<template>
  <v-app dark>
    <v-main>
      <navegation />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navegation from '~/layouts/navegation.vue'

export default {
  name: 'DefaultLayout',
  components: { Navegation },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
body {
  background-color: red;
}

</style>
