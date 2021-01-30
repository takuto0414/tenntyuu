<template>
  <div>
    <div class="side">
      <menu> </menu>
      <main>
        <!--スライドショー入る-->
        <div class="slide">
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
        <section class="ac-container">
          <div>
            <input id="ac-1" name="accordion-1" type="radio" checked />
            <label for="ac-1">メンテナンス</label>
            <article>
              <p>メンテナンス説明、登録ページリンク</p>
            </article>
          </div>
          <div>
            <input id="ac-2" name="accordion-1" type="radio" />
            <label for="ac-2">お問い合わせ</label>
            <article>
              <p>お問い合わせ説明、登録ぺージリンク</p>
            </article>
          </div>
        </section>
      </main>
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
.ac-container {
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  text-align: center;
}

.ac-container label {
  height: 30px;
  line-height: 1.8;
  font-size: 20px;
  padding: 0px 20px;
  display: block;
  cursor: pointer;
  color: #666;
  background: #eee;
  border-top: 1px solid #ccc;
}

.ac-container {
  width: 100%;
  margin: 10px auto;
}

.ac-container label:hover {
  background: #ddd;
}

.ac-container input {
  display: none;
}
/* Contents */

.ac-container article {
  overflow: hidden;
  height: 0;
  transition: 0.6s;
}

.ac-container article p {
  padding: 20px;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}

.ac-container input:checked ~ article {
  height: 150px;
  border-top: 1px solid #ccc;
}
.slide {
  margin: 0px 35px 0px 35px;
}
</style>
