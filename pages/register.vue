<template>
  <div>
    <h1 align="center">MEMBER</h1>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <h4>Name</h4>
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <h4>Last Name</h4>
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Last Name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <h4>Email</h4>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <h4>Create Password</h4>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'Password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <h4>Confirm Password</h4>
                <v-text-field
                  v-model="Cpassword"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'Password'"
                  name="input-10-1"
                  label="Confirm Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <h4>Phone Number</h4>
                <v-text-field
                  v-model="call"
                  :rules="callRules"
                  label="Phone number"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <h4>Birth Day</h4>
                <v-text-field
                  v-model="Birth"
                  :rules="birthlRules"
                  label="DD/MM/YY"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <h4>Age</h4>
                <v-text-field v-model="Age" label="Age" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <h4>ID Card Number</h4>
                <v-text-field
                  v-model="IDCardNumber"
                  label="ID Card Number"
                  required
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-spacer></v-spacer>
                <nuxt-link to="/login">
                  <v-btn outlined rounded text block> SUBMIT </v-btn>
                </nuxt-link>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      Cpassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
}
</script>
