<template>
  <div class="about-us ">
    <div class="about-us-image" :data-aos="effect1">
      <img :src="cardImg" alt="">
      <br>
      <h4>{{ cardH3 }}</h4>
    </div>
    <div class="about-us-text" :data-aos="effect2">
      <h2>{{cardH2}}</h2>
      <p>
      {{cardText}}
      </p>

    </div>

  </div>
</template>

<script>
export default {
name: "History",
  props: {
    cardH3: {
      h3Text: String,
      required: false
    },
      cardH2: {
      h3Text: String,
      required: false
    },

    cardText: {
      type: String,
      required: false,

    },
    effect1: String,
    effect2: String,

    cardImg: {
      image: Image,
      required: false
    },

  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

$priColor: black;
$secColor: floralwhite;
$accColor: #b98f09;
$colorFill: #0e010a;


img{
  height: 400px;
  width: 350px;
}
.about-us {
  display: flex;
  width: 100%;
  background: $colorFill;
  justify-content: center;

  .about-us-image {
      width: 35%;
    padding: 20px;
  img{
    //box-shadow: 5px 10px 18px $accColor;
    transform: scale(1.04);
    border-radius: 2em;
    width: 350px;
  }

    h4 {
      font-size: 40px;
      font-weight: bolder;
      color: $accColor;
      text-align: center;
    }

  }

  .about-us-text {
    width: 60%;
    text-align: start;

    h2 {
      font-size: 40px;
      font-weight: bolder;
      color: $accColor;
      text-align: start;
    }

    p {
      font-family: 'Parisienne', cursive;
      color: $secColor;
      font-size: 30px;
      line-height: 40px;
      text-align: start;
      border-radius: 1em;
      padding: 20px;
    }
  }
}





/////////////////////////////////////
@media only screen and (max-width: 768px) {

  img {
    height: 400px;
    width: 380px;
  }
  .about-us {
    flex-direction: column;

    .about-us-image {

      width: 90%;
      img {
        //box-shadow: 5px 10px 18px $accColor;
        transform: scale(1.04);
        border-radius: 2em;
        width: 90%;
      }

      h4 {
        font-size: 30px;
        font-weight: normal;
        color: $secColor;
        text-align: center;
        margin: 10px;
      }

    }

    .about-us-text {
      width: 100%;
      text-align: center;

      h2 {
        font-size: 40px;
        font-weight: bolder;
        color: $accColor;
        text-align: center;
 margin-top: 0;
      }

      p {
        font-family: 'Parisienne', cursive;
        color: $secColor;
        font-size: 25px;
        line-height: 30px;
        text-align: start;
        border-radius: 1em;
        padding: 10px;
      }
    }
  }
}

//////////////////////////////////
@media only screen and (min-width: 768.3px) and (max-width: 991.98px) {
  img {
    height: 500px;
    width: 500px !important;
  }
  .about-us {

    flex-direction: column;

    .about-us-image {

      width: 90%;
      img {
        //box-shadow: 5px 10px 18px $accColor;
        transform: scale(1.04);
        border-radius: 2em;
        width: 90%;
      }

      h4 {
        font-size: 30px;
        font-weight: normal;
        color: $secColor;
        text-align: center;
        margin: 10px;
      }

    }

    .about-us-text {
      width: 100%;
      text-align: center;

      h2 {
        font-size: 40px;
        font-weight: bolder;
        color: $accColor;
        text-align: center;
        margin-top: 0;
      }

      p {
        font-family: 'Parisienne', cursive;
        color: $secColor;
        font-size: 25px;
        line-height: 30px;
        text-align: start;
        border-radius: 1em;
        padding: 10px;
      }
    }
  }
}
</style>