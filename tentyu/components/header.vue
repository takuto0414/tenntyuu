<template>
  <div>
    <div class="header-color">
      <header>
        <div class="header-title">
          <div class="header-sub" 
            >店舗厨房販売サービス<br />
            <span class="homelink">株式会社　店厨サポート</span>
          </div>
          <div class="header-right">
        {{this.$store.state.planName}}
        <div v-for="(user, i) in planName" :key="i">
        {{ user.radios }}</div>
            <v-btn class="mainte-btn" large elevation="" to="/home" nuxt
              >HOME</v-btn
            >
            <v-btn class="mainte-btn" large elevation="" to="/maintenance" nuxt
              >メンテナンス</v-btn
            >
            <v-btn class="mainte-btn" large elevation="" to="/login" nuxt
              >ログイン</v-btn
            >
            <v-btn class="mainte-btn" large elevation="" to="/contact" nuxt>
              
              お問い合わせ</v-btn
            >
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<style>
.header-color {
  background-color: whitesmoke;
}
header {
  height: 130px;
  border-bottom: solid 2px #000000;
  padding:0px 6px;
}

.homelink {
  text-decoration-line: none;
  color: #000000;
  text-align: left;
  float: left;
   font-size: 40px;
   font-weight: bold;
}
.header-title{
  padding-left: 6px;
  
}


.header-right {
  padding: 20px 6px;
  text-align: right;
}

.header-sub {
  font-size: 20px;
  text-decoration-line: none;
  color: #000000;
  text-align: left;
  float: left;
  font-weight: bold;
}

</style>