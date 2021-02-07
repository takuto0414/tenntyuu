<template>
  <div>
    <div class="mainte-title">メンテナンス</div>
    <div>内容文</div>
    <div class="mainte-pr-title">プラン</div>
    <div>
      <ul class="mainte-ul">
        <li>
          <v-card class="v-color1"
            ><div class="mainte-pr">ベーシックプラン(厨房機器)</div>
            <div class="mainte-prb">
              厨房機器1台につき<br />月額¥<span class="mainte-spn">2,300</span
              >円
            </div></v-card
          >
        </li>
        <li>
          <v-card class="v-color2">
            <div class="mainte-pr">ベーシックプラン(パッケージエアコン)</div>
            <div class="mainte-prb">
              パッケージエアコン1台につき<br />月額<span class="mainte-spn"
                >¥2,800円</span
              >
            </div></v-card
          >
        </li>

        <li>
          <v-card class="v-color3">
            <div class="mainte-pr">プロプラン</div>
            <div class="mainte-prb">
              機器1台とパッケージエアコンセットで<br />月額<span
                class="mainte-spn"
                >¥4,900円</span
              >
            </div></v-card
          >
        </li>

        <li>
          <v-card class="v-color4">
            <div class="mainte-pr">パーフェクトプラン</div>
            <div class="mainte-prb">
              機器(エアコン含)3台以上で<br />月額<span class="mainte-spn"
                >¥6,700円</span
              >
            </div></v-card
          >
        </li>
      </ul>
    </div>
    <v-btn class="mainte-btn" large elevation="" to="/register" nuxt>
      申し込む</v-btn
    >
  </div>
</template>
<style>
.mainte-title {
  font-size: 35px;
  font-weight: bold;
}
.mainte-pr-title {
  font-weight: bold;
  font-size: 25px;
}
.mainte-card {
  margin: 5px 300px;
}
.mainte-ul {
  display: flex;
  margin: 0px 150px;
}
.mainte-ul li {
  flex: auto;
  width: 25%;
  padding: 5px;
}
.mainte-pr {
  font-size: 6px;
  font-weight: bold;
  border: solid 1px;
}
.mainte-prb {
  font-size: 8px;
}
.mainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;

  background-color: royalblue !important;
  color: white !important;
  font-weight: bold;
}
.mainte-spn {
  font-weight: bold;
}
</style>