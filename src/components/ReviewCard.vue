<template>

  <div class="reviews" data-aos="zoom-in-up">
    <p>
      {{ currentReview }}
    </p>
    <img src="../assets/icons8-back.png" alt="" @click="previousReviews">
    <img src="../assets/icons8-next-page.png" alt="" @click="nextReviews">

  </div>
</template>

<script>
export default {
name: "ReviewCard",
  data(){
  return{
    currentReview: "Review 1",
    indexToSearch: 0,
    isHidden: true,
    reviews: [
      {
        review: " Review 2"
      },
      {
        review: " Review 3"
      },
      {
        review: " Review 4"
      },
      {
        review: " Review 5"
      },
      {
        review: " Review 6"
      },
    ],

  }
  },
  methods: {

    nextReviews() {
      this.indexToSearch += 1;
      if (this.indexToSearch === this.reviews.length) {
        this.indexToSearch = 0;
      }
      this.currentReview = this.reviews[this.indexToSearch].review

    },
    previousReviews() {
      this.indexToSearch -= 1;
      if (this.indexToSearch <= 0) {
        this.indexToSearch = 0;
      }
      this.currentReview = this.reviews[this.indexToSearch].review
    },
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

$priColor: black;
$secColor: #ffffff;
$accColor: #b98f09;
$colorFill: #0e010a;

.reviews {
  color: $secColor;
  font-family: 'Poppins', sans-serif;
  margin: 30px;
  font-weight: bolder;

  background: darken($accColor, 33%);
  padding: 30px;

img {
  margin: 30px;
}

p {
  line-height: 40px;
  font-size: 60px;
  padding: 50px;
  text-align: center;
  justify-content: center;
}

img {
  cursor: pointer;
}
}

//////////////////////
@media only screen and (max-width: 768px) {
  .reviews {
    margin: 20px;
    padding: 10px;

    img {
      margin: 20px;
      width: 30px;
    }

    p {
      line-height: 30px;
      font-size: 18px;
      padding: 30px;

    }

    img {
      cursor: pointer;
    }
  }

}
</style>