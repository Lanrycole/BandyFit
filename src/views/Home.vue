<template>
  <div class="home">

    <div id="landing-page">

      <div class="landing-text">
        <div id="secondary-text">
          <div id="img">
            <img src="../assets/logos.png" alt="" width="300px" height="300px">
          </div>
        </div>
      </div>


      <div class="landing-image">
        <img :src="images.suit" alt="">

        <h4 data-aos="flip-up" data-aos-duration="3000">
          Discover <span id="discoverFashion">Fashion </span></h4>
        <p>....Where your fashion is defined</p>
      </div>
    </div>

    <div id="main-body">
      <div id="brand-Name-logo">
        <img :src="images.brandName" alt="">
      </div>

      <div id="brand-quote" data-aos="zoom-out" data-aos-duration="3000">
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="40" height="40"
               viewBox="0 0 172 172"
               style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
               stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
               font-family="none"  style="mix-blend-mode: normal">
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#b98f09">
                <path
                    d="M46.00104,22.88854c-1.29036,-0.01759 -2.54892,0.40062 -3.57214,1.18698c0,0 -25.22891,19.243
                    -25.22891,56.19115v57.33333c0,6.33533 5.13133,11.46667 11.46667,11.46667h34.4c6.33533,0 11.46667,
                    -5.13133 11.46667,-11.46667v-45.86667c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667h-23.16849c-0.14249,
                    -10.20865 0.85671,-32.04355 10.68281,-48.30781c1.24187,-1.73529 1.41739,-4.01666 0.45557,-5.92149c-0.96182,
                    -1.90483 -2.90185,-3.11798 -5.03552,-3.14883zM126.26771,22.88854c-1.29036,-0.01759 -2.54892,0.40062 -3.57214,
                    1.18698c0,0 -25.22891,19.243 -25.22891,56.19115v57.33333c0,6.33533 5.13133,11.46667 11.46667,11.46667h34.4c6.33533,
                    0 11.46667,-5.13133 11.46667,-11.46667v-45.86667c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667h-23.16849c-0.14249,
                    -10.20865 0.85671,-32.04355 10.68282,-48.30781c1.24187,-1.73529 1.41739,-4.01666 0.45557,-5.92149c-0.96182,-1.90483
                    -2.90185,-3.11798 -5.03552,-3.14883z">

                </path>
              </g>
            </g>
          </svg>
          <br>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not

        </p>
      </div>

      <div class="cards">
        <div class="card" >
          <card :card-h3="card.styles" :card-text="card.cardText" :card-img="images.cardSuit1" effect="zoom-in" button-action="See More"></card>
        </div>
        <div class="card" data-aos-duration="3000">
          <card :card-h3="card.measurement" :card-text="card.cardText" :card-img="images.cardSuit2"
                effect="zoom-in"></card>
        </div>
        <div class="card">
          <card :card-h3="card.custom_fit" :card-text="card.cardText" :card-img="images.cardSuit3"
                effect="zoom-in" ></card>
        </div>
        <div class="card">
          <card :card-h3="card.ready_to_wear" :card-text="card.cardText" :card-img="images.cardSuit8"
                effect="zoom-in" ></card>
        </div>
      </div>
      <Button>
        <router-link to="/Gallery" v-scroll-to="'know-more'" class="router-link">
          See more
        </router-link></Button>
      <div>
      </div>

  <div class="about-us">
  <about :card-h3="card.Kola" effect1="zoom-in-down" effect2="zoom-in-up" card-h2="History" :card-img="images.bandy" :card-text="card.cardText"></about>
      </div>
      <div class="reviews">
        <reviews></reviews>
      </div>
    </div>
    <div class="contact-us">
      <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRk4rhLYWchZiEV0EvbWHgls35mA7nBkaukWXMaeW9dzMN-A/viewform?embedded=true"
          width="640" height="908" >Loading…
      </iframe>
    </div>
  </div>

</template>

<script>

import card from '@/components/card.vue';
import about from '@/components/ourHistory.vue';
import reviews from '@/components/ReviewCard.vue';

export default {
  components: {
    card,
    about,
    reviews,
  },
  data() {
    return {
      btnLabel: "Explore",

      images: {
        suit: require('../assets/suit2.jpg'),
        brandName: require('../assets/brandName.png'),
        cardSuit1: require('../assets/suit-card.jpg'),
        cardSuit2: require('../assets/suit-card2.jpg'),
        cardSuit3: require('../assets/suit-card3.jpg'),
        cardSuit4: require('../assets/suit-card4.jpg'),
        bandy: require('../assets/bandy2.png'),
        cardSuit6: require('../assets/suit-card6.jpg'),
        cardSuit7: require('../assets/suit-card7.jpg'),
        cardSuit8: require('../assets/suit-card8.jpg')
      },
      card: {
        measurement: ' Measurement',
        ready_to_wear: ' Ready to Wear',
        Kola: ' Kolawole Arifayan',
        styles: "Styles",
        custom_fit: 'Custom Fit',
        cardText: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
            'standard dummy text ever since the 1500s, when an unknown printer took ' +
            'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ' +
            'make a type specimen book. It has a galley of type and scrambled it to make a type specimen book. It has',
      },
    }
  },
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

@mixin Button{
  border-radius: 2em;
  color: $colorFill ;
  margin: 0 50px 120px 20px;
  padding: 12px;
  width: 12%;
  background: $secColor;
  cursor: pointer;
  .router-link{
    text-decoration: none;
    text-underline: none;
    color: $colorFill ;
    font-weight: bold;
  }

  &:hover{
    background: $accColor;
    color: $colorFill;
  }
}

$priColor: black;
$secColor: floralwhite;
$accColor: #b98f09;
$colorFill: #0e010a;

Button{
  text-align: center;
  @include Button;
}
.home {
  position: relative;
  background: black;


  #landing-page {
    display: flex;
    width: 100%;

    .landing-text {
      width: 20%;
      font-style: italic;
      text-align: center;

      color: $accColor;
      position: relative;

      #secondary-text {
        background: $priColor;
        position: relative;

        #img {
          position: absolute;
          top: 250px;
          opacity: 0.2;
        }
      }
    }

    .landing-image {
      width: 80%;
      position: relative;
      height: 100vh;

      img {
        top: 50px;
        width: 100%;
        height: 100vh;
      }

      h4 {
        position: absolute;
        top: 350px;
        left: 40px;
        font-size: 70px;
        color: $secColor;
        box-shadow: -0.8px 0px 2px $accColor;
        font-family: 'Montserrat', sans-serif;

        #discoverFashion {
          background: $accColor;

        }
      }

      p {
        position: absolute;
        top: 550px;
        left: 40px;
        font-size: 30px;
        font-family: 'Parisienne', cursive;
        color: $accColor;
        background: $secColor;
        padding: 20px;
        font-weight: bold;

      }
      #brandName {
        color: white;
      }
    }
  }
  #main-body {
    background: $priColor;

    #brand-Name-logo {
      opacity: 0.1;

      img {
        margin-top: 50px;
      }
    }

    #brand-quote {
      margin: 0 auto;
      width: 60%;

      p {
        font-family: 'Parisienne', cursive;
        text-align: center;
        color: $accColor;
        font-size: 30px;
        opacity: 0.7;
      }
    }

    .cards {
      margin: 20px 0 0 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

    }
  }
  .contact-us {
    background: url("../assets/logos.png") no-repeat;

  }
}


///////////////////////////////////////////////////////////
//Media Query max-width: 768px
@media only screen and (max-width: 768px) {
  Button {
    width: 70% !important;
    text-align: center;
    @include Button;
  }
  .home {

    #landing-page {
      flex-direction: column;
      .landing-text {
        display: none;
      }
      .landing-image {
        width: 100%;
        position: relative;
        height: 400px;
        margin-top: 80px;
        img {
          width: 100%;
          height: 400px;
        }

        h4 {
          position: absolute;
          top: 270px;
           margin:  0 auto;
          font-size:35px;
          #discoverFashion {
            background: $accColor;
          }
        }
        p {
          top: 330px;
          background: $secColor;
          padding: 10px;
          font-weight: bold;
          margin:  0 auto;
          font-size: 18px;
        }
      }
    }

    #main-body {
      background: $priColor;
      #brand-Name-logo {
        opacity: 0.1;
        img {
          margin-top: 10px;
          width: 96%;
        }
      }
      #brand-quote {
        margin: 0 auto;
        p {
          font-family: 'Parisienne', cursive;
          text-align: center;
          color: $accColor;
          margin: 0 auto;
          width: 100%;
          padding: 0px;
          opacity: 0.7;
          font-size: 22px;
        }
      }
      .cards {
        margin: 20px 0 0  0;
        display: grid;
        grid-template-columns: 1fr ;
      }
      .about-us{
        padding: 0;
        margin: 0;
        .about-us-image{
        }
      }
    }
    .contact-us {
      background: url("../assets/logos.png") no-repeat;
      iframe{
        width: 92%;
      }
    }
  }
}

//////////////////////////// Tablet
@media only screen and (min-width: 768.3px) and (max-width: 991.98px) {


  Button {
    width: 60% !important;
    text-align: center;
    @include Button;
  }
  .home {

    #landing-page {

      flex-direction: column;
      .landing-text {
        display: none;
      }
      .landing-image {
        width: 100%;
        position: relative;
        height: 600px;
        margin-top: 20px;
        img {
          width: 100%;
          height: 600px;
        }

        h4 {
          position: absolute;
          top: 270px;
          margin:  0 auto;
          font-size:35px;
          #discoverFashion {
            background: $accColor;
          }
        }
        p {
          top: 330px;
          background: $secColor;
          padding: 10px;
          font-weight: bold;
          margin:  0 auto;
          font-size: 18px;
        }
      }
    }

    #main-body {

      background: $priColor;
      #brand-Name-logo {
        opacity: 0.1;
        img {
          margin-top: 10px;
          width: 96%;
        }
      }
      #brand-quote {
        margin: 0 auto;
        p {
          font-family: 'Parisienne', cursive;
          text-align: center;
          color: $accColor;
          margin: 0 auto;
          width: 100%;
          padding: 0px;
          opacity: 0.7;
          font-size: 22px;
        }
      }
      .cards {
        margin: 20px 0 0  0;
        display: grid;
        grid-template-columns: 1fr ;
      }
      .about-us{
        padding: 0;
        margin: 0;
        .about-us-image{
        }
      }
    }
    .contact-us {
      background: url("../assets/logos.png") no-repeat;
      iframe{
        width: 92%;
      }
    }
  }
}

@media only screen and (min-width: 991.98px) and (max-width: 1318px) {

  .home {

    #landing-page {
      flex-direction: column;

      .landing-text {
        display: none;
      }

      .landing-image {
        width: 100%;
        position: relative;
        height: 600px;
        margin-top: 10px;
        img {
          width: 100%;
          height: 600px;
        }
        h4 {
          position: absolute;
          top: 270px;
          margin:  0 auto;
          font-size:35px;
          #discoverFashion {
            background: $accColor;
          }
        }
        p {
          top: 330px;
          background: $secColor;
          padding: 10px;
          font-weight: bold;
          margin:  0 auto;
          font-size: 18px;
        }
      }
    }

    #main-body {
      background: $priColor;

      #brand-Name-logo {
        opacity: 0.1;

        img {
          margin-top: 10px;
          width: 96%;
        }
      }

      #brand-quote {
        margin: 0 auto;

        p {
          font-family: 'Parisienne', cursive;
          text-align: center;
          color: $accColor;
          margin: 0 auto;
          width: 100%;
          padding: 0;
          opacity: 0.7;
          font-size: 22px;
        }
      }

      .cards {
        margin: 20px 0 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .about-us {
        padding: 0;
        margin: 0;

        .about-us-image {
        }
      }
    }

    .contact-us {
      background: url("../assets/logos.png") no-repeat;

      iframe {
        width: 92%;
      }
    }
  }
}
@media only screen and (min-width: 1314px) and (max-width: 1666px) {
  .home{
    #main-body{
      .cards {
        margin: 5px 0 0 0;

        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      #brand-Name-logo{
        img{
          width: 100%;
        }

      }
    }
  }

}
</style>