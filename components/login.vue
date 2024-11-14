<template>
  <v-container display="flex" style="height: 100vh; width: 100%;">
    <v-row style="height: 100%;">
      <v-col cols="12" sm="6" class="left">
        <img src="../assets/img/logo.png" alt="Logo" class="logo">
        <p style="color: white;">
          WELCOME
        </p>
      </v-col>

      <v-col cols="12" sm="6" class="right">
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" placeholder="Correo electrónico" label="Correo electrónico" solo />
              <v-text-field v-model="password" placeholder="Contraseña" label="Contraseña" type="password" solo />
              <a href="#" style="display: block; text-align: left;">Forgot your password?</a>
              <v-btn
                style="background-color: red; color: white;"
                :disabled="loading"
                :loading="loading"
                class="text-none mb-4"
                color="indigo-darken-3"
                size="x-large"
                variant="flat"
                block
                @click="loading = !loading"
              >
                SIGN IN
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginComponent',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
.left {
  background-image: url(../assets/img/FondoLoginR.jpg);
  background-size: cover;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right {
  background-color: blue;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 200px;
  max-height: 200px;

}
</style>
