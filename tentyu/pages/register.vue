<template>
  <div>
    <div v-show="!userConfirm">
      <div class="register-title">お客様情報登録</div>
      <div class="register-text">
        <ul class="register-list">
          <li>
            <v-text-field
              v-model="user.storeName"
              label="店舗名/会社名"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.phoneTel"
              label="電話番号"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.name"
              label="代表者名"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.kanaName"
              label="かな"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.tel"
              label="携帯電話"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.email"
              label="メールアドレス"
              filled
            ></v-text-field>
          </li>
          <li>
            <v-text-field
              v-model="user.address"
              label="住所"
              filled
            ></v-text-field>
          </li>
        </ul>

        <div class="register-pass">
          <v-text-field
            v-model="user.password"
            label="パスワード"
            filled
          ></v-text-field>
        </div>
      </div>
      <div class="register-card">
        <v-card class="pa-4 ma-4">
          <div class="register-prantitle">メンテナンスプラン</div>
          <div class="register-pran">
            <v-radio-group v-model="user.radios">
              <v-radio value="ベーシックプラン(冷蔵機器)">
                <template v-slot:label>
                  <div>ベーシックプラン(冷蔵機器)</div>
                </template>
              </v-radio>
              <v-radio value="ベーシックプラン(エアコン)">
                <template v-slot:label>
                  <div>ベーシックプラン(エアコン)</div>
                </template>
              </v-radio>
              <v-radio value="プロプラン">
                <template v-slot:label>
                  <div>プロプラン</div>
                </template>
              </v-radio>
              <v-radio value="パーフェクトプラン">
                <template v-slot:label>
                  <div>パーフェクトプラン</div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </v-card>
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
      <div class="container">
        <h1 class="title" v-text="title" />
        <div class="card">
          <p class="image-area">
            <img :src="product.image" :alt="product.name" class="image" />
          </p>
          <div class="info-area">
            <h2 class="name" v-text="product.name" />
            <p class="desc" v-text="product.desc" />
            <p
              class="amount"
              v-text="'¥' + product.amount.toLocaleString() + '-'"
            />
            <client-only>
              <p class="stripe-area">
                <card
                  :options="stripeOptions"
                  :stripe="stripePK"
                  class="stripe"
                  @change="isEntered = $event.complete"
                />
              </p>
            </client-only>
            <div class="message" v-text="message" />
            <p class="button-area">
              <button
                class="button"
                :class="{ active: isEntered }"
                aria-label="決済する"
                @click="pay"
                v-text="'決済する'"
              />
            </p>
          </div>
          <div class="complete" :class="{ active: isComplete }">
            <p class="message" v-text="'Thank you!'" />
          </div>
        </div>
      </div>

      <div class="baseline">口座</div>
      <v-btn class="inquire-link" elevation="2" plain rounded text to="/rule"
        >利用規約</v-btn
      >
      <v-btn class="inquire-link" elevation="2" plain rounded text to="/pri"
        >プライバシーポリシー</v-btn
      >
      <div class="register-mko">
        <v-container fluid>
          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a target="_blank" @click.stop v-on="on">
                    上記利用規約、プライバシーポリシー<br />について同意する。
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
          <v-btn class="inquire-link" elevation="2" plain rounded text
            >確 認</v-btn
          ></a
        >
      </div>
    </div>
    <div v-show="userConfirm">
      <div class="form-ck">入力項目確認</div>
      <div class="register-card">
        <v-card disabled elevation="11">
          <div class="form-ck-li">
            <ul>
              <li>
                <span> 店舗名/会社名: </span>
                <span>{{ user.storeName }}</span>
              </li>

              <li>
                <v-card disabled elevation="11"> 電話番号: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11"> 代表者名: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11"> かな: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11"> 携帯電話: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11"> メールアドレス: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11">住所: </v-card>
              </li>

              <li>
                <v-card disabled elevation="11"> パスワード: </v-card>
              </li>
              <li>
                <v-card disabled elevation="11"> メンテナンスプラン: </v-card>
              </li>
            </ul>
          </div>
          <div class="form-ck-li2">
            <ul>
              <li>
                <v-card disabled elevation="11">{{ user.storeName }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.tel }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.name }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.kanaName }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.phoneTel }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.email }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.address }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.password }}</v-card>
              </li>
              <li>
                <v-card disabled elevation="11">{{ user.radios }}</v-card>
              </li>
            </ul>
          </div>
        </v-card>
      </div>

      <div>
        <v-btn
          class="inquire-link"
          elevation="2"
          plain
          rounded
          text
          color="primary"
          @click="userConfirm = false"
          >修正</v-btn
        >　<v-btn
          class="inquire-link"
          elevation="2"
          plain
          rounded
          text
          @click="submit"
          to="/login-comp"
          >送信</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase.js";
import axios from "axios";
import { Card, createToken } from "vue-stripe-elements-plus";
export default {
  components: {
    Card,
  },
  data() {
    return {
      userConfirm: false,
      user: {
        storeName: "",
        tel: "",
        name: "",
        kaneName: "",
        phoneTel: "",
        email: "",
        address: "",
        password: "",
        radios: "",
      },
      checkbox: false,
      // for stripe
      title: "決済フォーム",
      product: {
        name: "サンプル腕時計",
        desc:
          "こちらは決済フォームのサンプルのためご購入はできません。また、カード番号を入力しても請求されることはありません。ご理解いただいた上でお進みください。カード番号は「4242 4242 4242 4242」をご入力ください。※年月,CVCは任意の値で結構です。",
        amount: 12345,
        image: "watch.jpg",
      },
      stripeOptions: { hidePostalCode: true },
      stripePK:
        "pk_test_51IDhq6Fk7j81mLsOOmqflYPapCG1Osj5uxvTm7z58XdfKJaZJaq2WWqLeWnE86zhBNhu6ZxffsKuAidQJFeCD9xD002jmzXUsb",
      message: "",
      isEntered: false,
      isComplete: false,
    };
  },
  methods: {
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
          source: tokenResult.token.id,
        },
        (err, customer) => {
          console.log("決済結果確認", err, customer);

          if (!err && customer) {
            // 定期支払い（Subscription）を作成する
            stripe.subscriptions.create(
              {
                customer: customer.id,
                plan: "prod_Ir1bTMddSnZhto",
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

      console.log("決済結果処理終了" ,res);
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
        .then(function (res) {
          console.log("user create success", res);
        })
        .catch(function (error) {
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
        .catch(function (error) {
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
        .catch(function (error) {
          console.log("error", error);
        });
    },
  },
  head() {
    return {
      title: this.title,
      script: [{ src: "//js.stripe.com/v3/" }],
    };
  },
};
</script>
<style>
li {
  list-style: none;
}

.register-title {
  font-size: 20px;
  font-weight: bold;
}
.register-text ul li {
  margin: 5px 500px;
  text-align: left;
  height: 60px;
}
.register-pass {
  margin: 5px 500px;
  text-align: left;
}

.register-prantitle {
  border-bottom: solid 1px;
  border-bottom-color: rgb(103, 104, 117);
}
.inquire-link {
  margin-top: 20px;
}
.form-ck {
  font-size: 20px;
  font-weight: bold;
}

.form-ck-li li {
  margin: 5px 5px;
  text-align: center;
  padding: 2px;
}
.form-ck-li2 li {
  margin: 5px 5px;
  text-align: left;
  padding: 2px;
}
.register-card {
  margin: 5px 500px;
}
.register-mko {
  margin: 5px 500px;
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
</style>