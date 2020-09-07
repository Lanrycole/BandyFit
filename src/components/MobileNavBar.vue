<template>

  <div class="navDiv">
    <div id="logo">
      <img src="../assets/logo.png" width="120px" height="100px" alt="bandLogo">
      <!--      <span id="brandName"> <img :src="images.brandName" alt="" width="230px" height="50px"></span>-->
    </div>

<!--    <transition-->
<!--        mode="out-in"-->
<!--        enter-active-class="animate__animated  animate__pulse"  style="background: #b98f09">-->
<!--      <router-view/>-->
<!--    </transition>-->
<!--    -->

    <div id="nav" >
      <ul>
        <li>
          <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="router-link" exact>About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Gallery' }" class="router-link" exact>Gallery</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" class="router-link" exact>Contact</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name:"Mobile NavBar",

  data() {
    return {
      images: {
        brandName: require('../assets/brandName.png'),
      },

    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:wght@300;500&family=Montserrat:wght@700&family=Raleway:wght@400;600&display=swap');

$priColor: black;
$secColor: #ffffff;
$accColor: #b98f09;
$colorFill: #0e010a;

.body, html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

.navDiv {
  display: grid;
  z-index: 9999999999;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  letter-spacing: 4px;
ul{

  li{
    list-style: none;
    text-align: start;
    font-weight: bolder;
    padding: 10px;
    font-family: 'Raleway', sans-serif;  cursor: pointer;

  }
}
  #logo {
    text-align: start;
    margin: 0;
    padding: 0;
    #brandName{
      margin-left: 30px;
    }
  }

  #nav {
    text-align: center;
    padding: 5px;

  }

}

@media only screen and (max-width: 768px) {

  .navDiv{
    position: fixed;
    top: 80px;
  }
}

</style>