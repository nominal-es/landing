<template>
  <v-app>
    <v-toolbar color="black" title="NOMINAL" app>
      <v-spacer />
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn :rounded="0" href="https://grifpkg.com" color="red" variant="text">
          GRIFPKG
        </v-btn>
        <v-btn :rounded="0" href="https://purecore.io" color="red" variant="text">
          PURECORE
        </v-btn>
        <v-btn :rounded="0" href="https://discord.gg/wUtrrHH6qx" color="red" variant="flat">
          DISCORD
        </v-btn>
      </template>
    </v-toolbar>
    <v-main>
      <v-sheet color=red class="mb-10" style="height:400px; position:relative;width:100%;overflow:hidden">
        <Gradient style="position:absolute;top:0px;left:0px;z-index: 0;" />
        <div style="position:absolute;width:100%;height:100%;left:0px;top:0px;" class="px-5">
          <v-row align="center" justify="center" class="fill-height mb-0">
            <v-col class="text-center">
              <h1 class="title">EMPOWERING THE INTERNET</h1>
              <h3 class="title">DEVELOP・DEPLOY・STUDY</h3>
            </v-col>
          </v-row>
        </div>
      </v-sheet>
      <v-container>
        <v-card variant="outlined" :rounded="0" title="grifpkg" color="red" class="mb-10">
          <div class="px-4 mb-3">
            <b><u>the</u> package manager for gaming services</b>, allowing people to build their online community from
            the ground up, with easy to install plugins for their favourite games and management softwares. Thanks to
            our fully functional package manager, we can also build other software suites around it, such as server
            bench, which allows <b>easy creation, debuging and deployment of online game content to various cloud
              providers, for example, our own, purecore hosting</b>. In addition to offer software content from the most
            popular libraries, we also have our <b>own public software library, which also features monetization and
              advertising of independently developed game content and various plugins</b>.
          </div>
        </v-card>
        <v-card variant="outlined" :rounded="0" title="purecore" color="red">
          <div class="px-4 mb-3">
            <b>a kickass cloud provider with record pricing for compute and storage intensive workloads</b>, mainly
            online gaming communities. it has everything you need in order to build your community from the ground
            up: local build tools provided by grifpkg, <b>hosting, analytics, and monetization</b>. Our hosting
            services can be extremely customized to balance and handle every possible load at the best price possible;
            we even allow self-hosting and remote management using purecore dashboard. You can record and study player
            behavior to improve engagement and revenue, with extremely advanced and complete monetization options.
          </div>
        </v-card>
      </v-container>
      <v-footer absolute class="mt-10" color="red-darken-3">
        <v-container class="text-center py-1" style="width:100%">
          &copy; nominal S.L {{new Date().getFullYear()}}. Barcelona, Spain
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<style>
.v-container{
  max-width:900px
}
.v-card {
  text-align: justify;
  line-height: 26px;
}
</style>


<script>
import "./style.css"
import HelloWorld from './components/HelloWorld.vue'
import Gradient from "./components/Gradient.vue";

export default {
  name: 'App',

  components: {
    HelloWorld,
    Gradient
  },

  data: () => ({
    //
  }),
}
</script>
