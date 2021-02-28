<template>
  <div class="mainte-vue">
    <div v-show="!isConfirm">
      <div class="contact-title">お問い合わせ</div>
      <v-card class="pa-4ma-4" flat>
        <div class="contact-navi">
          ご相談、お見積り、ご質問までお気軽にご連絡ください。<br />項目を記入後確認ボタンを押してください。
        </div>

        <div class="contact-nkm">
          <v-radio-group v-model="contactInformation.radios">
            <template>
              <div class="contact-im">お問い合わせ項目の選択</div>
            </template>
            <v-radio
              value="ご購入頂いた商品等に関するお問い合わせ(機器の不具合、故障等)"
            >
              <template v-slot:label>
                <div class="font-small">
                  ご購入頂いた商品等に関するお問い合わせ<br />(機器の不具合、故障等)
                </div>
              </template>
            </v-radio>
            <v-radio value="その他のお問い合わせ(商品のお見積もり依頼、質問等)">
              <template v-slot:label>
                <div class="font-small">
                  その他のお問い合わせ<br />(商品のお見積もり依頼、質問等)
                </div>
              </template>
            </v-radio>
          </v-radio-group>

          <div class="contact-text">
            <div class="contact-im2">お問い合わせ内容</div>
            <div class="contact-field">
              <textarea
                class="contact-text-t"
                name="mail"
                id="#"
                cols="30"
                rows="5"
                v-model="contactInformation.content"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="contact-jh">お客様情報</div>

        <div class="contact-nr">
          <ul>
            <li>
              <v-text-field
                v-model="contactInformation.storeName"
                label="店舗名/会社名"
                color="#0045AD"
                dense
              ></v-text-field>
            </li>
            <li>
              <v-text-field
                v-model="contactInformation.name"
                label="氏名"
                color="#0045AD"
                dense
              ></v-text-field>
            </li>

            <li>
              <v-text-field
                v-model="contactInformation.email"
                label="メールアドレス"
                color="#0045AD"
                dense
              ></v-text-field>
            </li>
            <li>
              <v-text-field
                v-model="contactInformation.tel"
                label="電話番号"
                color="#0045AD"
                dense
              ></v-text-field>
            </li>
          </ul>
        </div>
 <div class="register-mk">
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
                        >
                      </a>
                    </template>
                    Opens in new window
                  </v-tooltip>
                </template>
              </v-checkbox>
            </v-container>
          </div>
        <div class="imoimo">
          <v-btn class="mainte-btn" large depressed @click="showConfirm" nuxt
            >確認</v-btn
          >
        </div>
      </v-card>
    </div>
    <div v-show="isConfirm">
      <div class="contact-cd-title">入力項目確認</div>
      <v-card flat class="contact-ck-card">
        <table class="table">
          <tbody>
            <tr>
              <td style="opacity: 0.6">お問い合わせ種類</td>
              <td class="stcc-sub">{{ contactInformation.radios }}</td>
            </tr>
            <tr>
              <td style="opacity: 0.6">お問い合わせ内容</td>
              <td class="stcc-sub">{{ contactInformation.content }}</td>
            </tr>
            <tr>
              <td style="opacity: 0.6">店舗名/会社名</td>
              <td class="stcc-sub">{{ contactInformation.storeName }}</td>
            </tr>
            <tr>
              <td style="opacity: 0.6">氏名</td>
              <td class="stcc-sub">{{ contactInformation.name }}</td>
            </tr>
            <tr>
              <td style="opacity: 0.6">メールアドレス</td>
              <td class="stcc-sub">{{ contactInformation.email }}</td>
            </tr>
            <tr>
              <td style="opacity: 0.6">電話番号</td>
              <td class="stcc-sub">{{ contactInformation.tel }}</td>
            </tr>
          </tbody>
        </table>
      </v-card>
      <div class="contact-btnbtn">
        <v-btn class="mainte-btn" large depressed href="/contact" nuxt>
          修正</v-btn
        >
        　<v-btn class="mainte-btn" large depressed @click="submit" nuxt
          >送信</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase.js";
export default {
  data() {
    return {
      isConfirm: false,
      contactInformation: {
        radios: "",
        content: "",
        storeName: "",
        name: "",

        email: "",
        tel: "",
      },
    };
  },
  methods: {
    showConfirm() {
      this.isConfirm = true;
    },
    submit() {
      console.log("submit call", this.$store.state.planName);
      const db = firebase.firestore();
      db.collection("contacts")
        .add(this.contactInformation)
        .then((_) => {
          // this.dialog = true;
          console.log("register document SUCCESS");
        })
        .catch(function (error) {
          console.log("Error register document:", error);
        });
      this.$router.push({ path: "/contact-comp" });
    },
  },
};
</script>
<style>
li {
  list-style: none;
}
.contact-field {
  padding: 12px 0px;
}
.stcc-sub {
  text-align: left;
  padding: 12px 0px 12px 24px;
  opacity: 0.9;
}

.contact-nkm {
  margin: 5px 0px;
}

.contact-ul {
  text-align: left;
}

.span-title {
  font-size: 20px;
  color: black;
}

.contact-btnbtn {
  padding: 12px;
}

.contact-title {
  font-size: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  opacity: 0.8;
  font-weight: bold;
  text-align: left;
}
.contact-ck-card {
  padding: 16px;
  margin: 0px;
  font-size: 18px;
  text-align: left;
}
.font-small {
  font-size: 16px;
  padding: 12px 0px 12px 12px;
}
.v-icon {
  font-size: 16px;
}
.contact-nr {
  height: 180px;
}
.contact-nr ul li {
  text-align: left;
  height: 65px;
  padding: 12px 0px;
}

.v-label {
  font-size: 16px;
}
.v-input {
  font-size: 16px;
}

.contact-navi {
  font-size: 18px !important;
  text-align: left;
  opacity: 0.6;
  padding-top: 12px;
}

.contact-im {
  text-align: left;
  font-weight: bold;
  padding-bottom: 12px;
  padding-top: 12px;
  color: #0d47a1;
  font-size: 18px;
}

.contact-im2 {
  text-align: left;
  font-weight: bold;
  padding-bottom: 12px;
  color: #0d47a1;
  padding-top: 12px;

  font-size: 18px;
}

.contact-text-t {
  background-color: rgba(243, 243, 245, 0.788);
  border: solid 1px;
  width: 100%;
  height: 200px;
  float: left;
  font-size: 18px;
  padding: 12px;
}

.contact-jh {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 24px 0px;
  clear: both;
  color: #0d47a1;
}

.contact-cd-title {
  font-size: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: bold;
  opacity: 0.8;
  text-align: left;
}

.pa-4ma-4 {
  padding: 16px !important;
  margin: 0px;
}
.imoimo {
  padding-top: 80px;
}
.register-mk{
  padding-top: 100px;
}

@media (max-width: 480px) {
  .imoimo {
    padding-top: 0px;
  }
  .contact-title {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    opacity: 0.8;
    font-weight: bold;
    text-align: left;
  }
  .contact-ck-card {
    padding: 16px;
    margin: 0px;
    font-size: 12px;
  }
  .font-small {
    font-size: 12px;
    padding: 6px 0px 6px 6px;
  }
  .v-icon {
    font-size: 12px;
  }
  .contact-nr {
    height: 180px;
  }
  .contact-nr ul li {
    height: 40px;
  }
  .v-label {
    font-size: 12px;
  }
  .v-input {
    font-size: 12px;
  }

  .contact-navi {
    font-size: 12px !important;
    text-align: left;
    opacity: 0.8;
  }
  .contact-im {
    text-align: left;
    font-weight: bold;
    padding-bottom: 6px;
    color: #0d47a1;
    font-size: 16px;
  }
  .contact-im2 {
    text-align: left;
    font-weight: bold;
    padding-bottom: 12px;
    color: #0d47a1;
    font-size: 16px;
  }
  .contact-text-t {
    background-color: rgba(243, 243, 245, 0.788);
    border: solid 1px;
    width: 100%;
    height: 80px;
    float: left;
    font-size: 10px;
    padding: 6px;
  }
  .contact-jh {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 12px 0px;
    clear: both;
  }
  .contact-cd-title {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: bold;
    opacity: 0.8;
    text-align: left;
  }
  .pa-4ma-4 {
    padding: 16px !important;
    margin: 0px;
  }
  .register-mk{
  padding-top: 10px;
}
}
</style>