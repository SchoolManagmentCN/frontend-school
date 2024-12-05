<template>
  <v-container>
    <v-card>
      <v-form ref="form">
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
            <p>Classes *</p>
            <v-text-field
              v-model="newSubject.classes"
              color="red"
              background-color="#E8EAF6"
              type="name"
              filled
              :rules="notEmpty"
            />
          </v-col>
          <v-col cols="3">
            <p class="rightp-style">
              Days *
            </p>
            <v-text-field
              v-model="newSubject.days"
              color="red"
              background-color="#E8EAF6"
              class="right-style"
              filled
              :rules="notEmpty"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-btn class="save-style" color="red" type="submit" @click="saveSubject">
              Save
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="reset-style" color="#1A237E" @click="resetForm">
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      newSubject: {
        name: '',
        teacher: '',
        classes: '',
        days: ''
      },
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ]
    }
  },
  methods: {
    saveSubject () {
      if (!this.newSubject.name || !this.newSubject.teacher) {
        alert('Please fill out all required fields.')
        return
      }
      alert('Subject saved successfully!')
      this.resetForm()
    },
    resetForm () {
      this.newSubject = {
        name: '',
        teacher: '',
        classes: '',
        days: ''
      }
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
  padding-left: 17px
}

.left-style {
  padding-left: 17px
}

.leftp-style {
  padding-left: 17px
}

.right-style {
  padding-right: 17px
}

.rightp-style {
  padding-right: 17px
}

.save-style {
  color: white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: 17px;
}

.reset-style {
  color: white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 5px;
}

.firm-style {
  color: #757575;
  padding-top: 30px;
}
</style>
