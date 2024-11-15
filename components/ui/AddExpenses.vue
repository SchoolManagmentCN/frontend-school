<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Acc</span>ount
    </h2>
    <p class="p-style">
      Home <span style="color: red;">> Add Expense</span>
    </p>
    <v-container>
      <v-card class="pa-4" height="500">
        <v-form>
          <h3 class="h3-style">
            Add New Expenses
          </h3>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Name *</p>
              <v-text-field
                v-model="nameExpense"
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
              <p>Expense Type *</p>
              <v-select
                v-model="expenseType"
                :items="itemsExpenseType"
                color="red"
                background-color="#E8EAF6"
                filled
                label="Please Select Type"
                :rules="notEmpty"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Status *</p>
              <v-select
                v-model="statusExpense"
                :items="itemsStatus"
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
              <p>Amount *</p>
              <v-text-field
                v-model="amount"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="notEmpty"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="3"
            >
              <p>Phone</p>
              <v-text-field
                v-model="phoneExpense"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="phone"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>E-Mail Address</p>
              <v-text-field
                v-model="emailExpense"
                color="red"
                background-color="#E8EAF6"
                type="name"
                filled
                :rules="correo"
              />
            </v-col>
            <v-col
              cols="3"
            >
              <p>Due Date</p>
              <v-text-field
                v-model="dueDate"
                color="red"
                background-color="#E8EAF6"
                filled
                label="dd/mm/yy"
                append-icon="mdi-calendar"
                :rules="date"
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
      nameExpense: null,
      expenseType: null,
      statusExpense: null,
      amount: null,
      phoneExpense: null,
      emailExpense: null,
      dueDate: null,
      notEmpty: [
        v => !!v || 'The field could not be empty'
      ],
      itemsExpenseType: [
        'Water Service', 'Light Service', 'Teacher`s Payment', 'Repair`s Payment', 'Other'
      ],
      itemsStatus: [
        'Payed', 'Pending', 'Expired'
      ],
      date: [
        v => (v && v.length < 11) || 'Due Date must be less than 11 chars'
      ],
      phone: [
        v => (v && v.length > 9) || 'Phone must be less than 11 digits'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
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
