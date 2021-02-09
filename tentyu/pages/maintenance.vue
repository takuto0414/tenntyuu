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
              厨房機器1台につき<br />月額¥<span class="mainte-spn">2,300円</span
              >(税別)
            </div></v-card
          >
        </li>
        <li>
          <v-card class="v-color2">
            <div class="mainte-pr">ベーシックプラン(パッケージエアコン)</div>
            <div class="mainte-prb">
              パッケージエアコン1台につき<br />月額<span class="mainte-spn"
                >¥2,800円</span
              >(税別)
            </div></v-card
          >
        </li>

        <li>
          <v-card class="v-color3">
            <div class="mainte-pr">プロプラン</div>
            <div class="mainte-prb">
              機器1台とパッケージエアコンセット<br />月額<span
                class="mainte-spn"
                >¥4,900円</span
              >(税別)
            </div></v-card
          >
        </li>

        <li>
          <v-card class="v-color4">
            <div class="mainte-pr">パーフェクトプラン</div>
            <div class="mainte-prb">
              機器(エアコン含)3台以上<br />月額<span class="mainte-spn"
                >¥6,700円</span
              >(税別)
            </div></v-card
          >
        </li>
      </ul>
    </div>
    <v-btn class="mainte-btn" large elevation="" to="/register" >
      申し込む</v-btn
    >
  </div>
</template>

<style>
.mainte-title {
  font-size: 35px;
  
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
  border: solid 1px #2c2c2c;
}
.mainte-prb {
  font-size: 8px;
}
.mainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width:100px !important;
  background-color: #004fc5 !important;
  color: white !important;
  font-weight: bold;
}
.mainte-spn {
  font-weight: bold;
}
.v-color1{
  background-color: rgb(255, 239, 205) !important;
}
.v-color2{
  background-color: rgb(255, 232, 183) !important;
}
.v-color3{
  background-color: rgb(255, 215, 128) !important;
}
.v-color4{
  background-color: rgb(255, 199, 79) !important;
}
</style>