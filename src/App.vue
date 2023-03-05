<template>
  <v-app>
    <v-app-bar>
      <v-col cols="auto">
        <v-app-bar-title style="font-weight: 900;">
          <v-icon icon="mdi-atom" />nominal
        </v-app-bar-title>
      </v-col>
      <v-col>
        empowering the internet
      </v-col>
      <v-spacer />
      <v-btn theme="dark" variant="flat" color="#5865F2" prepend-icon="fa:fab fa-discord" to="/discord">
        Discord
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app absolute class="py-10">
      <div class="text-center" style="margin:auto;padding-top:100px">
        <p>© nominal SL {{ new Date().getFullYear() }}. Barcelona, Spain</p>
        <h2 class="mt-5"><v-icon icon="mdi-atom" />nominal</h2>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {

};
</script>