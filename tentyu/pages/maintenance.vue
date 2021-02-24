<template>
  <div class="mainte-vue">
    <div class="mainte-slide"></div>
    <div class="mainte-title">メンテナンス</div>

    <v-card flat class="mainte-nyo">
      <div>
        1:定期的メンテナンス
        <p>半年に１回の定期的な機器のメンテナンス。</p>
      </div>
      <br />
      <div>
        2:充実なアフターフォロー
        <p>修理受付時の優先訪問、出張費、工賃の無料。<br>※部品代のみの請求。</p>
      </div>
      <br />

      <div>
        3:薬品洗浄
        <p>
          特殊な薬品による薬品洗浄で、機械部分（コンデンサー）のほこり、油を除去します。
        </p>
      </div>
      <br />

      <div>
        4:月額、年会費でお客様の負担を軽減
        <p>お客様自身にプランを選択をしていただき、費用の負担を軽減します。</p>
      </div>
    </v-card>
    <div class="mainte-pr-title">プラン</div>
    <div>
      <ul class="mainte-ul">
        <v-card class="v-color" flat>
          <v-row class="row-avatar" justify="space-around">
            <v-avatar class="avatar" color="#3F51B5" size="48">
              <v-icon dark> mdi-thumb-up-outline </v-icon>
              <!--https://pictogrammers.github.io/@mdi/font/2.0.46/ -->
            </v-avatar>
            <div>
              <div class="mainte-pr1">冷蔵庫プラン(厨房機器)</div>
              <div class="mainte-prb">
                「厨房機器1台」<br />冷蔵庫各種さまざまな機械の<br />メンテナンスができます。<br />月額¥<span
                  class="mainte-spn"
                  >2,300</span
                >(税別)
              </div>
            </div>
          </v-row>
        </v-card>
        <v-card class="v-color" flat>
          <v-row class="row-avatar" justify="space-around">
            <v-avatar class="avatar" color="#3F51B5" size="48">
              <v-icon dark> mdi-thumb-up-outline</v-icon>
            </v-avatar>
            <div>
              <div class="mainte-pr1">エアコンプラン</div>
              <div class="mainte-prb">
                「パッケージエアコン1台」<br />天カセ、天吊り、床置き、壁掛け<br />※ビルトイン、マルチタイプはご相談ください。<br />月額¥<span
                  class="mainte-spn"
                  >2,800</span
                >(税別)
              </div>
            </div>
          </v-row> </v-card
        ><v-card class="v-color" flat>
          <v-row class="row-avatar" justify="space-around">
            <v-avatar class="avatar" color="#3F51B5" size="48">
              <v-icon dark>mdi-thumb-up-outline </v-icon>
            </v-avatar>
            <div>
              <div class="mainte-pr1">セットプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン、エアコンプランの2台セット」<br />各種セット料金プランがあります。<br />※詳しくはご相談ください。<br />月額¥<span
                  class="mainte-spn"
                  >4,900</span
                >(税別)
              </div>
            </div>
          </v-row> </v-card
        ><v-card class="v-color" flat>
          <v-row class="row-avatar" justify="space-around">
            <v-avatar class="avatar" color="#3F51B5" size="48">
              <v-icon dark> mdi-thumb-up-outline </v-icon>
            </v-avatar>
            <div>
              <div class="mainte-pr1">プロプラン</div>
              <div class="mainte-prb">
                「冷蔵庫プラン3台」<br />各種セット料金プランがあります。<br />※その他料金変更等あるのでご相談ください。<br />月額¥<span
                  class="mainte-spn"
                  >6,700</span
                >(税別)
              </div>
            </div>
          </v-row> </v-card
        ><v-card class="v-color" flat>
          <v-row class="row-avatar" justify="space-around">
            <v-avatar class="avatar" color="#3F51B5" size="48">
              <v-icon dark> mdi-thumb-up-outline </v-icon>
            </v-avatar>
            <div>
              <div class="mainte-pr1">年間費でのお取り引き</div>
              <div class="mainte-prb">
                厨房機器類：年間¥<span class="mainte-spn">25,000</span
                >(税別)<br />パッケージエアコン：年間¥<span class="mainte-spn"
                  >30,000</span
                >(税別)<br />※各種セット割引があるのでご相談ください。<br />※ご際は別途必要記入書類があります。
              </div>
            </div>
          </v-row>
        </v-card>
      </ul>
    </div>
    <v-btn class="mainte-btn" depressed to="/register" nuxt> 申し込む</v-btn>
  </div>
</template>

<style>
li {
  list-style: none;
}

.mainte-spn {
  font-weight: bold;
}
.v-color {
  margin-bottom: 50px;
}

.mainte-span {
  padding-left: 24px;
}
.table-mainte {
  font-size: 18px;
}

.mainte-g {
  text-align: left;
}
.row-avatar {
  align-items: center;
  padding: 24px;
}
.avatar {
  margin: 24px;
  size: 80  !important;
}
.mainte-title {
  font-size: 30px;
  padding-bottom: 12px;
  text-align: left;
  opacity: 0.8;
  font-weight: bold;
  padding-top: 12px;
}

.mainte-pr-title {
  font-size: 30px;
  padding-bottom: 24px;
  padding-top: 60px;
  font-weight: bold;

  text-align: left;
  opacity: 0.8;
}

.mainte-ul {
  text-align: left;
  width: 100%;
}
.mainte-pr1 {
  font-size: 18px;
  font-weight: bold;
  /* background-color: #d4e157 !important; */
}

.mainte-pr1 {
  font-size: 20px;
  font-weight: bold;
  padding: 6px;
  opacity: 0.8;
}

.mainte-prb {
  font-size: 18px;
  padding-top: 5px;
  padding-left: 24px;
  opacity: 0.6;
}

.mainte-btn {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 80px !important;
  font-weight: bold;
  background-color: #0d47a1 !important;
  color: white !important;
}

.mainte-nyo {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #0d47a1 !important;
  padding: 16px;
}

.mainte-nyo p {
  font-size: 18px;
  font-weight: 100;
  color: #000;
  opacity: 0.6;
  padding-top: 6px;
  padding-left: 16px;
}

.mainte-card {
  padding: 12px;
  margin: 12px 6px;
}
.mainte-vue {
  padding: 0px 50px;
}
@media (max-width: 480px) {
  .mainte-title {
    font-size: 20px;
    padding-bottom: 12px;
    text-align: left;
    opacity: 0.8;
  }
  .mainte-pr-title {
    font-size: 20px;
    padding-bottom: 24px;
    padding-top: 60px;

    text-align: left;
    opacity: 0.8;
  }
  .mainte-ul {
    text-align: left;
    width: 100%;
  }
  .mainte-pr1 {
    font-size: 16px;
    font-weight: bold;
    opacity: 0.8;
  }

  .mainte-prb {
    font-size: 11px !important;
    padding-top: 5px;
    padding-left: 6px;
    opacity: 0.8;
  }
  .mainte-btn {
    width: 80px !important;
    background-color: #0d47a1 !important;
    color: white !important;
    height: 30px !important;
    font-weight: bold !important;
    font-size: small !important;
  }

  .mainte-nyo {
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    color: #0d47a1 !important;
    padding: 16px;
  }
  .mainte-nyo p {
    font-size: 12px;
    font-weight: 100;
    color: #000;
    opacity: 0.8;
    padding-left: 6px;
  }
  .mainte-card {
    padding: 12px;
    margin: 12px 6px;
  }
  .mainte-vue {
    padding: 0px 30px;
  }
  .row-avatar {
  align-items: center;
  padding: 12px;
}
.avatar {
  margin: 12px;
}
}
</style>