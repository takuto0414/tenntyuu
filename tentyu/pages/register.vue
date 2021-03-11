<template>
  <div>
    <div class="register-all">
      <div v-show="!userConfirm">
        <div class="register-title">お客様情報登録</div>
        <v-card flat class="register--card">
          <div class="register-navi">
            メンテナンスにご加入のお客様は、<br />下記にてお客様情報、メンテナンスプランの登録をお願いします。
          </div>
          <div class="register-text">
            <ul class="register-list">
              <li>
                <v-text-field
                  v-model="user.storeName"
                  label="店舗名/会社名"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.phoneTel"
                  label="電話番号"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.name"
                  label="代表者名"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.kanaName"
                  label="かな"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.tel"
                  label="携帯電話"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.email"
                  label="メールアドレス"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.address"
                  label="住所"
                  color="#0045AD"
                ></v-text-field>
              </li>
              <li>
                <v-text-field
                  v-model="user.password"
                  label="パスワード"
                  color="#0045AD"
                ></v-text-field>
              </li>
            </ul>
          </div>
          <div class="register-card">
            <div class="register-prantitle">メンテナンスプラン</div>

            <div class="register-pran">
              <v-radio-group v-model="user.radios">
                <v-radio value="冷蔵庫プラン(厨房機器)">
                  <template v-slot:label>
                    <p class="register-pran-pran">冷蔵庫プラン(厨房機器)</p>
                  </template>
                </v-radio>
                <v-radio value="エアコンプラン">
                  <template v-slot:label>
                    <p class="register-pran-pran">エアコンプラン</p>
                  </template>
                </v-radio>
                <v-radio value="セットプラン">
                  <template v-slot:label>
                    <p class="register-pran-pran">セットプラン</p>
                  </template>
                </v-radio>
                <v-radio value="プロプラン">
                  <template v-slot:label>
                    <p class="register-pran-pran">プロプラン</p>
                  </template>
                </v-radio>
              </v-radio-group>
            </div>
          </div>
          <!-- <div class="register-bank"></div>
      <div class="card-label-container">
        <label for="card-number" data-tid="elements.form.card_number_label">
          カード番号
        </label>
      </div>
      <div id="card-number" class="input empty"></div>
      <div class="baseline"></div>
      <div class="card-label-container">
        <label for="card-expiry" data-tid="elements.form.card_expiry_label">
          有効期限
        </label>
      </div>
      <div id="card-expiry" class="input empty"></div>
      <div class="baseline"></div>
      <div class="card-label-container">
        <label for="card-cvc" data-tid="elements.form.card_cvc_label">
          セキュリティコード
        </label>
      </div>
      <div id="card-cvc" class="input empty"></div> -->

          <!-- for stripe -->
          <div class="container-">
            <h1 class="title" v-text="title" />

            <div class="credit-card-inputs" :class="{ complete }">
              <card-number
                class="stripe-element card-number"
                ref="cardNumber"
                :stripe="stripeKey"
                :options="stripeOptions"
                @change="number = $event.complete"
              />
              <card-expiry
                class="stripe-element card-expiry"
                ref="cardExpiry"
                :stripe="stripeKey"
                :options="stripeOptions"
                @change="expiry = $event.complete"
              />
              <card-cvc
                class="stripe-element card-cvc"
                ref="cardCvc"
                :stripe="stripeKey"
                :options="stripeOptions"
                @change="cvc = $event.complete"
              />
            </div>

            <!-- <button class="pay-with-stripe" @click="pay" :disabled="!complete"> -->
            <!-- TOOD 検証用 本番では上をつかう。-->
            <button class="pay-with-stripe" @click="pay">
              Pay with credit card
            </button>
          </div>

          <div class="register-mko">
            <v-container fluid>
              <v-checkbox v-model="checkbox">
                <template v-slot:label>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a target="_blank" @click.stop v-on="on">
                        <a target="_blank" href="/rule">利用規約</a>、<a
                          target="_blank"
                          href="/pri"
                          >プライバシーポリシー</a
                        >について同意する。
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                </template>
              </v-checkbox>
            </v-container>
          </div>
          <div class="register-nji"></div>

          <div class="register-btn">
            <a @click="showConfirm">
              <v-btn class="mainte-btn-re" large depressed> 確認</v-btn></a
            >
          </div>
        </v-card>
      </div>
      <div v-show="userConfirm">
        <div class="form-ck">入力項目確認</div>

        <v-card class="register-card1" flat>
          <table class="table">
            <tbody>
              <tr>
                <td style="opacity: 0.6">店舗名/会社名</td>
                <td class="stcc-sub">{{ user.storeName }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">電話番号</td>
                <td class="stcc-sub">{{ user.tel }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">代表者名</td>
                <td class="stcc-sub">{{ user.name }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">かな</td>
                <td class="stcc-sub">{{ user.kanaName }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">携帯番号</td>
                <td class="stcc-sub">{{ user.phoneTel }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">メールアドレス</td>
                <td class="stcc-sub">{{ user.email }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">住所</td>
                <td class="stcc-sub">{{ user.address }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">パスワード</td>
                <td class="stcc-sub">{{ user.password }}</td>
              </tr>
              <tr>
                <td style="opacity: 0.6">メンテナンスプラン</td>
                <td class="stcc-sub">{{ user.radios }}</td>
              </tr>
            </tbody>
          </table>
        </v-card>

        <v-btn
          class="mainte-btn-re"
          large
          depressed
          @click="userConfirm = false"
          >修正</v-btn
        >
        <v-btn class="mainte-btn-re" large depressed @click="submit"
          >送信</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase.js";
import axios from "axios";
import { stripeKey, stripeOptions } from "~/stripeConfig.js";
import { CardNumber, CardExpiry, CardCvc } from "vue-stripe-elements-plus";

import { Card, createToken } from "vue-stripe-elements-plus";
export default {
  components: {
    Card,
    CardNumber,
    CardExpiry,
    CardCvc
  },
  data() {
    return {
      userConfirm: false,
      user: {
        storeName: "",
        tel: "",
        name: "",
        kanaName: "",
        phoneTel: "",
        email: "",
        address: "",
        password: "",
        radios: ""
      },
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      checkbox: false,
      // for stripe
      title: "決済フォーム",
      stripeOptions: stripeOptions,
      stripeKey: stripeKey,
      product: {
        name: "サンプル腕時計",
        desc:
          "こちらは決済フォームのサンプルのためご購入はできません。また、カード番号を入力しても請求されることはありません。ご理解いただいた上でお進みください。カード番号は「4242 4242 4242 4242」をご入力ください。※年月,CVCは任意の値で結構です。",
        amount: 12345,
        image: "watch.jpg"
      },
      message: "",
      isEntered: false,
      isComplete: false
    };
  },
  watch: {
    number() {
      this.update();
    },
    expiry() {
      this.update();
    },
    cvc() {
      this.update();
    }
  },
  methods: {
    update() {
      this.complete = this.number && this.expiry && this.cvc;

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus();
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus();
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus();
        } else if (!this.number) {
          this.$refs.cardNumber.focus();
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    },
    async pay() {
      // 決済用トークン発行
      const tokenResult = await createToken();
      if (
        !tokenResult ||
        !tokenResult.token ||
        !tokenResult.token.id ||
        tokenResult.token.id === ""
      ) {
        throw new Error("トークン発行エラー");
      }
      console.log("決済用トークン発行 ");
      // // 決済処理
      // // const chargeResult = await axios.post(
      // //   `${process.env.FUNCTION_URL}/.netlify/functions/charge`,
      // //   {
      // //     amount: this.product.amount,
      // //     token: tokenResult.token.id
      // //   }
      // // )
      // // exports.handler = async function(event) {
      const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
      // const data = {
      //   amount: this.product.amount,
      //   token: tokenResult.token.id,
      // };
      // console.log("決済リクエスト　トークンID: " + tokenResult.token.id);
      // console.log("決済リクエスト　トークン: " + tokenResult.token);
      // let result = false;
      // const res = await stripe.charges
      //   .create({
      //     amount: parseInt(this.product.amount),
      //     currency: "jpy",
      //     source: tokenResult.token.id,
      //   })
      //   .then(function (result) {
      //     result = true;
      //     console.log("決済リクエスト結果: " + result);
      //   })
      //   .catch(function (error) {
      //     // eslint-disable-next-line no-console
      //     console.log(error.message);
      //   });
      // // TODO error handling
      // // if (!chargeResult || chargeResult.data !== 'NORMAL') {
      // //   throw new Error('決済エラー')
      // // }
      // console.log("決済結果: " + result);
      // this.isComplete = true;

      // Customer 情報を作成する
      const res = await stripe.customers.create(
        {
          email: "test@gmail.com",
          description: "description",
          source: tokenResult.token.id
        },
        (err, customer) => {
          console.log("決済結果確認", err, customer);

          if (!err && customer) {
            // 定期支払い（Subscription）を作成する
            stripe.subscriptions.create(
              {
                customer: customer.id,
                plan: "prod_Ir1bTMddSnZhto"
              },
              (err, subscription) => {
                console.log("決済結果 ", err, subscription);

                if (!err && subscription) {
                  return done(null, { my_msg: "OK" });
                } else {
                  return done(null, { message: JSON.stringify(err, null, 2) });
                }
              }
            );
          } else {
            console.log("決済結果エラー ", err);
          }
        }
      );

      console.log("決済結果処理終了", res);
    },
    showConfirm() {
      this.userConfirm = true;
    },
    showCardError(event) {
      if (event.error) {
        this.cardErrorMessage = event.error.message;
      } else {
        this.cardErrorMessage = "";
      }
    },
    submit() {
      // TODO 以下を参考にしつつ、paymentの実行をします
      // https://stripe.com/docs/payments/accept-a-payment
    },
    createUser() {
      console.log("createUser call");
      const db = firebase.firestore();
      db.collection("user")
        .add(this.user)
        .then(function(res) {
          console.log("user create success", res);
        })
        .catch(function(error) {
          console.log("error", error);
        });
    },
    register_success(res) {
      //this.dialog = true;
      console.log("sendSignInLinkToEmail ok");
      console.log(res);
      console.log(res.user);

      res.user
        .sendEmailVerification()
        .then(this.createUser)
        .catch(function(error) {
          console.log(error);
          // An error happened.
        });
    },
    submit() {
      console.log("submit call");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(this.register_success)
        .catch(function(error) {
          console.log("error", error);
        });
      this.$router.push({ path: "/login-comp" });
    }
  },
  head() {
    return {
      title: this.title,
      script: [{ src: "//js.stripe.com/v3/" }]
    };
  }
};
</script>
<style>
li {
  list-style: none;
}
.mainte-btn-re {
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 80px !important;
  font-weight: bold;
  background-color: #0d47a1 !important;
  color: white !important;
}
.card-label-container {
  height: 1.5em;
  width: 100%;
  display: flex;
  margin: 10px 0;
  font-size: 0.8em;
  font-weight: 800;
  align-items: center;
}
.card-label-container ion-icon {
  font-size: 1.4em;
  margin: 0 6px;
}
.card-label-container label {
  pointer-events: none;
}
ion-row {
  margin: 10px 0;
}
.input {
  padding: 5px 0 6px 0;
  border-bottom: 1px solid #ddd;
}

.register-mko {
  text-align: left;
}

.span-title2 {
  text-align: left;
}
.register-card1 {
  margin: 0px 400px;
  padding: 16px;
}

.register-title {
  font-size: 30px;
  padding-top: 12px;
  font-weight: bold;
  padding-bottom: 12px;
  text-align: left;
  opacity: 0.8;
}

.register-pran {
  padding: 6px 0px;
}

.register-pran-pran {
  font-size: 18px;
  padding: 12px 0px 12px 12px;
}
.register-text {
  height: 650px;
}
.register-text ul li {
  padding-top: 10px;
  text-align: left;
  height: 70px;
  width: 100% !important;
}

.register-prantitle {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  opacity: 0.8;
}
.form-ck-li li {
  margin: 5px 5px;
  text-align: left;
  padding: 2px;
}

.form-ck {
  font-size: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  font-weight: bold;
  opacity: 0.8;
}

.register--card {
  padding: 16px;
  margin: 12px 6px;
}
.register-card1 {
  padding: 16px;
  margin: 12px 6px;
  text-align: left;
}

.register-navi {
  font-size: 18px !important;
  text-align: left;
  padding-bottom: 12px;
  padding-top: 12px;
  opacity: 0.6;
}
.register-mko a {
  font-size: 18px;
  padding: 12px 0px;
}
.v-icon {
  font-size: 16px !important;
}
.v-label {
  font-size: 16px !important;
}
.v-input {
  font-size: 16px !important;
}
.register-all {
  padding: 0px 50px;
}

@media (max-width: 480px) {
  .register-title {
    font-size: 20px;
    padding-bottom: 12px;
    text-align: left;
    opacity: 0.8;
  }
  .register-pran {
    padding: 6px 0px;
  }

  .register-pran-pran {
    font-size: 12px;
  }
  .register-text {
    padding-right: 50px;
    height: 400px;
  }

  .register-text ul li {
    height: 45px;
    width: 100% !important;
  }
  .register-prantitle {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    opacity: 0.8;
  }
  .form-ck {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    font-weight: bold;
    opacity: 0.8;
  }
  .register--card {
    padding: 16px !important;
    margin: 0px;
  }
  .register-card1 {
    padding: 16px;
    margin: 0px;
    font-size: 12px;
  }
  .register-navi {
    font-size: 12px !important;
    text-align: left;
    padding-bottom: 12px;
    opacity: 0.8;
  }
  .register-mko a {
    font-size: 12px;
  }
  .v-icon {
    font-size: 10px !important;
  }
  .v-label {
    font-size: 12px !important;
  }
  .v-input {
    font-size: 12px !important;
  }
  .register-all {
    padding: 0px 30px;
  }

  .container {
    padding: 0px;
  }
}
</style>
