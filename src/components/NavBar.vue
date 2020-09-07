<template>

  <div class="navDiv">
    <div id="logo">
      <img src="../assets/logo.png" width="120px" height="100px" alt="bandLogo">
      <!--      <span id="brandName"> <img :src="images.brandName" alt="" width="230px" height="50px"></span>-->
    </div>
    <div id="nav">
      <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
      |
      <router-link :to="{ name: 'About' }" class="router-link" exact>About</router-link>
      |
      <router-link :to="{ name: 'Gallery' }" class="router-link" exact>Gallery</router-link>
      |
      <router-link :to="{ name: 'Contact' }" class="router-link" exact>Contact</router-link>


    </div>
    <!--    <div id="shop-products">-->
    <!--      <div id="shop-link">-->
    <!--        <router-link :to="{ name: 'ourHistory' }" class="router-link">Shop Products</router-link>-->
    <!--      </div>-->
    <!--      <div id="shop-arrow" >-->
    <!--        <span ><img src="../assets/right-arrow.png" alt=""></span>-->

    <!--      </div>-->
    <!--    </div>-->
  </div>

</template>

<script>

export default {
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');


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
  background: $priColor;
  display: grid;
  padding-top: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-family: 'Raleway', sans-serif;


  #logo {
    text-align: start;
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 0;
    padding: 0;

    #brandName {
      margin-left: 30px;

    }
  }

  #nav {
    grid-column-start: 2;
    grid-column-end: 4;
    text-align: center;
    padding: 30px;
    margin-top: 40px;

    .router-link {
      color: $secColor;
      text-decoration: none;
      margin: 20px 20px 20px 20px;
      font-size: 20px;

    }

    .router-link-active {
      color: #b98f09;
    }
  }


}

@media only screen and (min-width: 768.3px) {
  body {

    .navDiv {
      background: $priColor;
      display: flex;
      padding-top: 10px;

      #logo {
        width: 20%;
        margin: 0;
        padding: 0;

      }

      #nav {
        width: 80%;

        .router-link {
          //display: inline-block;


          margin: 0;
          font-size: 20px;

        }

      }


    }
  }
}

</style>