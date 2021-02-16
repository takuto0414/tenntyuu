<template>
  <div class="mainte-vue">
    <div class="mainte-slide">
      <v-carousel
        cycle
        height="350"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="items.src">
          <v-sheet :item="items[i]" height="100%">
            <div class="display-3">{{ slide }} Slide</div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="mainte-title">メンテナンス</div>
    <v-card class="mainte-card">
      <div class="mainte-nyo">
        <div>
          1:定期的メンテナンス
          <p>半年に１回の定期的な機器のメンテナンス。</p>
        </div>
        <div>
          2:充実なアフターフォロー
          <p>修理受付の優先、出張費、工賃の無料。※部品代のみの請求。</p>
        </div>
        <div>
          3:薬品洗浄
          <p>
            特殊な薬品による薬品洗浄で、機械部分（コンデンサー）のほこり、油を除去します。
          </p>
        </div>
        <div>
          4:月額または年会費でお客様の負担を軽減
          <p>
            お客様自身にプランを選択をしていただき、費用の負担を軽減します。
          </p>
        </div>
      </div>
      <div class="mainte-pr-title">プラン</div>
      <div>
        <ul class="mainte-ul">
          <li>
            <v-card class="v-color"
              ><div class="mainte-pr1">冷蔵庫プラン(厨房機器)</div>
              <div class="mainte-prb">
                「厨房機器1台」<br />冷蔵庫各種さまざまな機械の<br />メンテナンスができます。<br />月額¥<span
                  class="mainte-spn"
                  >2,300</span
                >(税別)
              </div></v-card
            >
          </li>
          <li>
            <v-card class="v-color">
              <div class="mainte-pr2">エアコンプラン(パッケージエアコン)</div>
              <div class="mainte-prb">
                「パッケージエアコン1台」<br />天カセ、天吊り、床置き、壁掛け<br />※ビルトイン、マルチタイプはご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥2,800</span
                >(税別)
              </div></v-card
            >
          </li>

          <li>
            <v-card class="v-color">
              <div class="mainte-pr3">セットプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン、エアコンプランの2台セット」<br />各種セット料金プランがあります。<br />※詳しくはご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥4,900</span
                >(税別)
              </div></v-card
            >
          </li>

          <li>
            <v-card class="v-color">
              <div class="mainte-pr4">プロプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン3台」<br />各種セット料金プランがあります。<br />※その他台数料金変更があるのでご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥6,700</span
                >(税別)
              </div></v-card
            >
          </li>
          <li>
            <v-card class="v-color">
              <div class="mainte-pr5">年間費でのお取り引き</div>
              <div class="mainte-prb">
                ・厨房機器(冷蔵庫類)年間<span class="mainte-spn"
                  >¥25,000(税別)</span
                ><br />・パッケージエアコン年間<span class="mainte-spn"
                  >¥30,000(税別)</span
                ><br />※各種セット割引がございますのでお気軽にお問い合わせください。<br />※また、年間費でのお取り引きは別途必要記入書類があります。
              </div></v-card
            >
          </li>
        </ul>
      </div>
      <v-btn class="mainte-btn" large elevation="" to="/register" nuxt>
        申し込む</v-btn
      ></v-card
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/4020177_m.jpg"),
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      slides: ["First", "Second", "Third", "Fourth"],
    };
  },
};
</script>
<style>
li {
  list-style: none;
}
.mainte-title {
  font-size: 35px;
  padding-top: 12px;
  font-weight: bold;
}

.mainte-pr-title {
  font-weight: bold;
  font-size: 25px;
  text-align: left;
}

.mainte-ul {
  text-align: left;
  width: 80%;
}

.mainte-ul li {
  padding: 5px;
}
.mainte-pr1 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px;
  background-color: #d4e157 !important;
}
.mainte-pr2 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px;
  background-color: #26a69a !important;
}
.mainte-pr3 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px;
  background-color: #5c6bc0 !important;
}
.mainte-pr4 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px;
  background-color: #ffa726 !important;
}
.mainte-pr5 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 2px;
  background-color: #ef5350 !important;
}
.mainte-prb {
  padding-top: 5px;
  padding-left: 6px;
  font-size: 18px;
}

.mainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 100px !important;
  background-color: #0d47a1 !important;
  color: white !important;
  font-weight: bold;
}

.mainte-spn {
  font-weight: bold;
}
.v-color {
  height: 150px;
  background-color: #f5f5f5 !important;
  border: solid 2px black !important ;
}

.mainte-nyo {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #0d47a1;
}

.mainte-nyo p {
  font-size: 18px;
  font-weight: 100;
  color: #000;
}

.mainte-card {
  padding: 24px;
  margin: 25px 10px 5px 10px;
  background-color: #f5f5f5 !important;
}

.mainte-span {
  padding-left: 24px;
}
.table-mainte {
  font-size: 18px;
}

.mainte-g {
  text-align: left;
}
@media (max-width: 480px) {
  .mainte-title {
    font-size: 15px;
    padding-top: 6px;
  }
  .mainte-pr-title {
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
  .mainte-ul {
    text-align: left;
    width: 100%;
  }
  .mainte-pr1 {
    font-size: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
  }
  .mainte-pr2 {
    font-size: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
  }
  .mainte-pr3 {
    font-size: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
  }
  .mainte-pr4 {
    font-size: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
  }
  .mainte-pr5 {
    font-size: 8px;
    font-weight: bold;
    border-bottom: solid 1px;
  }
  .mainte-prb {
    font-size: 6px;
    padding-top: 5px;
    padding-left: 6px;
  }
  .mainte-btn {
    width: 60px !important;
    background-color: #0d47a1 !important;
    color: white !important;
    height: 25px !important;
    font-weight: 100;
    font-size: small !important;
  }
  .v-color {
    height: 85px;
    border: solid 1px black !important;
  }

  .mainte-nyo {
    text-align: left;
    font-size: 10px;
    font-weight: bold;
    color: #0d47a1;
  }
  .mainte-nyo p {
    font-size: 6px;
    font-weight: 100;
    color: #000;
  }
  .mainte-card {
    padding: 12px;
    margin: 12px 6px;
  }
}
</style>