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

        <div class="header-info">
          <div>お気軽にお問い合わせください</div>
          <p class="header-tel">TEL　0532-00-0000</p>
          <p>9:00~18:00(定休日/土、日、祝日)</p>
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
  height: 170px;
  border-bottom: solid 2px #000000;
  padding: 0px 6px;
  background-color: #3f70bb;
}
@media (max-width: 480px) {
  header {
    height: 150px;
    border-bottom: solid 2px #000000;
    padding: 0px 6px;
    background-color: #3f70bb;
  }
}

.homelink {
  text-decoration-line: none;
  text-align: left;
  float: left;
  font-size: 45px;
  font-weight: 100;
}
@media (max-width: 480px) {
  .homelink {
    text-decoration-line: none;
    color: #ffffff;
    text-align: left;
    float: left;
    font-size: 20px;
    font-weight: bold;
  }
}
.header-title {
  padding-left: 6px;
  color: whitesmoke !important;
}

.header-right {
  padding: 12px 6px 0px 6px;
  text-align: right;
}
@media (max-width: 480px) {
  .header-right {
    float: left;
    padding: 0px 6px 0px 6px;
  }
}

.header-sub {
  font-size: 25px;
  text-decoration-line: none;
  text-align: left;
  float: left;
  font-weight: 150;
  padding-top: 20px;
}
@media (max-width: 480px) {
  .header-sub {
    font-size: 15px;
    text-decoration-line: none;
    color: #ffffff;
    text-align: left;
    float: left;
    font-weight: bold;
  padding-top: 6px;

  }
}
.ainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 100px !important;
  background-color: whitesmoke !important;
  color: #004fc5 !important;
  height: 30px !important;
  font-weight: bold;
}
@media (max-width: 480px) {
  .ainte-btn {
    width: 50px !important;
    background-color: #ffffff !important;
    color: #004fc5 !important;
    height: 20px !important;
    font-weight: bold;
    font-size: 6px !important;
  }
}
.header-info {
  float: right;
  font-size: 18px;
  text-align: center;
  padding-right: 30px;
  color: whitesmoke;
  font-weight: bold;
  padding-top: 6px;
}
@media (max-width: 480px) {
  .header-info {
    font-size: 10px;
    color: (whitesmoke);
    font-weight: bold;
    float: left;
    padding-left: 6px;
  text-align:left;
padding-top: 0%;
  }
}
</style>