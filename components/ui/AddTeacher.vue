<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Teac</span>hers
    </h2>
    <p class="p-style">
      Home <span style="color: red;"> > Add Teacher</span>
    </p>
    <v-container>
      <v-card class="pa-4" height="840">
        <v-form @submit.prevent="submitForm">
          <h3 class="h3-style">
            Add New Teacher
          </h3>
          <v-row>
            <v-col cols="3">
              <p>First Name *</p>
              <v-text-field
                v-model="teacherData.firstName"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Last Name *</p>
              <v-text-field
                v-model="teacherData.lastName"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Gender *</p>
              <v-select
                v-model="teacherData.gender"
                :items="itemsGender"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Gender"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Date of Birth *</p>
              <v-text-field
                v-model="teacherData.dateOfBirth"
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
            <v-col cols="3">
              <p>Blood Group *</p>
              <v-text-field
                v-model="teacherData.bloodGroup"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Religion *</p>
              <v-select
                v-model="teacherData.religion"
                :items="itemsReligion"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Religion"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Email</p>
              <v-text-field
                v-model="teacherData.email"
                color="red"
                background-color="#E8EAF6"
                type="email"
                filled
                :rules="correo"
              />
            </v-col>
            <v-col cols="3">
              <p>Phone</p>
              <v-text-field
                v-model="teacherData.phone"
                color="red"
                background-color="#E8EAF6"
                type="phone"
                filled
                :rules="phone"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>Class *</p>
              <v-select
                v-model="teacherData.class"
                :items="itemsClass"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Class"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Address *</p>
              <v-text-field
                v-model="teacherData.address"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Admission Date *</p>
              <v-text-field
                v-model="teacherData.admissionDate"
                color="red"
                background-color="#E8EAF6"
                filled
                label="dd/mm/yy"
                append-icon="mdi-calendar"
                :rules="admissionRules"
              />
            </v-col>
          </v-row>
          <v-row>
            <div class="image-upload-container">
              <v-col cols="auto">
                <div
                  :class="['image-circle', { 'has-image': imagePreviewTeacher }]"
                  :style="{ backgroundImage: imagePreviewTeacher ? `url(${imagePreviewTeacher})` : '' }"
                />
              </v-col>
              <v-col>
                <p>Upload Teacher Photo (150px X 150px)</p>
                <v-btn
                  class="choose-button"
                  outlined
                  color="black"
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
            <v-col cols="auto" />
            <v-btn class="save-style" color="red" type="submit">
              Save
            </v-btn>
            <v-col cols="auto" />
            <v-btn class="reset-style" color="#1A237E" @click="resetForm">
              Reset
            </v-btn>
          </v-row>
        </v-form>
      </v-card>
      <span class="firm-style">© Copyrights</span> firmfoundation <span class="firm-style">2021. All rights reserved</span>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      teacherData: {
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        bloodGroup: null,
        religion: null,
        email: null,
        phone: null,
        class: null,
        address: null,
        admissionDate: null
      },
      imagePreviewTeacher: null,
      teacherImage: null,
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
    resetForm () {
      this.teacherData = {
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        bloodGroup: null,
        religion: null,
        email: null,
        phone: null,
        class: null,
        address: null,
        admissionDate: null
      }
      this.imagePreviewTeacher = null
      this.teacherImage = null
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    onImageChange (event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imagePreviewTeacher = e.target.result
          this.teacherImage = file
        }
        reader.readAsDataURL(file)
      }
    },
    async submitForm () {
      const formData = new FormData()
      formData.append('teacher[firstName]', this.teacherData.firstName)
      formData.append('teacher[lastName]', this.teacherData.lastName)
      formData.append('teacher[gender]', this.teacherData.gender)
      formData.append('teacher[dateOfBirth]', this.teacherData.dateOfBirth)
      formData.append('teacher[bloodGroup]', this.teacherData.bloodGroup)
      formData.append('teacher[religion]', this.teacherData.religion)
      formData.append('teacher[email]', this.teacherData.email)
      formData.append('teacher[phone]', this.teacherData.phone)
      formData.append('teacher[class]', this.teacherData.class)
      formData.append('teacher[address]', this.teacherData.address)
      formData.append('teacher[admissionDate]', this.teacherData.admissionDate)
      formData.append('teacherImage', this.teacherImage)

      try {
        const response = await axios.post('http://localhost:8080/api/teachers', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Teacher added successfully:', response.data)
      } catch (error) {
        console.error('Error adding teacher:', error)
      }
    }
  }
}
</script>

<style scoped>
.subrayado-rojo {
  color: black;
  text-decoration: underline;
  text-decoration-color: #D60A0B;
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
  background-color: #E8EAF6;
  background-size: cover;
  background-position: center;
}

.image-circle.has-image {
  background-color: #E8EAF6;
}

p {
  margin: 0 0 8px 0;
  color: #555;
}

.save-style {
  color: white;
  font-size: 12px;
  width: 130px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.reset-style {
  color: white;
  font-size: 12px;
  width: 130px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.choose-button {
  font-size: 8px;
  background-color: #E8EAF6;
}

.h3-style {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
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

.new-parentsStyle {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.firm-style {
  color: #757575;
}
</style>
