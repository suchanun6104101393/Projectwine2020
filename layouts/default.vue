<template>
  <v-app dark>
    <v-main>
      <v-toolbar dense>
        <v-toolbar-title>WINE STORE</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn color="indigo darken-1" v-show="login" to="/SignIn"
          >Signin</v-btn
        >
        <v-btn color="deep-purple darken-1" v-if="!login" @click="signOut"
          >Signout</v-btn
        >
        <v-btn color="lime darken-4" to="/SignUp">Signup</v-btn>
      </v-toolbar>

      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import firebase from 'firebase'
require('firebase/auth')
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
  computed: {
    login: {
      get() {
        return this.$nuxt.$store.state.login
      },
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          this.$store.commit('login', true)
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
