<template>
  <v-card class="mx-auto" width="500" height="700" outlined>
    <h1 align="center">Register</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="name" name="input-10-1" label="ชื่อ">
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="lastname" name="input-10-1" label="นามสกุล">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="birth"
            name="input-10-1"
            label="วัน/เดือน/ปีเกิด"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="ID"
            name="input-13"
            label="เลขประจำตัวประชาชน 13 หลัก"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="email" name="input-10-1" label="Email">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="user" name="input-10-1" label="User  Name">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            block
            elevation="2"
            large
            x-small
            color="brown darken-4"
            @click="singup"
            >SUBMIT</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
import 'firebase/auth'
export default {
  data() {
    return {
      show1: false,
      email: '',
      password: '',
      error: '',
      user: '',
      name: '',
      lastname: '',
      birth: '',
      ID: '',
    }
  },
  methods: {
    singup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error
          alert(error)
          this.$router.push('/')
        })
      /* eslint no-var: */
      var data = {
        email: this.email,
        user: this.user,
        name: this.name,
        lastname: this.lastname,
        birth: this.birth,
        ID: this.ID,
      }
      db.collection('User')
        .doc(this.email)
        .set(data)
        .then(function () {
          alert('สมัครสมาชิกสำเร็จ กรุณาลงชื่อเข้าใช้')
        })
    },
  },
}
</script>
