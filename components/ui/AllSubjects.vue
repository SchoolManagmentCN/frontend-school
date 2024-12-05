<template>
  <v-container>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Subj</span>ects
    </h2>
    <p class="p-style">
      Home<span style="color: red;"> > Subject</span>
    </p>
    <v-card>
      <v-card-title>
        <h3 class="h3-style">
          All Subjects
        </h3>
        <v-row class="align-center" style="width: 100%;">
          <v-col cols="4" class="d-flex">
            <v-text-field
              v-model="searchName"
              label="Search by name"
              color="#14238A"
              background-color="#DDDEEE80"
              filled
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="searchClass"
              :items="classes"
              label="Search by class"
              color="#14238A"
              background-color="#DDDEEE80"
              filled
            />
          </v-col>
          <v-col cols="right">
            <v-btn class="save-style" color="red" @click="searchSubjects">
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

.h2-style {
  padding-top: 60px;
  padding-bottom: 10px;
  font-size: 30px;
}

.p-style {
  padding-bottom: 27px;
}

.h3-style {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 30px;
}

.save-style {
  color: white;
  font-size: 12px;
  width: 200px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 25px;
}

.firm-style {
  color: #757575;
}
</style>
