<template>
  <div>
    <h1 align="center">PAYMENT</h1>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Bank"
              required
            />
            <v-text-field
              ref="Username"
              v-model="Username"
              :rules="[() => !!Username || 'This field is required']"
              :error-messages="errorMessages"
              label="Username"
              placeholder=""
              required
            />
            <v-text-field
              ref="Paymentamount"
              v-model="Paymentamount"
              label="Payment amount"
              placeholder=""
              required
            />
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Picker in time"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an slip"
              prepend-icon="mdi-camera"
              label="Proof of payment"
            />
          </v-card-text>
          <v-divider class="mt-12" />
          <v-card-actions>
            <nuxt-link to="/wine">
              <v-btn text> Cancel </v-btn>
            </nuxt-link>
            <v-spacer />
            <nuxt-link to="/shipping">
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
    time: null,
    menu2: false,
    modal2: false,
    select: null,
    items: [
      'ธนาคารไทยพาณิชย์  [6104101340] ชื่อบัญชี ธวัชชัย ไถหว่าน',
      'ธนาคารกสิกร  [6104101393] ชื่อบัญชี สุชานันท์ วรรณภิญโญ',
      'ธนาคารกรุงไทย  [6104101397] ชื่อบัญชี สุพิชญา แก้วสุดใจ',
      'ธนาคารออมสิน [6104101396] ชื่อบัญชี สุธิดา ยานะโส',
      'ธนาคารกรุงศรี  [6104101315] ชื่อบัญชี ชนะพล รัตนพงค์',
    ],
  }),
  methods: {
    submit() {
      const dataText = {
        select: this.select,
        Username: this.Username,
        Paymentamount: this.Paymentamount,
        time: this.time,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('Payment')
        .doc(this.Username)
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


name: '',
      lastname: '',
      code: '',
      column: '',
      brand: '',
      price: '',