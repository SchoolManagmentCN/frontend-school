<template>
  <v-container>
    <v-card class="pa-4">
      <v-row>
        <!-- Imagen del padre/madre en forma circular -->
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-img
            src=""
            alt="Parent Image"
            class="parent-image"
            contain
            height="200px"
            width="200px"
          />
        </v-col>

        <!-- Información del padre/madre -->
        <v-col cols="8">
          <div class="text-h5 font-weight-bold">
            {{ parent.name }}
          </div>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>

          <!-- Información detallada del padre/madre -->
          <v-row>
            <v-col cols="4">
              <strong>ID:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.id }}
            </v-col>

            <v-col cols="4">
              <strong>Name:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.name }}
            </v-col>

            <v-col cols="4">
              <strong>Gender:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.gender === 'M' ? 'Male' : 'Female' }}
            </v-col>

            <v-col cols="4">
              <strong>Occupation:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.occupation }}
            </v-col>

            <v-col cols="4">
              <strong>Address:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.address }}
            </v-col>

            <v-col cols="4">
              <strong>Email:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.email }}
            </v-col>

            <v-col cols="4">
              <strong>Phone:</strong>
            </v-col>
            <v-col cols="8">
              {{ parent.phone }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    parentId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      parents: [
        { id: 1, name: 'John Doe', gender: 'M', occupation: 'Engineer', address: '123 Elm St', email: 'john.doe@mail.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', gender: 'F', occupation: 'Teacher', address: '456 Oak St', email: 'jane.smith@mail.com', phone: '234-567-8901' },
        { id: 3, name: 'Alice Brown', gender: 'F', occupation: 'Doctor', address: '789 Pine St', email: 'alice.brown@mail.com', phone: '345-678-9012' },
        { id: 4, name: 'Bob Johnson', gender: 'M', occupation: 'Business Owner', address: '101 Maple St', email: 'bob.johnson@mail.com', phone: '456-789-0123' }
      ]
    }
  },
  computed: {
    parent () {
      return this.parents.find(parent => parent.id === this.parentId) || {}
    }
  }
}
</script>

<style scoped>
.parent-image {
  border-radius: 50%; /* Hace que la imagen sea circular */
  object-fit: cover;
  background-color: #f0f0f0;
}
</style>
