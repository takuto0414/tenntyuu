<template>
  <div>
    <main>
      <div class="home-main">
        <!--スライドショー入る-->
        <div class="slide">
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div>
          <v-card class="home-contents-card">
            <v-img
              class="home-img"
            ></v-img>
            <div class="home-contents-title">厨房機器販売</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお<br />アイウエオ
            </p>
          </v-card>
          <v-card class ="home-contents-card">
            <v-img
              class="home-img"
            ></v-img>
            <div class="home-contents-title">メンテナンス、修理</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお
            </p>
            <div>お申し込みは<a href="/maintenance">こちら</a></div>
          </v-card>
          <v-card class="home-contents-card">
            <v-img
              class="home-img"
              v-bind:src="image2"
            ></v-img>
            <div class="home-contents-title">移設、廃棄、解体作業</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお<br />アイウエオ
            </p>
          </v-card>
          <v-card class="home-contents-card">
            <v-img class="home-img" v-bind:src="image1"></v-img>
            <div class="home-contents-title">空調機器販売、取付</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお<br />アイウエオ
            </p>
          </v-card>
          <v-card class="home-contents-card">
            <v-img
              class="home-img"
            ></v-img>
            <div class="home-contents-title">店舗、厨房改装企画提案</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお<br />アイウエオ
            </p>
          </v-card>
          <v-card class="home-contents-card">
            <v-img
              class="home-img"
              v-bind:src="image3"
            ></v-img>
            <div class="home-contents-title">中古品買取、販売</div>
            <p class="home-contents-sub">
              三行くらい文章入れる<br />あいうえお<br />アイウエオ
            </p>
          </v-card>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import state from "~/store/index.js";
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
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
  float: left;
  width: 30%;
  margin: 3px 6px 6px 6px;
}
.home-contents-title {
  font-size: 25px;
  color: #0045ad;
  border-bottom: solid 1px #c1c1c1;
}
.home-img {
  height: 150px;
}
</style>
