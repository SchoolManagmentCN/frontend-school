<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Stud</span>ents
    </h2>
    <p class="p-style">
      Home <span style="color: red;">> Student Admit Form</span>
    </p>
    <v-container>
      <v-card class="pa-4" height="350">
        <v-form>
          <h3 class="h3-style">
            Student Promotion
          </h3>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Name</p>
              <v-text-field
                v-model="nameStudentPromo"
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
              <p>Current Class</p>
              <v-select
                v-model="currentClassStudent"
                :items="itemsCurrentClass"
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
              <p>Promotion From Class *</p>
              <v-select
                v-model="promotionStudentFromClass"
                :items="itemsPromotionFromClass"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select"
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Promotion To Class *</p>
              <v-select
                v-model="promotionStudentToClass"
                :items="itemsPromotionToClass"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select"
                :rules="notEmpty"
              />
            </v-col>
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
      nameStudentPromo: null,
      currentClassStudent: null,
      promotionStudentFromClass: null,
      promotionStudentToClass: null,
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ],
      itemsCurrentClass: [
        'Cómputo en la Nube', 'Lenguajes Modernos', 'Aplicaciones en Internet', 'Other'
      ],
      itemsPromotionFromClass: [
        'Cómputo en la Nube', 'Lenguajes Modernos', 'Aplicaciones en Internet', 'Other'
      ],
      itemsPromotionToClass: [
        'Cómputo en la Nube', 'Lenguajes Modernos', 'Aplicaciones en Internet', 'Other'
      ]
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

.save-style {
  color: white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}

.reset-style {
  color:white;
  font-size: 12px;
  width: 150px;
  border: 2px solid #000;
  border-radius: 5px;
}

.h2-style {
  padding-top: 30px;
  padding-left: 13px;
  padding-bottom: 10px;
  font-size: 30px;
}

.p-style {
  padding-left: 13px;
  padding-bottom: 30px;
}

.h3-style {
  padding-top: 25px;
  padding-bottom: 20px;
  font-size: 30px;
}

</style>
