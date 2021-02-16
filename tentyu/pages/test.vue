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
          <v-img class="home-img"></v-img>
          <div class="home-contents-title">厨房機器販売</div>
          <p class="home-contents-sub">
            新品から中古まで各種取り扱いがあります。
            <br />機種の選定からアフターフォローまでお任せ下さい！
          </p>
        </v-card>
        <v-card class="home-contents-card">
          <v-img class="home-img"></v-img>
          <div class="home-contents-title">メンテナンス、修理</div>
          <p class="home-contents-sub">
            メーカー問わず冷蔵機器、空調機器の<br />メンテナンスをさせて頂きます！
          </p>
          <div class="home-mainte-link">
            詳細は<a href="/maintenance">こちら</a>
          </div>
        </v-card>
        <v-card class="home-contents-card">
          <v-img class="home-img" v-bind:src="image2"></v-img>
          <div class="home-contents-title">移設、廃棄、解体作業</div>
          <p class="home-contents-sub">
            店舗間の移設や各種廃棄、解体作業をお受けしております。<br />
            まずは、お気軽にお見積りをご依頼下さい！
          </p>
        </v-card>
        <v-card class="home-contents-card">
          <v-img class="home-img" v-bind:src="image1"></v-img>
          <div class="home-contents-title">空調機器販売、取付</div>
          <p class="home-contents-sub">
            ルームエアコンから業務用エアコンまで<br />各種メーカーを取り扱いがあります。<br />お店にあったエアコンを選定させて頂きます！
          </p>
        </v-card>
        <v-card class="home-contents-card">
          <v-img class="home-img"></v-img>
          <div class="home-contents-title">店舗、厨房改装企画提案</div>
          <p class="home-contents-sub">
            店舗や厨房のレイアウト変更や、<br />1からの店舗作りをサポートさせて頂きます！
          </p>
        </v-card>
        <v-card class="home-contents-card">
          <v-img class="home-img" v-bind:src="image3"></v-img>
          <div class="home-contents-title">中古品買取、販売</div>
          <p class="home-contents-sub">
            不要になった厨房機器の買取をさせて頂いております。<br />
            また、販売もさせて頂いております。<br />お気軽にお見積りをご依頼下さい！
          </p>
        </v-card>
      </div>
    </div>
  <div class="mainte-vue">
    <div class="mainte-title">メンテナンス</div>
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
            <v-card class="v-color1"
              ><div class="mainte-pr">冷蔵庫プラン(厨房機器)</div>
              <div class="mainte-prb">
                「厨房機器1台」<br />冷蔵庫各種さまざまな機械の<br />メンテナンスができます。<br />月額¥<span
                  class="mainte-spn"
                  >2,300</span
                >(税別)
              </div></v-card
            >
          </li>
          <li>
            <v-card class="v-color2">
              <div class="mainte-pr">エアコンプラン(パッケージエアコン)</div>
              <div class="mainte-prb">
                「パッケージエアコン1台」<br />天カセ、天吊り、床置き、壁掛け<br />※ビルトイン、マルチタイプはご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥2,800</span
                >(税別)
              </div></v-card
            >
          </li>

          <li>
            <v-card class="v-color3">
              <div class="mainte-pr">セットプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン、エアコンプランの2台セット」<br />各種セット料金プランがあります。<br />※詳しくはご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥4,900</span
                >(税別)
              </div></v-card
            >
          </li>

          <li>
            <v-card class="v-color4">
              <div class="mainte-pr">プロプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン3台」<br />各種セット料金プランがあります。<br />※その他台数料金変更があるのでご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥6,700</span
                >(税別)
              </div></v-card
            >
          </li>
          <li>
            <v-card class="v-color5">
              <div class="mainte-pr">年間費でのお取り引き</div>
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
      >
  </div>
  </div>

</template>