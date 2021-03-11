<template>
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
</template>
<script>
import axios from "axios";
import { Card, createToken } from "vue-stripe-elements-plus";
import { stripeKey, stripeOptions } from "~/stripeConfig.js";
const stripe = require("stripe")(
  "sk_test_51IDhq6Fk7j81mLsOglLQSHKyFLrAHkq70rnkEXJ5vaAsuwQPiWOLgmeOzs5y9JAgsBFeIwcEkVXXRcbYf1hRFcmU00iG3HExoB"
);
// テストカード
// https://stripe.com/docs/testing

export default {
  components: {
    Card
  },
  data() {
    return {
      title: "決済フォーム",
      product: {
        name: "サンプル腕時計",
        desc:
          "こちらは決済フォームのサンプルのためご購入はできません。また、カード番号を入力しても請求されることはありません。ご理解いただいた上でお進みください。カード番号は「4242 4242 4242 4242」をご入力ください。※年月,CVCは任意の値で結構です。",
        amount: 12345,
        image: "watch.jpg"
      },
      stripeOptions: { hidePostalCode: true },
      stripePK:
        "pk_test_51IDhq6Fk7j81mLsOOmqflYPapCG1Osj5uxvTm7z58XdfKJaZJaq2WWqLeWnE86zhBNhu6ZxffsKuAidQJFeCD9xD002jmzXUsb",
      message: "",
      isEntered: false,
      isComplete: false
    };
  },
  methods: {
    async pay() {
      try {
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

        console.log("トークン: ", tokenResult);

        // // 決済処理
        // const chargeResult = await axios.post(
        //   `${process.env.FUNCTION_URL}/.netlify/functions/charge`,
        //   {
        //     amount: this.product.amount,
        //     token: tokenResult.token.id
        //   }
        // );
        // if (!chargeResult || chargeResult.data !== "NORMAL") {
        //   throw new Error("決済エラー");
        // }
        // this.isComplete = true;

        const customers = {
          email: "customer1@example.com",
          source: tokenResult.token.id
        };

        stripe.customers.create(customers, function(err, customer) {
          if (err) {
            console.log("error", err);
          }
          console.log("customer.id", customer.id);
        });

        stripe.customers.create(customers).then(customer => {
          context.log("starting the stripe charges");
          stripe.charges.create({
            amount: req.body.stripeAmt,
            description: "Sample Charge",
            currency: "usd",
            customer: customer.id
          });
        });

        await stripe.customers.create(
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
                    return done(null, {
                      message: JSON.stringify(err, null, 2)
                    });
                  }
                }
              );
            } else {
              console.log("決済結果エラー ", err);
            }
          }
        );
      } catch (error) {
        this.message = error.message + "が発生しました。";
      }
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
