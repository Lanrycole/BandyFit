<template>
  <div id="gallery-div">
    <div class="Gallery">
      <div class="form">
        <form action="">
          <label for="search_gallery">
          </label>
          <input type="text" placeholder="Search" id="search_gallery" v-model="search">
          <br>
          <br>
          .....Case Sensitive
        </form>
      </div>
      <div class="sections">
        <section class="gallery-contents">
          <div class="gallery-card" v-for="productDetails in filteredGallery" :key=productDetails[0]>
            <card :card-img="productDetails.productImage" :card-text="productDetails.cardText"
                  :card-text-header="productDetails.cardTextHeader"
                  :status="productDetails.status " :available-colors="productDetails.availableColors"
                  :available-size="productDetails.availableSizes " button-action="Order"
                  :card-desc="productDetails.cardDesc"/>
            <div class="emailAndPhoneOrder">
              <Button><a href="mailto:someone@example.com">Email to Order</a></Button>
              <Button><a href="tel:5554280940">Call to Order</a></Button>
            </div>
          </div>
        </section>

        <section class="gallery-filters">

          <div class="customer-service">
            <h3>Customer Service</h3>
            <p>Customer Service Phone : 9999999</p>
            <p>Customer Service Email: 9999999</p>
            <p>Address: 201 </p>


          </div>
          <div class="shippingAndHandling">
            <h3>Placing an Order</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            <p>Need more information? Contact our Customer Care</p>
          </div>
          <div class="shippingAndHandling">
            <h3>Shipping And Handling</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            <p>Need more information? Contact our Customer Care</p>
          </div>
          <div class="lostInTransit">
            <h3>Order Lost In Transit</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            <p>Need more information? Contact our Customer Care</p>
          </div>
          <div class="returnsAndRefunds">
            <h3>Return and Refunds</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam
            vero voluptatibus? Ea, sapiente, tenetur. Adipisci consequatur eveniet fugit mollitia quae! Incidunt ipsa
            nemo
            ratione repellat?
            <p>Need more information? Contact our Customer Care</p>
          </div>
          <div class="fashion-list">
            <h3>FAQs</h3>
            <ul>
              <li>Paris Fashion</li>
              <li>Fashion Week</li>
              <li>Men Sizing</li>
              <li>Woman Sizing</li>
              <li>Nigerian Fashion Blog</li>
              <li>Nigerian Fashion Blog</li>

            </ul>
          </div>

          <div class="fashion-list">
            <h3>Links</h3>
            <ul>
              <li>Paris Fashion</li>
              <li>Fashion Week</li>
              <li>Men Sizing</li>
              <li>Woman Sizing</li>
              <li>Nigerian Fashion Blog</li>
            </ul>
          </div>
          <div class="fashion-list">
            <h3>Social Media</h3>
            <ul>
              <li><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/facebook.png"/></li>
              <li><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></li>
              <li><img src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div class="measurement">
      <h3>Measurement Guide</h3>
      <img src="../assets/measure-big.png" alt="">
    </div>
  </div>
</template>

<script>
import card from '@/components/card.vue';

export default {
  components: {
    card,
  },
  data() {
    return {
      isHidden: true,
      search: '',
      images: {
        suit: require('../assets/suit2.jpg'),
        brandName: require('../assets/brandName.png'),
        cardSuit1: require('../assets/suit-card.jpg'),
        cardSuit2: require('../assets/suit-card2.jpg'),
        cardSuit3: require('../assets/suit-card3.jpg'),
        cardSuit4: require('../assets/suit-card4.jpg'),
        cardSuit5: require('../assets/suit-card4.jpg'),
        cardSuit6: require('../assets/suit-card6.jpg'),
        cardSuit7: require('../assets/suit-card7.jpg'),
        cardSuit8: require('../assets/suit-card8.jpg'),
        cardSuit9: require('../assets/suit-card9.jpg')
      },
      product_detail: [

        {
          productImage: require('../assets/suit-card.jpg'),
          cardText: "",
          cardTextHeader: "Men Custom Fit Shirt",
          status: "Available In: Blue, Red",
          cardDesc: "Product Description:  Nike ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card8.jpg'),
          cardText: "",
          cardTextHeader: "Ready to wear ",
          status: "Available In:",
          cardDesc: "Peoduct Description: Lanre  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Men Custom Cotton",
          status: "Available In:",
          cardDesc: "Product Description: Biola  ratione repellat?\n" +
              "Lorem ipsum  Cotton dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card9.jpg'),
          cardText: "",
          cardTextHeader: "ladies Agbada",
          status: "Available In:",
          cardDesc: "Product Description: Lani  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Blue Trouser",
          status: "Available In:",
          cardDesc: "Product Description: Debola  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description: Dolapo  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card7.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description: Ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description:ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          cardDesc: "Product Description: ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card7.jpg'),
          cardText: "",
          cardTextHeader: "Tie",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card.jpg'),
          cardText: "",
          cardTextHeader: "Men Custom Fit Shirt",
          status: "Available In: Blue, Red",
          cardDesc: "Product Description:  Nike ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card9.jpg'),
          cardText: "",
          cardTextHeader: "Ready to wear ",
          status: "Available In:",
          cardDesc: "Product Description: Lanre  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Men Custom Cotton",
          status: "Available In:",
          cardDesc: "Product Description: Biola  ratione repellat?\n" +
              "Lorem ipsum  Cotton dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card8.jpg'),
          cardText: "",
          cardTextHeader: "ladies Agbada",
          status: "Available In:",
          cardDesc: "Product Description: Lani  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Blue Trouser",
          status: "Available In:",
          cardDesc: "Product Description: Debola  ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description: Dolapo  ratione repellat?\n" +
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card7.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Product Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card2.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          status: "Available In:",
          cardDesc: "Peoduct Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card4.jpg'),
          cardText: "",
          cardTextHeader: "Classic Shirt",
          cardDesc: "Peoduct Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        },
        {
          productImage: require('../assets/suit-card7.jpg'),
          cardText: "",
          cardTextHeader: "Tie",
          cardDesc: "Peoduct Description:   ratione repellat?\n" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto labore modi quidem totam",
          status: "Available In:",
          availableColors: "Green, Blue, Grey",
          availableSizes: "Sm, Xl, XXL"
        }

      ]

    }

  },
  methods: {},
  computed: {
    filteredGallery() {
      return this.product_detail.filter(items => {
        return (items.cardTextHeader.match(this.search) || items.cardDesc.match(this.search))

      });
    }
  }
}

</script>
<style lang="scss" scoped>
@mixin Button {
  border-radius: 2em;
  background: $secColor;
  margin: 15px;
  padding: 10px;
  width: 40%;
  cursor: pointer;
  border-width: 1px;
  a {

    text-decoration: none;
    font-weight: bold;
    color: $colorFill;
    background: none;
  }
  &:hover {
    color: $secColor;
    background: $priColor;

    a {
      color: $secColor;
    }
  }
}


$priColor: black;
$secColor: #fffaf0;
$accColor: #b98f09;
$colorFill: #0e010a;

.Gallery {
  background: $secColor;
  padding-top: 180px;

  .form {
    width: 100%;
    form {
      width: 100%;
      #search_gallery {
        box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 40%;
        padding: 18px;
        color: $priColor;
        font-weight: bold;
        border: none;

      }
    }
  }
}

.sections {
  background: $secColor;
  display: flex;

  h3 {
    font-size: 40px;
  }

  .gallery-filters {
    text-align: start;
    margin-top: 50px;
    padding: 40px;
    width: 20%;

    .customer-service {
    }

    .fashion-list {
      ul {
        li {
          list-style: none;
          padding: 10px;
        }
      }
    }
  }

  .gallery-contents {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: 50px 10px 10px 10px;
    width: 80%;

    .gallery-card {
      grid-gap: 40px;
      width: 400px;
      background: $secColor;

      Button {
        @include Button;
      }
    }

  }
}

.measurement {
  background: #ffffff;

  h3 {
    font-size: 50px;
  }
}


/////////////////////////
@media only screen and (max-width: 768px) {
  @mixin Button {
    border-radius: 2em;
    background: $secColor;
    margin: 10px;
    padding: 8px;
    width: 60%;


  }
  .Gallery {
    background: $secColor;
    padding-top: 40px;

    .form {
      width: 100%;
      margin-top: 80px;

      form {
        width: 100%;

        #search_gallery {
          width: 60%;
          padding: 15px;
          font-weight: normal;

        }
      }
    }
  }


  .sections {
    background: $secColor;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 30px;
    }

    .gallery-filters {
      text-align: start;
      //border-right: 2px solid $accColor;
      margin-top: 50px;
      padding: 20px;
      width: 90%;

      .form {
        margin-bottom: 10px;
        display: none;

        form {

          #search_gallery {
            border: 1px solid #0000ff;
            padding: 8px;
            color: $priColor;

          }
        }
      }

      .fashion-list {
        ul {
          li {
            list-style: none;
            padding: 10px;
          }
        }
      }

    }

    .gallery-contents {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      margin: 50px 10px 10px 10px;
      width: 95%;

      .gallery-card {
        grid-gap: 10px;
        margin: 0 auto;
        width: 350px;

        Button {
          @include Button;
        }
      }
    }
  }

  .measurement {
    img {
      width: 320px;
    }

    background: #ffffff;

    h3 {
      font-size: 40px;
    }
  }

}

@media only screen and (min-width: 768.3px) {
  @mixin Button {
    width: 70%;
  }
  #gallery-div {
    .sections {
      background: $secColor;
      display: flex;
      flex-direction: column;

      .gallery-filters {
        text-align: start;
        //border-right: 2px solid $accColor;
        margin-top: 50px;
        padding: 40px;
        width: 90%;

      }

      .gallery-contents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin: 50px 10px 10px 10px;
        width: 97%;

        .gallery-card {
          grid-gap: 10px;
          margin: 0 auto;
          width: 350px;

          Button {
            @include Button;
          }
        }
      }
    }
  }
  .measurement {
    background: #ffffff;

    h3 {
      font-size: 50px;
    }

    img {
      width: 80% !important;
    }
  }
}

//991.98px
@media only screen and (min-width: 1331px) {

  #gallery-div {
    .sections {
      background: $secColor;
      display: flex;
      flex-direction: row;

      .gallery-filters {
        text-align: start;
        //border-right: 2px solid $accColor;
        margin-top: 50px;
        padding: 40px;
        width: 20%;
      }

      .gallery-contents {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 50px 10px 10px 10px;
        width: 78%;

        .gallery-card {
          grid-gap: 10px;
          margin: 0 auto;
          width: 350px;

          Button {
            @include Button;
          }
        }
      }
    }
  }

}

</style>