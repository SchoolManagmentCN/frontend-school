<template>
  <div>
    <h2 class="h2-style">
      <span class="subrayado-rojo">Acc</span>ount
    </h2>
    <p class="p-style">
      Home <span style="color: red;">> Fees Group</span>
    </p>
    <v-container>
      <v-card class="pa-4" height="1100">
        <h3 class="h3-style">
          <div class="icon-text-row">
            <v-icon class="icono-lista">
              mdi-format-list-bulleted
            </v-icon>
            Fees <span class="subrayado-rojo">Group</span> List
            |
            <v-icon class="icono-pencil">
              mdi-pencil
            </v-icon>
            Add Fees Group
          </div>
        </h3>
        <v-row>
          <v-col
            cols="8"
          />
          <v-text-field
            v-model="searchFees"
            class="search-fees"
            color="red"
            background-color="#E8EAF6"
            label="Search..."
            filled
          />
        </v-row>
        <table class="custom-table">
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.key">
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td v-for="header in headers" :key="header.key">
                <span v-if="header.key === 'feesType'" v-html="row[header.key].replace(/\n/g, '<br>')" />
                <span v-else>{{ row[header.key] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <v-row>
          <p class="pre-style">
            Previous <v-btn
              class="btn1-style"
              color="red"
              tile
              width="auto"
              small
            >
              1
            </v-btn>
            <v-btn
              class="btn2-style"
              color="red"
              tile
              outlined
              width="auto"
              small
            >
              2
            </v-btn>
            <v-btn
              class="btn2-style"
              color="red"
              tile
              outlined
              width="auto"
              small
            >
              3
            </v-btn>
            <span>Next</span>
          </p>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchFees: null,
      rows: [
        { id: 1, name: 'Creche Fees', feesType: 'Feeding Fee - GHS200.00\nMaintenance - GHS100.00\nTuition - GHS350.00', description: 'To be paid every semester' },
        { id: 2, name: 'Nurse Fee Group', feesType: 'Feeding Fee - GHS15.00\nMaintenance - GHS100.00\nTuition - GHS450.00', description: 'To be paid every semester' },
        { id: 3, name: 'Kindeergarten Fee Group', feesType: 'Feeding Fee - GHS180.00\nMaintenance - GHS120.00\nTuition - GHS500.00', description: 'To be paid every semester' },
        { id: 4, name: 'Class 1 Fee Group', feesType: 'Feeding Fee - GHS100.00\nPTA - GHS150.00\nComputer Fees - GHS150.00\nTuition - GHS500.00', description: 'To be paid every semester' },
        { id: 5, name: 'Class 2 Fee Group', feesType: 'Feeding Fee - GHS100.00\nPTA - GHS150.00\nComputer Fees - GHS150.00\nTuition - GHS500.00', description: 'To be paid every semester' }
      ],
      headers: [
        { label: 'No.', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Fees Type', key: 'feesType' },
        { label: 'Description', key: 'description' }
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

.h2-style {
  padding-top: 82px;
  padding-left: 51px;
  padding-bottom: 10px;
  font-size: 30px;
}

.p-style {
  padding-left: 51px;
  padding-bottom: 23px;
}

.h3-style {
  padding-top: 5px;
  padding-bottom: 20px;
  font-size: 20px;
}

.icon-text-row {
  display: flex;
  align-items: center;
}

.icono-lista {
  margin-right: 8px;
  font-size: 24px;
  color: black;
}

.icono-pencil {
  margin: 0 8px;
  font-size: 24px;
  color: black;
}

.search-fees {
  padding-right: 15px;
}

.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th, .custom-table td {
  border: 2px solid black;
  padding: 10px;
}

.custom-table th {
  text-align: left;
  font-size: 20px;
  padding-top: 25px;
  height: 70px;
}

.custom-table td {
  height: 150px;
}

.custom-table th:nth-child(1), .custom-table td:nth-child(1) {
  width: 10%;
  text-align: center;
  font-size: 20px;
}

.custom-table th:nth-child(2), .custom-table td:nth-child(2) {
  width: 40%;
  vertical-align: text-top
}

.custom-table th:nth-child(3), .custom-table td:nth-child(3) {
  width: 30%;
  vertical-align: text-top
}

.custom-table th:nth-child(4), .custom-table td:nth-child(4) {
  width: 20%;
  vertical-align: text-top
}

.custom-table tr:nth-child(2), .custom-table tr:nth-child(3), .custom-table tr:nth-child(4), .custom-table tr:nth-child(5) {
  height: 150px;
}

.pre-style {
  padding-top: 75px;
  padding-left: 800px;
  color: grey;
}

.btn1-style {
  color: white;
}

.btn2-style {
  color: black;
}
</style>
