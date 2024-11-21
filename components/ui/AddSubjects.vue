<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="text-h6">Add New Subject</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="newSubject.name"
                label="Subject Name"
                outlined
                dense
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="newSubject.teacher"
                label="Teacher"
                outlined
                dense
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="newSubject.classes"
                label="Classes"
                outlined
                dense
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="newSubject.days"
                label="Days"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-btn color="red" @click="saveSubject">
                Save
              </v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn color="blue" @click="resetForm">
                Reset
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
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
      }
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
</style>
