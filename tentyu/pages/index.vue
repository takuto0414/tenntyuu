<template>
  <div class="home-main">
    <v-card class="home-contents-card" flat>
      <v-img class="home-img"></v-img>
      <div class="home-contents-title">厨房機器販売</div>
      <p class="home-contents-sub">
        新品から中古まで各種取り扱いがあります。
        <br />機種の選定からアフターフォローまでお任せ下さい！
      </p>
    </v-card>
    <v-card class="home-contents-card" flat>
      <v-img class="home-img"></v-img>
      <div class="home-contents-title">メンテナンス、修理</div>
      <p class="home-contents-sub">
        メーカー問わず冷蔵機器、空調機器の<br />メンテナンスをさせて頂きます！<br />
        詳細は<a href="/maintenance">こちら</a>
      </p>
      <div class="home-mainte-link"></div>
    </v-card>
    <v-card class="home-contents-card" flat>
      <v-img class="home-img" v-bind:src="image2"></v-img>
      <div class="home-contents-title">移設、廃棄、解体作業</div>
      <p class="home-contents-sub">
        店舗間の移設や各種廃棄、解体作業をお受けしております。<br />
        まずは、お気軽にお見積りをご依頼下さい！
      </p>
    </v-card>
    <v-card class="home-contents-card" flat>
      <v-img class="home-img" v-bind:src="image1"></v-img>
      <div class="home-contents-title">空調機器販売、取付</div>
      <p class="home-contents-sub">
        ルームエアコンから業務用エアコンまで<br />各種メーカーを取り扱いがあります。<br />お店にあったエアコンを選定させて頂きます！
      </p>
    </v-card>
    <v-card class="home-contents-card" flat>
      <v-img class="home-img"></v-img>
      <div class="home-contents-title">店舗、厨房改装企画提案</div>
      <p class="home-contents-sub">
        店舗や厨房のレイアウト変更や、<br />1からの店舗作りをサポートさせて頂きます！
      </p>
    </v-card>
    <v-card class="home-contents-card" flat>
      <v-img class="home-img" v-bind:src="image3"></v-img>
      <div class="home-contents-title">中古品買取、販売</div>
      <p class="home-contents-sub">
        不要になった厨房機器の買取をさせて頂いております。<br />
        また、販売もさせて頂いております。<br />お気軽にお見積りをご依頼下さい！
      </p>
    </v-card>
  </div>
</template>


<script>
import state from "~/store/index.js";
export default {
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      image1: require("@/assets/2264218_s.jpg"),
      image2: require("@/assets/1151779_m.jpg"),
      image3: require("@/assets/1646136_s.jpg"),
    };
  },
};
</script>


<style>
.home-contents-card {
    float: center;
    width: 100%;
    margin: 50px 50px 50px 0px;
    height: auto;
    background-color: white;
  }
  .slide {
    width: 100% !important;
    text-align: center !important;
  }
  .home-contents-title {
    font-size: 25px;
    color: #0045ad;
    font-weight: bold;
    text-align: left;
    margin: 16px;
  }
  .home-contents-sub {
    padding: 16px 0px;
    font-size: 18px;
    opacity: 0.8;
    text-align: left;
    margin: 16px;
  }
  .home-mainte-link {
    font-size: 6px;
  }
  .home-main {
    background-color: #eeeeee !important;
    margin: 50px;
  }
  .home-img {
    height: 500px;
  }
@media (max-width: 480px) {
  .home-contents-card {
    float: center;
    width: 100%;
    margin: 6px 6px 6px 0px;
    height: auto;
    background-color: white;

  }
  .slide {
    width: 100% !important;
    text-align: center !important;
  }
  .home-contents-title {
    font-size: 20px;
    color: #0045ad;
    font-weight: bold;
    text-align: left;
    margin: 16px;
  }
  .home-contents-sub {
    padding-top: 6px;
    font-size: 16px;
    opacity: 0.6;
    text-align: left;
    margin: 16px;
  }
  .home-mainte-link {
    font-size: 6px;
  }
  .home-main {
    background-color: #eeeeee !important;
    margin: 20px;
  }
  .home-img {
    height: 200px;
  }
}
</style>
