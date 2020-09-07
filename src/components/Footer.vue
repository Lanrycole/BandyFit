<template>
  <footer>

    <h2>You are our Business</h2>
    <div class="footer">
      <div class="footer1">
        <h4>Contact</h4>
        <ul>
          <li><img src="https://img.icons8.com/nolan/64/cell-phone.png"/></li>
          <li><img src="https://img.icons8.com/nolan/64/email.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/map-marker.png"/></li>

        </ul>
      </div>
      <div class="footer2">
        <h4>Links</h4>
        <ul>
          <li>Lorem ipsum is simply</li>
          <li>Lorem ipsum is simply</li>
          <li>Lorem ipsum is simply</li>
          <li>Lorem ipsum is simply</li>
          <li>Lorem ipsum is simply</li>
          <li>Lorem ipsum is simply</li>
        </ul>
      </div>
      <div class="footer3">
        <h4>Social</h4>
        <ul>
          <li><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/> </li>
          <li><img src="https://img.icons8.com/color/48/000000/facebook.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></li>
          <li><img src="https://img.icons8.com/fluent/48/000000/youtube-play.png"/></li>

        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="scss">
$priColor: black;
$secColor: #ffffff;
$accColor: #b98f09;
$colorFill: #0e010a;

footer{
  background: $colorFill;
  padding: 10px;
h2{
  font-size: 60px;
  color: floralwhite;
  text-align: end;
}

.footer {
  display: flex;
  justify-content: space-evenly;
.footer1, .footer2, .footer3 {
  width: 30%;

  color: $accColor;


ul {
li {
  list-style: none;
  padding: 5px;
  font-size: 16px;
  text-align: start;
  font-weight: bold;
  cursor: pointer;
}
}
h4{
  font-size: 30px;
  color: $accColor;
  text-align: start;
  margin: 0;

}
}
}
}

////////////////////////////////
@media only screen and (max-width: 768px) {
  footer{
    background: $colorFill;
    padding: 10px;
    h2{
      font-size: 50px;
      color: floralwhite;
      text-align: end;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .footer1, .footer2, .footer3 {
        width: 100%;
        color: $accColor;
        ul {
          li {
            list-style: none;
            padding: 15px;
            font-size: 16px;
            text-align: center;
            font-weight: normal;
            cursor: pointer;
            display: inline-block;
            img{
              width: 30px;

            }
          }
        }

      }
    }
  }
}

</style>