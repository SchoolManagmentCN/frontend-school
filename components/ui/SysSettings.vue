<template>
  <v-container class="pa-4">
    <!-- Foto de portada -->
    <v-img
      src="https://via.placeholder.com/1200x400"
      class="mb-6"
      height="200px"
      width="100%"
      contain
    />

    <v-row>
      <!-- Foto de perfil -->
      <v-col cols="12" md="3" class="text-center">
        <v-avatar size="100">
          <img src="https://via.placeholder.com/100" alt="Profile Picture">
        </v-avatar>
        <h3 class="mt-4">
          John Doe
        </h3>
        <p>Teacher</p>
      </v-col>

      <!-- Información del usuario -->
      <v-col cols="12" md="9">
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            School Name
          </v-col>
          <v-col cols="9">
            High School
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Email
          </v-col>
          <v-col cols="9">
            johndoe@example.com
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            # de teléfono
          </v-col>
          <v-col cols="9">
            +1 234 567 890
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Ciudad
          </v-col>
          <v-col cols="9">
            New York
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Dirección
          </v-col>
          <v-col cols="9">
            1234 Elm Street
          </v-col>
        </v-row>

        <!-- Campos editables -->
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Usuario
          </v-col>
          <v-col cols="7">
            <v-text-field v-model="username" dense hide-details outlined />
          </v-col>
          <v-col cols="2">
            <v-btn icon @click="editField('username')">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Contraseña
          </v-col>
          <v-col cols="7">
            <v-text-field
              v-model="password"
              type="password"
              dense
              hide-details
              outlined
            />
          </v-col>
          <v-col cols="2">
            <v-btn icon @click="editField('password')">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-4">
          <v-col cols="3" class="text-right font-weight-bold">
            Lenguaje
          </v-col>
          <v-col cols="9">
            English
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Botón de guardar -->
    <v-row justify="center" class="mt-6">
      <v-btn color="red" class="white--text" @click="saveSettings">
        Save
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      username: 'johndoe',
      password: 'password123'
    }
  },
  methods: {
    editField (field) {
      console.log(`Editing ${field}`)
    },
    saveSettings () {
      console.log('Settings saved!')
    }
  }
}
</script>

<style scoped>
.v-avatar img {
  border-radius: 50%;
}
</style>
