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
        <div v-if="this.$store.state.planName" class="header-pran">
          <v-icon dark small> mdi-wrench </v-icon>：{{
            this.$store.state.planName
          }}
        </div>
        <div class="header-right">
          <v-btn class="ainte-btn" large depressed to="/" nuxt>HOME</v-btn>
          <v-btn class="ainte-btn" large depressed to="/maintenance" nuxt
            >メンテナンス</v-btn
          >
          <v-btn class="ainte-btn" large depressed to="/login" nuxt
            >ログイン</v-btn
          >
          <v-btn class="ainte-btn" large depressed to="/contact" nuxt>
            お問い合わせ</v-btn
          >
        </div>

        <div class="header-info">
          <div>お気軽にお問い合わせください</div>
          <p class="header-tel">TEL：0532-00-0000</p>
          <p>9:00~18:00　(定休日/土、日、祝日)</p>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
</script>
<style>
header {
  height: 190px;
  border-bottom: solid 3px white;
  padding: 0px 6px;
  background-color: #0d47a1;
  opacity: 0.9;
}

.homelink {
  text-decoration-line: none;
  text-align: left;
  float: left;
  font-size: 40px;
  font-weight: 100;
}

.header-title {
  padding-left: 6px;
  color: white !important;
}

.header-right {
  padding: 6px 6px 0px 6px;
  text-align: right;
}

.header-sub {
  font-size: 25px;
  text-decoration-line: none;
  text-align: left;
  float: left;
  font-weight: 150;
  padding-top: 20px;
}

.ainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 100px !important;
  background-color: #ffffff !important;
  color: #0d47a1 !important;
  height: 30px !important;
  font-weight: bold;
}

.header-info {
  float: right;
  font-size: 18px;
  text-align: right;
  padding-right: 10px;
  color: #ffffff;
  font-weight: bold;
  padding-top: 6px;
  margin-bottom: 6px;
}

.header-pran {
  font-size: 16px;
  color: #ffffff;
  text-align: right;
  font-weight: bold;
  padding-top: 10px;
}
@media (max-width: 480px) {
  header {
    height: 155px;
    border-bottom: solid 2px #ffffff;
    padding: 0px 6px;
    background-color: #0d47a1;
    opacity: 0.9;
  }
  .homelink {
    text-decoration-line: none;
    color: #ffffff;
    text-align: left;
    float: left;
    font-size: 20px;
    font-weight: bold;
  }
  .header-right {
    float: left;
    padding: 3px 6px 0px 6px;
    height: 21px;
  }
  .header-sub {
    font-size: 12px;
    text-decoration-line: none;
    color: #ffffff;
    text-align: left;
    float: left;
    padding-top: 6px;
    font-weight: bold;
  }
  .ainte-btn {
    width: 30px !important;
    background-color: #ffffff !important;
    color: #0d47a1 !important;
    height: 20px !important;
    font-size: 12px !important;
  }
  .header-info {
    font-size: 12px !important;
    color: #ffffff;
    float: left;
    padding-left: 6px;
    text-align: left;
    padding-top: 20px;
  }
  .header-pran {
    font-size: 8px;
    color: #ffffff;
    text-align: right;
    padding-top: 6px;
  }
}
</style>
