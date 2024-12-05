<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Stud</span>ents
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > Student Admit Form</span>
    </p>
    <v-container>
      <v-card>
        <v-form @submit.prevent="submitForm">
          <h3 class="h3-style">
            Add New Students
          </h3>
          <v-row>
            <v-col cols="3">
              <p>Name *</p>
              <v-text-field
                v-model="studentData.name"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Gender *</p>
              <v-select
                v-model="studentData.gender"
                :items="itemsGender"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Gender"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Class *</p>
              <v-select
                v-model="studentData.classes"
                :items="itemsClass"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Class"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Date of Birth *</p>
              <v-text-field
                v-model="studentData.dateOfBirth"
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
                v-model="studentData.bloodGroup"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Religion *</p>
              <v-select
                v-model="studentData.religion"
                :items="itemsReligion"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Religion"
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Admission Date *</p>
              <v-text-field
                v-model="studentData.admissionDate"
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
                  :class="['image-circle', { 'has-image': imagePreviewStudent }]"
                  :style="{ backgroundImage: imagePreviewStudent ? `url(${imagePreviewStudent})` : '' }"
                />
              </v-col>
              <v-col>
                <p>Upload Student Photo (150px X 150px)</p>
                <v-btn
                  class="choose-button"
                  outlined
                  color="black"
                  @click="triggerFileInput('student')"
                >
                  Choose File
                </v-btn>
              </v-col>
            </div>
            <input
              ref="fileInputStudent"
              type="file"
              accept="image/*"
              style="display: none;"
              @change="onImageChange('student')"
            >
          </v-row>
          <h3 class="new-parentsStyle">
            Add New Parents
          </h3>
          <v-row>
            <v-col cols="3">
              <p>Father's Name</p>
              <v-text-field
                v-model="parentData.fatherName"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Mother's Name</p>
              <v-text-field
                v-model="parentData.motherName"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Email</p>
              <v-text-field
                v-model="parentData.email"
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
                v-model="parentData.phone"
                color="red"
                background-color="#E8EAF6"
                type="phone"
                filled
                :rules="phone"
              />
            </v-col>
            <v-col cols="3">
              <p>Father's Occupation</p>
              <v-text-field
                v-model="parentData.fatherOccupation"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Address *</p>
              <v-text-field
                v-model="parentData.address"
                color="red"
                background-color="#E8EAF6"
                filled
                :rules="notEmpty"
              />
            </v-col>
            <v-col cols="3">
              <p>Religion *</p>
              <v-select
                v-model="parentData.religion"
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
                  :class="['image-circle', { 'has-image': imagePreviewParent }]"
                  :style="{ backgroundImage: imagePreviewParent ? `url(${imagePreviewParent})` : '' }"
                />
              </v-col>
              <v-col>
                <p>Upload Parent Photo (150px X 150px)</p>
                <v-btn
                  class="choose-button"
                  outlined
                  color="black"
                  @click="triggerFileInput('parent')"
                >
                  Choose File
                </v-btn>
              </v-col>
            </div>
            <input
              ref="fileInputParent"
              type="file"
              accept="image/*"
              style="display: none;"
              @change="onImageChange('parent')"
            >
          </v-row>
          <v-row>
            <v-col cols="auto" />
            <v-btn class="save-style" color="red" type="submit">
              Save
            </v-btn>
            <v-col cols="auto" />
            <v-btn class="reset-style" color="#1A237E">
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
      studentData: {
        name: null,
        gender: null,
        dateOfBirth: null,
        bloodGroup: null,
        religion: null,
        admissionDate: null,
        classes: null
      },
      parentData: {
        fatherName: null,
        motherName: null,
        email: null,
        phone: null,
        fatherOccupation: null,
        address: null,
        religion: null
      },
      imagePreviewStudent: null,
      imagePreviewParent: null,
      studentImage: null,
      parentImage: null,
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
    triggerFileInput (type) {
      if (type === 'student') {
        this.$refs.fileInputStudent.click()
      } else if (type === 'parent') {
        this.$refs.fileInputParent.click()
      }
    },
    onImageChange (type) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (type === 'student') {
            this.imagePreviewStudent = e.target.result
            this.studentImage = file
          } else if (type === 'parent') {
            this.imagePreviewParent = e.target.result
            this.parentImage = file
          }
        }
        reader.readAsDataURL(file)
      }
    },
    async submitForm () {
      const formData = new FormData()
      formData.append('student[name]', this.studentData.name)
      formData.append('student[gender]', this.studentData.gender)
      formData.append('student[fatherName]', this.parentData.fatherName)
      formData.append('student[motherName]', this.parentData.motherName)
      formData.append('student[dateOfBirth]', this.studentData.dateOfBirth)
      formData.append('student[Religion]', this.studentData.religion)
      formData.append('student[fatherOccupation]', this.parentData.fatherOccupation)
      formData.append('student[email]', this.parentData.email)
      formData.append('student[admissionDate]', this.studentData.admissionDate)
      formData.append('student[classes]', this.studentData.classes)
      formData.append('parent[name]', this.parentData.fatherName)
      formData.append('parent[gender]', this.parentData.gender)
      formData.append('parent[phone]', this.parentData.phone)
      formData.append('parent[religion]', this.parentData.religion)
      formData.append('parent[occupation]', this.parentData.fatherOccupation)
      formData.append('parent[email]', this.parentData.email)
      formData.append('parent[address]', this.parentData.address)
      formData.append('studentImage', this.studentImage)
      formData.append('parentImage', this.parentImage)

      try {
        const response = await axios.post('http://localhost:8081/api/students', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Student and parent added successfully:', response.data)
      } catch (error) {
        console.error('Error adding student and parent:', error)
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
  padding-top: 30px;
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
