<template>
  <div>
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
          <div class="home-contents-title">厨房機器販売</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">メンテナンス、修理</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">移設、廃棄</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">空調機器販売、取付</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">ルームエアコン販売、取付</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">解体、撤去作業</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">店舗、厨房改装企画提案</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        <v-card class="home-contents-card">
          <div class="home-contents-title">中古品買取、販売</div>
          <v-img
            class="home-img"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
          <p class="home-contents-sub">三行くらい文章入れる<br>あいうえお<br>アイウエオ</p>
          <div>お問合せは<a href="/contact">こちら</a></div>
        </v-card>
        
      </div>
    </div>
  </div>
</template>


<script>
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
    };
  },
};
</script>


<style>
.home-main{
  margin: 20px 100px 0px 100px;
}

.home-contents-card {
  width: 350px;
   float: left;
  width: 31%;
  margin:12px;
}
.home-contents-title{
  font-size: 25px;
  font-weight: bold;
}
.home-img{
  margin: 12px;
  height: 100px;
}
</style>
