<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="array"
      :items-per-page="100"
      class="elevation-1"
    />
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  layout: 'admin',
  data: () => ({
    dataTable: [{}],
    array: [],
    headers: [
      {
        text: 'name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      {
        text: 'Quantity',
        align: 'start',
        sortable: false,
        value: 'qty',
      },
      {
        text: 'Total',
        align: 'start',
        sortable: false,
        value: 'total',
      },
    ],
  }),
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const p = []
      db.collection('Order')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data())
            data.push(doc.data())
          })
          this.dataTable = data
          for (let i = 0; i < this.dataTable.length; i++) {
            this.array = this.dataTable[i].Order
            for (let i = 0; i < this.array.length; i++) {
              p.push(this.array[i])
              this.array = p
              break
            }
          }
        })
    },
  },
}
</script>
