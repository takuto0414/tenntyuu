<template>
<div>
  <div class="header-color">
    <header>
      <div class="header-title">
        <a class="homelink" href="/home"
          >株式会社　店厨サポート<br />
          <span class="header-sub">店舗厨房販売サービス</span>
        </a>
        <div class="header-right">
          <v-btn large elevation="" to="/maintenance" nuxt>メンテナンス</v-btn>
          <v-btn large elevation="" to="/login" nuxt>ログイン</v-btn>
          <v-btn large elevation="" to="/contact" nuxt>
            <v-icon color="teal darken-2"> mdi-email </v-icon>
            お問い合わせ</v-btn
          >
        </div>
      </div>
    </header>
  </div>
  </div>
</template>
<style>
.header-color{
background-color:whitesmoke;
}
header {
  
  height: 130px;
  margin: 18px 35px;
  border-bottom: solid 2px;
}

.homelink {
  font-weight: bold;
  text-decoration-line: none;
  color: black;
  text-align: left;
  float: left;
}

.header-title {
  font-size: 50px;
}

.header-right {
  padding: 20px 0px;
  text-align: right;
}

.header-sub {
  font-size: 25px;
  text-decoration-line: none;
  color: black;
  text-align: left;
  float: left;
}
</style>