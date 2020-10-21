<template>
  <div>
    <h1 align="center">ORDER LIST</h1>
    <v-data-table
      :headers="this.$store.state.headers"
      :items="this.$store.state.data"
      class="elevation-1"
    />
    <nuxt-link to="/payment">
      <v-btn block color="grey darken-4" dark> CONFIRM ORDERS </v-btn>
    </nuxt-link>
  </div>
</template>
