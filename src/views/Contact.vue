<template>
  <div class="contact-section">
    <div class="Contact">
      <div class="location">
<!--        <img src="../assets/contact-bg.jpg" alt="" height="600px" width="600px">-->
      </div>
      <div class="contact-us">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRk4rhLYWchZiEV0EvbWHgls35mA7nBkaukWXMaeW9dzMN-A/viewform?embedded=true"
            width="640" height="908" frameborder="0" marginheight="0" marginwidth="0">Loading…
        </iframe>
      </div>
    </div>

    <div class="socials">
        <h4>Social Media</h4>
        <ul>
          <li><img src="https://img.icons8.com/nolan/64/cell-phone.png"/></li>
          <li><img src="https://img.icons8.com/nolan/64/email.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/map-marker.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/> </li>
          <li><img src="https://img.icons8.com/color/48/000000/facebook.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/></li>
        </ul>

    </div>

    <img src="../assets/brandName.png" alt="">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe width="1650" height="499" id="gmap_canvas"
                                       src="https://maps.google.com/maps?q=Akure&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                       frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
$priColor: black;
$secColor: floralwhite;
$accColor: #b98f09;
$colorFill: #0e010a;

.Contact{
  background: $priColor;
display: flex;


  .location{
margin: 0px;
width: 500%;
    background: url("../assets/contact-bg.jpg");
    background-size: cover;
  }
  .contact-us{
    background: url("../assets/logos.png");
    background-size: cover;
    margin: 60px;
    width: 40%;
  }

}

.socials{
  h4{
    font-size: 50px;
    color: $secColor;
    padding: 0;

  }
  ul{

    li{
      cursor: pointer;
      display:inline-block;
      padding: 40px;
    }
  }
}
@media only screen and (max-width: 768px) {
  img{
    width: 100%;
  }
  .Contact{
    background: $priColor;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    .location{

      width: 10%;
      background: url("../assets/contact-bg.jpg");
      background-size: cover;
    }
    .contact-us{
      background: url("../assets/logos.png");
      background-size: cover;
      margin: 10px;
      width: 95%;
      iframe{
        width: 90%;
      }
    }

  }

  .socials{
    h4{
      font-size: 30px;
      color: $secColor;
      padding: 0;

    }
    ul{
padding: 0;
      li{
        cursor: pointer;
        display:inline-block;
        padding: 10px;
        img{
          width: 30px;
        }
      }
    }
  }
  .mapouter{
    .gmap_canvas{
      iframe{
        width: 95%;
      }
    }
  }
}
@media only screen and (min-width: 768.3px) and (max-width: 991.98px) {

  img{
    width: 100%;
  }
  .Contact{
    background: $priColor;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    .location{

      width: 10%;
      background: url("../assets/contact-bg.jpg");
      background-size: cover;
    }
    .contact-us{
      background: url("../assets/logos.png");
      background-size: cover;
      margin: 10px;
      width: 95%;
      iframe{
        width: 90%;
      }
    }

  }

  .socials{
    h4{
      font-size: 30px;
      color: $secColor;
      padding: 0;

    }
    ul{
      padding: 0;
      li{
        cursor: pointer;
        display:inline-block;
        padding: 10px;
        img{
          width: 30px;
        }
      }
    }
  }
  .mapouter{
    .gmap_canvas{
      iframe{
        width: 95%;
      }
    }
  }
}
@media only screen and (min-width: 1314px) and (max-width: 1666px) {
  .contact-section{
    img{
      width: 100%;
    }
.mapouter{
.gmap_canvas {

  iframe{
    width: 100%;
}
}
}
  }

}
</style>