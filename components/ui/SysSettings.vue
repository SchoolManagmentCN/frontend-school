<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Sett</span>ings
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > Settings</span>
    </p>
    <v-container style="border: 2px solid #F0F1F3;">
      <div class="user-settings">
        <!-- Portada -->
        <div class="cover-photo" />
        <!-- Foto de perfil -->
        <div class="profile-container">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            class="profile-picture"
          >
        </div>
      </div>
      <!-- Sección de detalles -->
      <div class="details-section">
        <h2 class="user-name">
          Prince Afful Quansah - Admin
        </h2>
        <div class="form">
          <v-row>
            <v-col cols="3" class="d-flex align-center">
              <label>School Name *</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="Firm Foundation School - Accra"
                outlined
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Email *</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="arabagrant@gmail.com"
                outlined
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Mobile No</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="0264622310"
                outlined
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>City</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="Accra"
                outlined
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Address</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="Greater-Accra"
                outlined
              />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Username</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="Prince Afful Quansah"
                outlined
              />
            </v-col>
            <v-col cols="1" class="d-flex align-center">
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Password</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-text-field
                value="*********"
                type="password"
                outlined
              />
            </v-col>
            <v-col cols="1" class="d-flex align-center">
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3" class="d-flex align-center">
              <label>Language</label>
            </v-col>
            <v-col cols="8" class="d-flex align-center">
              <v-select
                :items="['English', 'Spanish']"
                value="English"
                outlined
              />
            </v-col>
          </v-row>
          <v-btn class="save-btn" color="red" dark>
            Save
          </v-btn>
        </div>
      </div>
    </v-container>
    <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style-2">2021. All rights reserved</span>
  </div>
</template>

<script>
export default {
  name: 'UserSettings'
}
</script>

<style scoped>
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: #D60A0B;
}

.user-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-photo {
  width: 100%;
  height: 250px;
  background-image: url("https://via.placeholder.com/1000x200");
  background-size: cover;
  background-position: center;
  position: relative;
}

.profile-container {
  position: absolute;
  top: 330px; /* Ajusta la posición para que la mitad del perfil quede en la línea */
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 150px; /* Ajusta el margen izquierdo según sea necesario */
}

.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%; /* Hace que la foto sea circular */
  border: 2px solid white; /* Añade un borde */
  background-image: url("https://via.placeholder.com/150");
  background-size: cover;
  background-position: center;
}

.profile-picture {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid white;
}

.details-section {
  margin-top: 100px;
  width: 80%;
}

.user-name {
  text-align: start;
  margin-top: 80px;
  margin-bottom: 20px;
  padding-top: 30px;
}

label {
  font-weight: bold;
}

.save-btn {
  margin-top: 20px;
  align-self: flex-end;
  margin-bottom: 20px;
}

.h2-style {
  padding-top: 82px;
  padding-left: 51px;
  padding-bottom: 10px;
  font-size: 30px;
}

.p-style {
  padding-left: 51px;
  padding-bottom: 30px;
}

.firm-style {
  color: #757575;
  padding-left: 40px;
}

.firm-style-2 {
  color: #757575;
}
</style>
