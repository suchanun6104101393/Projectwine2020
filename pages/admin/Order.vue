<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          Order
          <v-spacer />
          <v-text-field
            v-model="searchInput"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="dataTable"
          :search="searchInput"
          class="elevation-1"
        />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  layout: 'admin',
  data: () => ({
    searchInput: '',
    dataTable: [],
    headers: [
      {
        text: 'name',
        align: 'start',
        sortable: false,
        value: 'Order',
      },
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'Order',
      },
    ],
  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('Order')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data())
            data.push(doc.data())
          })
          this.dataTable = data
        })
    },
  },
}
</script>
