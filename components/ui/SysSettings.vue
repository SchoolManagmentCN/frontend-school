<template>
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

    <!-- Sección de detalles -->
    <div class="details-section">
      <h2 class="user-name">
        Prince Afful Quansah - Admin
      </h2>
      <div class="form">
        <v-row dense>
          <v-col cols="3">
            <label>School Name *</label>
          </v-col>
          <v-col cols="9">
            <v-text-field value="Firm Foundation School - Accra" readonly />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Email *</label>
          </v-col>
          <v-col cols="9">
            <v-text-field value="arabagrant@gmail.com" readonly />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Mobile No</label>
          </v-col>
          <v-col cols="9">
            <v-text-field value="0264622310" readonly />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>City</label>
          </v-col>
          <v-col cols="9">
            <v-text-field value="Accra" readonly />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Address</label>
          </v-col>
          <v-col cols="9">
            <v-text-field value="Greater-Accra" readonly />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Username</label>
          </v-col>
          <v-col cols="8">
            <v-text-field value="Prince Afful Quansah" readonly />
          </v-col>
          <v-col cols="1">
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Password</label>
          </v-col>
          <v-col cols="8">
            <v-text-field value="*********" type="password" readonly />
          </v-col>
          <v-col cols="1">
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <label>Language</label>
          </v-col>
          <v-col cols="9">
            <v-select :items="['English', 'Spanish']" value="English" readonly />
          </v-col>
        </v-row>
        <v-btn class="save-btn" color="red" dark>
          Save
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSettings'
}
</script>

<style scoped>
.user-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-photo {
  width: 100%;
  height: 200px;
  background-image: url("https://via.placeholder.com/1000x200");
  background-size: cover;
  background-position: center;
  position: relative;
}

.profile-container {
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 250px;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid white;
}

.details-section {
  margin-top: 100px; /* Ajusta este valor para separar los datos de la foto */
  width: 80%;
}

.user-name {
  text-align: start;
  margin-top: 50px;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.save-btn {
  margin-top: 20px;
  align-self: flex-end;
  margin-bottom: 20px;
}
</style>
