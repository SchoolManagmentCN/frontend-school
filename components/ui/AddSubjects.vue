<template>
  <v-container>
    <v-card>
      <v-form @submit.prevent="submitForm">
        <h3 class="h3-style">
          Add New Subject
        </h3>
        <v-row>
          <v-col cols="3">
            <p class="leftp-style">
              Subject Name *
            </p>
            <v-text-field
              v-model="newSubject.name"
              color="red"
              background-color="#E8EAF6"
              type="name"
              filled
              class="left-style"
              :rules="notEmpty"
            />
          </v-col>
          <v-col cols="3">
            <p>Teacher *</p>
            <v-text-field
              v-model="newSubject.teacher"
              color="red"
              background-color="#E8EAF6"
              type="name"
              filled
              :rules="notEmpty"
            />
          </v-col>
          <v-col cols="3">
            <p>Class *</p>
            <v-select
              v-model="newSubject.class"
              :items="itemsClass"
              color="red"
              background-color="#E8EAF6"
              filled
              label="Please Select Class"
              :rules="notEmpty"
            />
          </v-col>
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
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      newSubject: {
        name: null,
        teacher: null,
        class: null
      },
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ],
      itemsClass: [
        'Cómputo en la Nube', 'Lenguajes Modernos', 'Aplicaciones en Internet', 'Other'
      ]
    }
  },
  methods: {
    resetForm () {
      this.newSubject = {
        name: null,
        teacher: null,
        class: null
      }
    },
    async submitForm () {
      const formData = new FormData()
      formData.append('subject[name]', this.newSubject.name)
      formData.append('subject[teacher]', this.newSubject.teacher)
      formData.append('subject[class]', this.newSubject.class)

      try {
        const response = await axios.post('http://localhost:8181/api/subjects', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Subject added successfully:', response.data)
      } catch (error) {
        console.error('Error adding subject:', error)
      }
    }
  }
}
</script>

<style scoped>
.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.leftp-style {
  padding-left: 51px;
  padding-bottom: 10px;
  font-size: 20px;
}

.left-style {
  padding-left: 51px;
  padding-bottom: 10px;
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
</style>
