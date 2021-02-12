<template>
  <div>
    <div class="mainte-title">メンテナンス</div>
    <v-card class="mainte-card">
      <div class="mainte-nyo">
        <div>
          1:定期的メンテナンス
          <p>半年に一回年間二回。</p>
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
                  >2,300円</span
                >(税別)
              </div></v-card
            >
          </li>
          <li>
            <v-card class="v-color2">
              <div class="mainte-pr">エアコンプラン(パッケージエアコン)</div>
              <div class="mainte-prb">
                「パッケージエアコン1台」<br />天カセ、天吊り、床置き、壁掛け<br />※ビルトイン、マルチタイプは<br />ご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥2,800円</span
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
                  >¥4,900円</span
                >(税別)
              </div></v-card
            >
          </li>

          <li>
            <v-card class="v-color4">
              <div class="mainte-pr">プロプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン3台」<br />※その他台数料金変更があるので<br />ご相談ください。<br />月額<span
                  class="mainte-spn"
                  >¥6,700円</span
                >(税別)
              </div></v-card
            >
          </li>
        </ul>
      </div>
      <div class="mainte-g">※年間費でのお取り引きは別途必要書類がある為お問い合わせください。</div>
      <v-btn class="mainte-btn" large elevation="" to="/register">
        申し込む</v-btn
      ></v-card
    >
  </div>
</template>

<style>
li {
  list-style: none;
}
.mainte-title {
  font-size: 35px;
  padding-top: 12px;
}
.mainte-pr-title {
  font-weight: bold;
  font-size: 25px;
  text-align: left;
}
.mainte-card {
  margin: 0px 300px;
}
.mainte-ul {
  text-align: left;
width: 80%;}
.mainte-ul li {
  padding: 5px;

}
.mainte-pr {
  font-size: 18px;
  font-weight: bold;
  border-left:solid 2px;
  border-bottom:solid 2px;
  border-right:solid 2px;
}
.mainte-prb {
  font-size: 16px;
  padding-top: 5px;
  padding-left: 6px;
}
.mainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 100px !important;
  background-color: #004fc5 !important;
  color: white !important;
  font-weight: bold;
}
@media (max-width: 480px) {
  .mainte-btn {
    width: 90px !important;
    background-color: #004fc5 !important;
    color: white !important;
    height: 25px !important;
  }
}
.mainte-spn {
  font-weight: bold;
}
.v-color1 {
  background-color: rgb(255, 248, 143) !important;
  height: 150px;
}
.v-color2 {
  background-color: rgb(186, 255, 146) !important;
  height: 160px;
}
.v-color3 {
  background-color: rgb(128, 208, 255) !important;
  height: 150px;
}
.v-color4 {
  background-color: rgb(255, 189, 151) !important;
  height: 150px;
}
.mainte-nyo {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #0045AD;
}
.mainte-nyo p {
  font-size: 18px;
  font-weight: 100;
  color: #000;
}
.mainte-card {
  padding: 24px;
  margin: 25px 200px;
}
.mainte-span {
  padding-left: 24px;
}
.table-mainte {
  font-size: 18px;
}
.mainte-g{
  text-align: left;
}
</style>