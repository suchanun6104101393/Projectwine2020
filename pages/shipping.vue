<template>
  <div>
    <h1 class="text-center">SHIPPING</h1>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Full Name"
              placeholder=""
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              label="Address Line"
              placeholder=""
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              label="City"
              placeholder=""
              required
            ></v-text-field>
            <v-autocomplete
              ref="country"
              v-model="country"
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              label="Province"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-text-field
              ref="zip"
              v-model="zip"
              label="ZIP / Postal Code"
              required
            ></v-text-field>
            <v-text-field
              ref="call"
              v-model="call"
              label="Call"
              required
              placeholder=""
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>
            <nuxt-link to="/thankyou">
              <v-btn color="primary" text @click="submit"> Submit </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data: () => ({
    addressCheck: '',
    country: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    call: '',
    errorMessages: '',
    countries: [
      'กระบี่',
      'กาญจนบุรี',
      'กาฬสินธุ์',
      'กำแพงเพชร',
      'ขอนแก่น',
      'จันทบุรี',
      'ฉะเชิงเทรา',
      'ชลบุรี',
      'ชัยนาท',
      'ชัยภูมิ',
      'ชุมพร',
      'เชียงราย',
      'เชียงใหม่',
      'ตรัง',
      'ตราด',
      'ตาก',
      'นครนายก',
      'นครปฐม',
      'นครพนม',
      'นครราชสีมา',
      'นครศรีธรรมราช',
      'นครสวรรค์',
      'นนทบุรี',
      'นราธิวาส',
      'น่าน',
      'บึงกาฬ',
      'บุรีรัมย์',
      'ปทุมธานี',
      'ประจวบคีรีขันธ์',
      'ปราจีนบุรี',
      'ปัตตานี',
      'พระนครศรีอยุธยา',
      'พะเยา',
      'พังงา',
      'พัทลุง',
      'พิจิตร',
      'พิษณุโลก',
      'เพชรบุรี',
      'เพชรบูรณ์',
      'แพร่',
      'ภูเก็ต',
      'มหาสารคาม',
      'มุกดาหาร',
      'แม่ฮ่องสอน',
      'ยโสธร',
      'ยะลา',
      'ร้อยเอ็ด',
      'ระนอง',
      'ระยอง',
      'ราชบุรี',
      'ลพบุรี',
      'ลำปาง',
      'ลำพูน',
      'เลย',
      'ศรีสะเกษ',
      'สกลนคร',
      'สงขลา',
      'สตูล',
      'สมุทรปราการ',
      'สมุทรสงคราม',
      'สมุทรสาคร',
      'สระแก้ว',
      'สระบุรี',
      'สิงห์บุรี',
      'สุโขทัย',
      'สุพรรณบุรี',
      'สุราษฎร์ธานี',
      'สุรินทร์',
      'หนองคาย',
      'หนองบัวลำภู',
      'อ่างทอง',
      'อำนาจเจริญ',
      'อุดรธานี',
      'อุตรดิตถ์',
      'อุทัยธานี',
      'อุบลราชธานี',
    ],
  }),
  methods: {
    submit() {
      const dataText = {
        name: this.name,
        address: this.address,
        city: this.city,
        zip: this.zip,
        call: this.call,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('ShippIng')
        .doc(this.name)
        .set(dataText)
        .then(function () {
          // eslint-disable-next-line no-console
          console.log('Document successfully written! -> dataTable')
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error)
        })
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
h1 {
  font-family: 'Itim', cursive;
}
.theme--dark.v-application {
  background-image: url('https://cdn.pixabay.com/photo/2020/05/04/09/02/wine-5128360_960_720.jpg?fbclid=IwAR3zrtRbip-gb9FHrDDK14Q-zgYYl7-UdpNRPGz1kf7tzx8BQF9cC1Hp5M8');
  background-size: cover;
}
</style>
