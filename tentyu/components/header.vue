<template>
  <div>
    <div class="header-color">
      <header>
        <div class="header-title">
          <div class="header-sub">
            店舗厨房販売サービス<br />
            <span class="homelink">株式会社　店厨サポート</span>
          </div>
        </div>
          <div class="header-right">
            {{ this.$store.state.planName }}
            <div v-for="(user, i) in planName" :key="i">
              {{ user.radios }}
            </div>
            <v-btn class="ainte-btn" large elevation="" to="/home" nuxt
              >HOME</v-btn
            >
            <v-btn class="ainte-btn" large elevation="" to="/maintenance" nuxt
              >メンテナンス</v-btn
            >
            <v-btn class="ainte-btn" large elevation="" to="/login" nuxt
              >ログイン</v-btn
            >
            <v-btn class="ainte-btn" large elevation="" to="/contact" nuxt>
              お問い合わせ</v-btn
            >
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
  padding: 0px 6px;
}
@media (max-width: 480px) {
  header {
  height: 150px;
  border-bottom: solid 2px #ffffff;
  padding: 0px 6px;
  background-color: #3f70bb;
}
}

.homelink {
  text-decoration-line: none;
  color: #000000;
  text-align: left;
  float: left;
  font-size: 40px;
  font-weight: bold;
}
@media (max-width: 480px) {
  .homelink {
    text-decoration-line: none;
    color: #ffffff;
    text-align: left;
    float: left;
    font-size: 25px;
    font-weight: bold;
  }
}
.header-title {
  padding-left: 6px;
}

.header-right {
  padding: 20px 6px;
  text-align: right;
}
@media (max-width: 480px) {
  .header-right {
  float: left;}
}

.header-sub {
  font-size: 20px;
  text-decoration-line: none;
  color: #000000;
  text-align: left;
  float: left;
  font-weight: bold;
}
@media (max-width: 480px) {
  .header-sub {
  font-size: 20px;
  text-decoration-line: none;
  color: #ffffff;
  text-align: left;
  float: left;
  font-weight: bold;
}
}
.ainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width:100px !important;
  background-color: #004fc5 !important;
  color: white !important;
  font-weight: bold;
}
@media (max-width: 480px) {
.ainte-btn {
  width:60px !important;
  background-color: #ffffff !important;
  color: #004fc5 !important;
  height: 25px  !important;
  font-weight: bold;
  font-size:10px  !important;
}}
</style>