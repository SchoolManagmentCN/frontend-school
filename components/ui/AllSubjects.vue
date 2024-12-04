<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Suje</span>cts
    </h2>
    <p class="p-style">
      Home<span style="color: red;">> Subject</span>
    </p>
    <v-card>
      <v-card-title>
        <span class="text-h6">Subjects</span>
        <v-spacer />
        <v-row align="center" justify="end">
          <v-col cols="4">
            <v-text-field
              v-model="searchName"
              label="Search by name"
              outlined
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="searchClass"
              :items="classes"
              label="Search by class"
              outlined
              dense
            />
          </v-col>
          <v-col cols="2">
            <v-btn color="red" @click="searchSubjects">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="filteredSubjects"
        class="elevation-1"
      />
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      searchName: '',
      searchClass: null,
      headers: [
        { text: 'Subject Name', value: 'name' },
        { text: 'Teacher', value: 'teacher' },
        { text: 'Classes', value: 'classes' },
        { text: 'Days', value: 'days' }
      ],
      subjects: [
        {
          name: 'Mathematics',
          teacher: 'Mr. John Doe',
          classes: '10-A, 10-B',
          days: 'Monday, Wednesday'
        },
        {
          name: 'English',
          teacher: 'Ms. Jane Smith',
          classes: '9-A, 9-B',
          days: 'Tuesday, Thursday'
        },
        {
          name: 'Science',
          teacher: 'Dr. Alice Brown',
          classes: '11-C, 12-C',
          days: 'Friday'
        }
      ],
      classes: ['10-A', '10-B', '9-A', '9-B', '11-C', '12-C']
    }
  },
  computed: {
    filteredSubjects () {
      return this.subjects.filter((subject) => {
        return (
          (!this.searchName ||
            subject.name.toLowerCase().includes(this.searchName.toLowerCase())) &&
          (!this.searchClass || subject.classes.includes(this.searchClass))
        )
      })
    }
  },
  methods: {
    searchSubjects () {
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
</style>
