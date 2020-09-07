<template>

  <div class="card">
    <div class="card1" :data-aos="effect">
      <img :src="cardImg" alt="">
      <div class="card-text">
        <h3> {{ cardH3 }}</h3>
        <p>{{ cardText }}</p>
        <p style="color: #000000; font-size: 30px">{{ cardTextHeader }}</p>
        <p>{{ cardDesc }}</p>
        <p> {{ status }}{{ availableColors }}</p>
        <p>{{ status }} {{ availableSize }}</p>
      </div>

    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {}
  },
  name: "card",
  props: {
    cardH3: {
      type: String,
      required: false
    },

    cardText: {
      type: String,
      required: false,

    },
    cardTextHeader: {
      type: String,
      required: false,
    },
    cardDesc: {
      type: String,
      required: false,

    },
    effect: String,
    cardImg: {
      image: Image,
      required: false
    },
    availableColors: {
      type: String,
      required: false
    },
    availableSize: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
  },
}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:wght@300;500&family=Montserrat:wght@700&family=Raleway:wght@400;600&display=swap');

$priColor: black;
$secColor: floralwhite;
$accColor: #b98f09;
$colorFill: #0e010a;

img {
  height: 400px;
  width: 400px;
}

.card {
  //display: flex;
  padding: 0;
  justify-content: center;
  color: $secColor;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  margin-bottom: 20px;

  .card1 {
    text-align: center;
    overflow: hidden;
    cursor: pointer;

    .card-text {
      overflow: hidden;
      font-family: 'Josefin Sans', sans-serif;

      h3 {
        font-size: 40px;
        text-align: center;
        color: $secColor;
      }

      p {
        text-align: start;
        font-size: 16px;
        line-height: 40px;
        margin: 20px;
      }

    }

    h3 {
      color: $secColor;
    }

    p {
      color: $accColor;

    }

  }

  &:hover {
    animation: animateCard;
    animation-duration: 2s;
    animation-timing-function: ease;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }
}

@keyframes animateCard {

  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.04)
  }
  100% {
    transform: scale(1.04)
  }
}

@media only screen and (max-width: 768px) {

  img {
    height: 400px;
    width: 380px;
  }
  .card {
    //display: flex;

    .card1 {
      .card-text {

        h3 {
          font-size: 30px;
          text-align: center;
          color: $secColor;
        }
        p {
          text-align: start;
          font-size: 16px;
          line-height: 40px;
          margin: 20px;
        }
      }

      h3 {
        color: $secColor;
      }

      p {
        color: $accColor;

      }

    }

    &:hover {
      animation: animateCard;
      animation-duration: 2s;
      animation-timing-function: ease;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
  }

}
@media only screen and (min-width: 1314px) and (max-width: 1666px) {

  .card{
    .card1{
      img{
        width: 330px;
        height: 300px;
      }
    }
  }
;
}
</style>