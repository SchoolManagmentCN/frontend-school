<template>
  <v-app>
    <v-container fluid>
      <v-row style="height: 100vh;">
        <v-col cols="6" class="left">
          <img src="../../assets/img/logoUG.png" alt="">
          <h1 style="color: white;">
            WELCOME
          </h1>
        </v-col>
        <v-col cols="6" class="right">
          <v-card class="Form" elevation="0">
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  placeholder="Prince Afful Quansah"
                  outlined
                  dense
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  outlined
                  dense
                />
                <div class="text-left mb-4">
                  <a href="#" class="text-decoration-none grey--text text--darken-1">Forgot your password?</a>
                </div>
                <v-btn
                  color="red darken-2"
                  :disabled="loading"
                  :loading="loading"
                  class="text-none white--text"
                  x-large
                  block
                  @click="login"
                >
                  SIGN IN
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <div class="text-center mt-8 caption grey--text text--darken-1">
            © 2021 Firm Foundation School Management
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
  layout: 'login',
  data () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async login () {
      try {
        this.loading = true
        console.log('Attempting login with:', this.username, this.password)
        const response = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        console.log('Login successful:', response)
        this.$router.push('/dashboard/admin') // Redirect to dashboard on successful login
      } catch (error) {
        console.error('Error during login:', error)
        alert('Usuario o contraseña incorrectos.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.left {
  background-image: url(../../assets/img/FondoLoginR.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.left::after {
  content: '';
  position: absolute;
  top: 0;
  right: -100px;
  width: 200px;
  height: 100%;
  background-color: #14238A;
  transform: skew(-10deg);
}

.right {
  background-color: #14238A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Form {
  width: 80%;
  max-width: 400px;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
}

.v-text-field ::v-deep .v-input__slot {
  background-color: #f5f5f5 !important;
}

.v-btn {
  height: 50px;
  font-weight: bold;
}
</style>
