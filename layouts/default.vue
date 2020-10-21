<template>
  <v-app dark>
    <v-main>
      <v-toolbar dense>
        <v-toolbar-title>WINE STORE</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/SignIn" icon> <v-icon>mdi-login</v-icon> </v-btn>login
        <v-btn to="/SignUp" icon> <v-icon>mdi-account-circle</v-icon> </v-btn
        >Register
      </v-toolbar>

      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-archive  ',
          title: 'index1',
          to: '/',
        },
        {
          icon: 'mdi-cart-check',
          title: 'Orderlist',
          to: '/orderlist',
        },
        {
          icon: 'mdi-wallet',
          title: 'Payment',
          to: '/payment',
        },
        {
          icon: 'mdi-truck',
          title: 'Shipping',
          to: '/shipping',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WINE STORE',
    }
  },
}
</script>
