<template>
  <div>
    <div class="mainte-title">メンテナンス内容</div>
    <div>内容文</div>
    <div class="mainte-pr-title">メンテナンスプラン</div>
    <div>
      <v-card class="mainte-card">
        <ul class="mainte-ul">
          <li><v-card><div class="mainte-pr">ベーシックプラン(厨房機器)</div><div class="mainte-prb">厨房機器1台につき<br>月額2,300円</div></v-card></li>
          <li><v-card>
            <div class="mainte-pr">ベーシックプラン(パッケージエアコン)</div><div class="mainte-prb">パッケージエアコン1台につき<br>月額2,800円</div></v-card></li>
          
          <li><v-card>
            <div class="mainte-pr">プロプラン</div><div class="mainte-prb">機器1台とパッケージエアコンセットで<br>月額4,900円</div></v-card></li>
          
          <li><v-card>
            <div class="mainte-pr">パーフェクトプラン</div><div class="mainte-prb">機器(エアコン含)3台以上で<br>月額6,700円</div></v-card></li>
          
        </ul>
      </v-card>
    </div>
   <v-btn class="inquire-link" elevation="2" plain rounded text to="/register"
            >申し込む</v-btn
          >
  </div>
</template>
<style>
.mainte-title{
  font-size: 20px;
  font-weight: bold;
}
.mainte-pr-title{
  font-weight: bold;
}
.mainte-card{
   margin: 5px 300px;
}
.mainte-ul{
  display: flex;
 
 
}
.mainte-ul li{
  flex: auto;
  width: 25%;
  padding:5px;
 
}
.mainte-pr{
  font-size: 6px;
  font-weight:bold;
  border: solid 1px;
}
.mainte-prb{
  font-size: 8px;

}
</style>