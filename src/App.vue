<template>
  <v-app>
    <v-app-bar
      app
      color="#0d0d11"
      dark
      height="94"
      flat
      class="custom-navigation"
    >
      <TheNavigation />
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    TheNavigation: () => import('@/components/layouts/TheNavigation')
  }
}
</script>
