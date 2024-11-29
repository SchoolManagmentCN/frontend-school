<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from '~/pages/login/index.vue'
export default {
  // eslint-disable-next-line require-await
  // async mounted () {
  //   if (this.$auth.loggedIn) {
  //     this.$router.push('/dashboard') // Redirige a la página protegida
  //   } else {
  //     this.$router.push('/login') // Redirige al login
  //   }
  // },
  components: {
    Login
  }
}
</script>
