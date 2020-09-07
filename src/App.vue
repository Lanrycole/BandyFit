<template>
  <div id="app" v-cloak+++++++++++++++++++++++>
    <div class="navigation-icon" v-if="mobileView <768">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="64" height="64"
           viewBox="0 0 172 172"
           @click="showNav=!showNav"
           style=" fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
           stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
           font-size="none" text-anchor="none" style="mix-blend-mode: normal">
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g>
            <path
                d="M86,18.8125c-37.10663,0 -67.1875,30.08087 -67.1875,67.1875c0,37.10663 30.08087,67.1875 67.1875,67.1875c37.10663,0 67.1875,-30.08087 67.1875,-67.1875c0,-37.10663 -30.08087,-67.1875 -67.1875,-67.1875z"
                fill="#ffffff"></path>
            <path
                d="M86,157.21875c-39.2375,0 -71.21875,-31.98125 -71.21875,-71.21875c0,-39.2375 31.98125,-71.21875 71.21875,-71.21875c39.2375,0 71.21875,31.98125 71.21875,71.21875c0,39.2375 -31.98125,71.21875 -71.21875,71.21875zM86,22.84375c-34.80312,0 -63.15625,28.35313 -63.15625,63.15625c0,34.80313 28.35313,63.15625 63.15625,63.15625c34.80313,0 63.15625,-28.35312 63.15625,-63.15625c0,-34.80313 -28.35312,-63.15625 -63.15625,-63.15625z"
                fill="#444b54"></path>
            <path
                d="M116.23438,69.875h-60.46875c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125h60.46875c2.28437,0 4.03125,1.74687 4.03125,4.03125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125zM116.23438,90.03125h-60.46875c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h60.46875c2.28437,0 4.03125,1.74688 4.03125,4.03125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125z"
                fill="#444b54"></path>
            <g fill="#444b54">
              <path
                  d="M116.23438,110.1875h-60.46875c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h60.46875c2.28437,0 4.03125,1.74688 4.03125,4.03125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125z"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <DesktopNavBar v-if="mobileView>768"/>
    <transition
        mode="out-in"
        enter-active-class="animate__animated  animate__backInDown"
        leave-active-class="animate__animated  animate__backOutUp">
      <mobile-nav v-if="showNav && mobileView<768"/>
    </transition>

    <transition
        mode="out-in"
        enter-active-class="animate__animated  animate__pulse" style="background: #b98f09">
      <router-view/>
    </transition>

    <Footer></Footer>
  </div>
</template>
<script>

import DesktopNavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import mobileNav from './components/MobileNavBar.vue';

export default {
  components: {
    DesktopNavBar,
    Footer,
    mobileNav,
  },
  data() {
    return {
      mobileView: 0,
      showNav: false,
    }

  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth;
    }

  },

  created() {
    this.handleView();

  },

}

</script>
<style lang="scss">

$priColor: black;
$secColor: floralwhite;
$accColor: #b98f09;
$colorFill: #0e010a;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $priColor;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  .navigation-icon {
    position: fixed;
    width: 100%;
    z-index: 9999999999999;
    text-align: end;
    background: $priColor;
    cursor: pointer;
    padding: 20px 20px 10px 0px;

  }
}

.slide-right {
  transform: translateX(300px);
}

body {
  margin: 0;
  padding: 0;
  z-index: -1;
}

.animate__animated {
  z-index: 999999999;
}


@media only screen and (max-width: 768.2px) {
  /* For mobile phones: */

  .navigation-icon {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999999999999;
    text-align: end;
    background: $priColor;
    cursor: pointer;
    padding: 5px;

  }

}

@media only screen and (min-width: 768.3px) and (max-width: 991.98px) {
  .navigation-icon {
    display: none;

  }
}
</style>
