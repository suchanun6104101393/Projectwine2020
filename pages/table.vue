<template>
  <div>
    <h1 align="center">ORDER LIST</h1>
    <v-data-table
      :headers="this.$store.state.headers"
      :items="(this.data = data)"
      class="elevation-1"
    />
    <nuxt-link to="/payment">
      <v-btn block color="grey darken-4" dark> CONFIRM ORDERS </v-btn>
    </nuxt-link>
  </div>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      data: [],
      headers: [],
    }
  },
  mounted() {
    this.data = this.$store.state.data
    this.header = this.$store.state.headers
  },
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
            data.push(doc.data())
          })
          this.data = data
        })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url('https://cdn.pixabay.com/photo/2020/05/04/09/02/wine-5128360_960_720.jpg?fbclid=IwAR3zrtRbip-gb9FHrDDK14Q-zgYYl7-UdpNRPGz1kf7tzx8BQF9cC1Hp5M8');
  background-size: cover;
}
</style>
