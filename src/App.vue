<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-row align="center" class="px-4">
          <v-col cols="auto">
            <v-app-bar-title style="font-weight: 900;">
              <v-icon icon="mdi-atom" />nominal
            </v-app-bar-title>
          </v-col>
          <v-col v-if="!$vuetify.display.mobile">
            empowering the internet
          </v-col>
          <v-spacer v-else />
          <v-col cols="auto">
            <v-btn v-if="$vuetify.display.mdAndUp" theme="dark" variant="tonal" color="primary"
              prepend-icon="fa:fab fa-discord" to="/discord">
              Discord
            </v-btn>
            <v-btn size="small" v-else theme="dark" variant="tonal" color="primary" icon="fa:fab fa-discord"
              to="/discord" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="transparent" app absolute>
      <div class="text-center mt-10" style="margin:auto;">
        <h2 class="mb-3 hero"><v-icon icon="mdi-atom" />nominal</h2>
        <p class="mb-7">© nominal SL {{ new Date().getFullYear() }}. Barcelona, Spain</p>
        <p class="mb-7">
          <v-btn @click="toggleTheme()" size="small" variant="tonal" icon="mdi-brightness-6"/>
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  beforeMount(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      this.$vuetify.theme.name='dark'
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.$vuetify.theme.name = e.matches ? "dark" : "light";
    });
  },
  methods:{
    toggleTheme(){
      this.$vuetify.theme.name = this.$vuetify.theme.name == 'light' ? "dark" : "light";
    }
  }
};
</script>