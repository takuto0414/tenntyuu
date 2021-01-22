<template>
  <div>
    <main>
      <!--スライドショー5P-->
      <div>
        <v-carousel
          cycle
          height="400"
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
      <!--　購入フォーム小さく-->
      <div></div>
      <!--文章、写真-->
      <div class="image">
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="25%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img
        ><v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="25%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img
        ><v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="25%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img
        ><v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="25%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </div>
    </main>
    <footer>
      <div class="footer-logo">
        <h2>A self t</h2>
      </div>
      <div><p>概要等</p></div>
      <div><link rel="stylesheet" href="" />snsリンク</div>
    </footer>
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
header {
  background-color: #302b2bc9;
  color: white;
}

.header-logo {
  font-size: 50px;
  width: 100%;
  padding-top: 40px;
  text-align: center;
}
.header-logo h1 {
  font-family: fantasy;
}
.list {
  list-style: none;
  display: flex;
}
.link li {
  flex: auto;
}
.image {
  display: flex;
}
footer {
  background-color: #302b2bc9;
  color: white;
}
.footer-logo {
  font-size: 35px;
}
.footer-logo h2 {
  font-family: fantasy;
}
</style>