<template>
  <v-app>
    <v-main>
      <Menu />
        <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
