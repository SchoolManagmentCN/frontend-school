<template>
  <div>
    <h2>
      <span class="subrayado-rojo">Stud</span>ents
    </h2>
    <p>Home <span style="color: red;">> Student Admit Form</span></p>
    <v-container>
      <v-card class="pa-4">
        <v-form>
          <h3>Add New Students</h3>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Quiero mucho a mi amorcito Cher</p><p>
                <v-text-field
                  v-model="name"
                  color="red"
                  background-color="#E8EAF6"
                  type="name"
                  filled
                  :rules="notEmpty"
                />
              </p>
            </v-col>
            <v-col
              cols="3"
            >
              <p>Gender *</p>
              <v-select
                v-model="Gender"
                :items="itemsGender"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Gender"
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Class *</p>
              <v-select
                v-model="Class"
                :items="itemsClass"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Class"
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Date of Birth *</p>
              <v-text-field
                v-model="birth"
                color="red"
                background-color="#E8EAF6"
                filled
                label="dd/mm/yy"
                append-icon="mdi-calendar"
                :rules="birthRules"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Blood Group *</p>
              <v-text-field
                v-model="bloodGroup"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Religion *</p>
              <v-select
                v-model="religion"
                :items="itemsReligion"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Religion"
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Admission Date *</p>
              <v-text-field
                v-model="admission"
                color="red"
                background-color="#E8EAF6"
                filled
                label="dd/mm/yy"
                append-icon="mdi-calendar"
                :rules="admissionRules"
              />
            </v-col>
          </v-row>
          <h3>Add New Parents</h3>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Father's Name</p>
              <v-text-field
                v-model="fatherName"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Mother's Name</p>
              <v-text-field
                v-model="motherName"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Email</p>
              <v-text-field
                v-model="email"
                color="red"
                background-color="#E8EAF6"
                type="email"
                filled
                :rules="correo"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Phone</p>
              <v-text-field
                v-model="phoneNumber"
                color="red"
                background-color="#E8EAF6"
                type="phone"
                filled
                :rules="phone"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Father's Ocupation</p>
              <v-text-field
                v-model="fatherOcupation"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Adress *</p>
              <v-text-field
                v-model="adress"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Religion *</p>
              <v-select
                v-model="religionParents"
                :items="itemsReligion"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Religion"
                :rules="notEmpty"
              />
            </v-col>
          </v-row>
          <v-row>
            <div class="image-upload-container">
              <v-col cols="auto">
                <div
                  :class="['image-circle', { 'has-image': imagePreview }]"
                  :style="{ backgroundImage: imagePreview ? `url(${imagePreview})` : '' }"
                />
              </v-col>
              <v-col>
                <p>Upload Student Photo (150px X 150px)</p>
                <v-btn
                  class="choose-button"
                  tile
                  color="#E8EAF6"
                  @click="triggerFileInput"
                >
                  Choose File
                </v-btn>
              </v-col>
            </div>
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              style="display: none;"
              @change="onImageChange"
            >
          </v-row>
          <v-row>
            <v-col
              cols="auto"
            />
            <v-btn
              class="save-style"
              color="red"
            >
              Save
            </v-btn>
            <v-col cols="auto" />
            <v-btn
              class="reset-style"
              color="#1A237E"
            >
              Reset
            </v-btn>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      birth: null,
      Gender: null,
      Class: null,
      bloodGroup: null,
      admission: null,
      fatherName: null,
      motherName: null,
      email: null,
      phoneNumber: null,
      fatherOcupation: null,
      adress: null,
      religionParents: null,
      imagePreview: null,
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ],
      itemsGender: [
        'Male', 'Female', 'Other', 'Prefer not to say', 'Helicopter Bell 407'
      ],
      itemsClass: [
        'Cómputo en la Nube', 'Lenguajes Modernos', 'Aplicaciones en Internet', 'Other'
      ],
      itemsReligion: [
        'Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Judaism', 'Sikhism', 'Other'
      ],
      birthRules: [
        v => (v && v.length < 11) || 'Birthday must be less than 11 chars'
      ],
      admissionRules: [
        v => (v && v.length < 11) || 'Admission Date must be less than 11 chars'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: [
        v => (v && v.length > 9) || 'Password must be less than 11 digits'
      ]
    }
  },
  methods: {
    triggerFileInput () {
      this.$refs.fileInput.click() // Activa el input de archivo al hacer clic en el botón
    },
    onImageChange (event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imagePreview = e.target.result // Asigna la URL de la imagen para la vista previa
        }
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style scoped>
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: red;
}

.image-upload-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
}

.image-circle {
  width: 200px;
  height: 200px;
  border-radius: 200%;
  background-color: #E8EAF6; /* Color gris cuando no hay imagen */
  background-size: cover;
  background-position: center;
}

.image-circle.has-image {
  background-color: #E8EAF6; /* Elimina el color de fondo cuando hay una imagen */
}

p {
  margin: 0 0 8px 0; /* Ajusta el margen del texto */
  color: #555;
}

.save-style {
  color: white;
  font-size: 12px;
  width: 130px;
  border: 2px solid #000;
  border-radius: 5px;
}

.reset-style {
  color:white;
  font-size: 12px;
  width: 130px;
  border: 2px solid #000;
  border-radius: 5px;
}

.choose-button {
  font-size: 8px;
}

</style>
