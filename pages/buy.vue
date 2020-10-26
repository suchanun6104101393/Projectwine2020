<template>
  <v-row>
    <v-card class="mx-auto" width="500">
      <v-card-title> WINE YOU WANT </v-card-title>
      <v-radio-group v-model="Wine" column>
        <v-radio label="Santa Helena" value="Santa Helena"></v-radio>
        <v-radio label="Yering" value="Yering"></v-radio>
        <v-radio label="Castello Banfi" value="Castello Banfi"></v-radio>
        <v-radio label="ANTINORI" value="ANTINORI"></v-radio>
        <v-radio label="LUNGAROTTI" value="LUNGAROTTI"></v-radio>
        <v-radio label="ROBERT MONDAVI" value="ROBERT MONDAVI"></v-radio>
        <v-radio label="RADIKON" value="RADIKON"></v-radio>
        <v-radio label="PRIMOSIC" value="PRIMOSIC"></v-radio>
        <v-radio label="QUADY" value="QUADY"></v-radio>
        <v-radio label="WARRE S" value="WARRE S"></v-radio>
        <v-radio label="DOW S" value="DOW S"></v-radio>
        <v-radio label="ESTRELLA" value="ESTRELLA"></v-radio>
        <v-radio label="MICHEL LYNCH" value="MICHEL LYNCH"></v-radio>
        <v-radio label="BATASIOLO" value="BATASIOLO"></v-radio>
      </v-radio-group>
      <hr />
      <v-card-title> SIZE </v-card-title>
      <v-radio-group v-model="size" row>
        <v-radio label="[S] 700.00 Bath" value="700.00 Bath"></v-radio>
        <v-radio label="[L] 1000.00 Bath" value="1000.00 Bath"></v-radio>
      </v-radio-group>
      <v-btn color="success" class="mr-4" @click="addData"> SUBMIT </v-btn>
      <nuxt-link to="/table">
        <v-btn color="success" dark> NEXT </v-btn>
      </nuxt-link>
    </v-card>
  </v-row>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      Wine: 'null',
      size: 'null',
    }
  },
  methods: {
    addData() {
      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        Wine: this.Wine,
        size: this.size,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('Order')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
        .then(function () {
          alert('สั่งซื้อสำเร็จ')
        })
    },
    reset() {},
  },
}
</script>
