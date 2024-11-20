<template>
  <v-app>
    <v-container fluid>
      <v-row style="height: 100vh;">
        <v-col cols="6" class="left">
          <h1>WELCOME</h1>
        </v-col>
        <v-col cols="6" style="background-color: #311B92;" class="right">
          <v-card class="Form" style="background-color: white;">
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  placeholder="Correo electrónico"
                  label="Correo electrónico"
                  solo
                />
                <v-text-field
                  v-model="password"
                  placeholder="Contraseña"
                  label="Contraseña"
                  type="password"
                  solo
                />
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
  </v-app>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Form {
  height: 45%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
