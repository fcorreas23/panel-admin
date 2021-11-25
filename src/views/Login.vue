<template>
  <div class="login">
      <v-card class="elevation-12 mx-auto my-12" max-width="505">
          <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
              <v-form ref="form" v-model="form">
                  <v-text-field
                    label="Email"
                    type="email"
                    v-model="user.email"
                    prepend-icon="mdi-account"
                    :rules="[rules.email, rules.required]"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="user.password"
                    prepend-icon="mdi-lock"
                    :rules="[rules.required]"
                  ></v-text-field>
              </v-form>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!form"
                @click="login"
                dark
              >Login</v-btn>
          </v-card-actions>
      </v-card>

  </div>
</template>

<script>
export default {
   data() {
       return {
           form: false,
           error: false,
           user: {
               email: '',
               password: ''
           },
           rules : {
               email: v => !!( v || '').match(/@/) || 'Please enter a valid email',
               required: v => !!v || 'This field is required'
           },
           message: ''
       }
   },

   methods: {
       async login() {
           //alert("LOGIN")
           try {
               /* let res = await */
           } catch (error) {
               
           }
       }
   },

}
</script>

<style>

</style>