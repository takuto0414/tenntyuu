<template>
  <div class="mainte-vue">
    <div v-show="!isConfirm">
      <div class="contact-title">お問い合わせ</div>
      <v-card class="pa-4ma-4" flat>
        <div class="contact-navi">
          ご相談、お見積り、ご質問までお気軽にご連絡ください。<br />項目を記入後確認ボタンを押してください。
        </div>
        <div class="contact-sub-title">お問い合わせ入力</div>

        <div class="contact-nkm">
          <v-radio-group v-model="contactInformation.radios">
            <template>
              <div class="contact-im">お問い合わせ種類</div>
            </template>
            <v-radio
              value="ご購入頂いた商品等に関するお問い合わせ(機器の不具合、故障等)"
            >
              <template v-slot:label>
                <div class="font-small">
                  ご購入頂いた商品等に関するお問い合わせ<br>(機器の不具合、故障等)
                </div>
              </template>
            </v-radio>
            <v-radio value="その他のお問い合わせ(商品のお見積もり依頼、質問等)">
              <template v-slot:label>
                <div class="font-small">
                  その他のお問い合わせ<br>(商品のお見積もり依頼、質問等)
                </div>
              </template>
            </v-radio>
          </v-radio-group>

          <div class="contact-text">
            <div class="contact-im2">お問い合わせ内容</div>
            <div>
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
        <div class="contact-jh">お客様情報入力</div>

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

        <div>
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
              <td style="opacity:.6;">
                お問い合わせ種類
              </td>
              <td class="stcc-sub">{{ contactInformation.radios }}</td>
            </tr>
            <tr>
              <td style="opacity:.6;">
                お問い合わせ内容
              </td>
              <td class="stcc-sub">{{ contactInformation.content }}</td>
            </tr>
            <tr>
              <td style="opacity:.6;">
                店舗名/会社名
              </td>
              <td class="stcc-sub">{{ contactInformation.storeName }}</td>
            </tr>
            <tr>
              <td style="opacity:.6;">氏名</td>
              <td class="stcc-sub">{{ contactInformation.name }}</td>
            </tr>
            <tr>
              <td style="opacity:.6;">
                メールアドレス
              </td>
              <td class="stcc-sub">{{ contactInformation.email }}</td>
            </tr>
            <tr>
              <td style="opacity:.6;">電話番号</td>
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
.contact-title {
  font-size: 35px;
  padding-bottom: 24px;
  padding-top: 12px;
  font-weight: bold;
}

.contact-sub-title {
  font-size: 25px;
  font-weight: bold;
  text-align: left;
}

.contact-navi {
  font-size: 15px;
  margin: 5px 0px;
  text-align: left;
}

.contact-nkm {
  margin: 5px 0px;
}
.contact-im {
  text-align: left;
  font-weight: bold;
  padding-bottom: 12px;
  color: #0d47a1;
}

.contact-im2 {
  text-align: left;
  font-weight: bold;
  padding-bottom: 12px;
  color: #0d47a1;
}

.contact-text-t {
  background-color: rgba(243, 243, 245, 0.788);
  border: solid 1px;
  width: 60%;
  height: 200px;
  float: left;
}

.contact-jh {
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding: 24px 0px;
  clear: both;
}

.contact-nr ul li {
  text-align: left;
  height: 65px;
}

.contact-ck {
  text-align: left;

  padding: 15px;
}
.contact-ul {
  text-align: left;
}
.contact-cd-title {
  font-size: 35px;
  padding-top: 12px;
  font-weight: bold;
}

.pa-4ma-4 {
  padding: 24px;
  margin: 0px 200px;
  background-color: #f5f5f5 !important;
}

.span-title {
  font-size: 20px;
  color: black;
}

.contact-btnbtn {
  padding: 12px;
}
.contact-ck-card {
  margin: 12px 200px 0px 200px;
  padding: 12px;
  background-color: #f5f5f5 !important;
}
@media (max-width: 480px) {
  .contact-title {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    opacity: .8;
    font-weight: bold;
    text-align: left;
  }
  .contact-ck-card {
   padding: 16px;
    margin: 0px;
    font-size: 12px;
  }
  .font-small {
    font-size: 10px;
  }
  .v-icon {
    font-size: 12px !important;
  }
  .contact-nr {
    height: 180px;
  }
  .contact-nr ul li {
    height: 40px;
  }
  .v-label {
    font-size: 10px;
  }
  .v-input {
    font-size: 10px;
  }
  .contact-sub-title {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    opacity: .8;
    padding-top: 12px;
  }
  .contact-navi {
    font-size: 12px !important;
    text-align: left;
    opacity: .8;
  }
  .contact-im {
    text-align: left;
    font-weight: bold;
    padding-bottom: 6px;
    color: #0d47a1;
    font-size: 12px;
  }
  .contact-im2 {
    text-align: left;
    font-weight: bold;
    padding-bottom: 12px;
    color: #0d47a1;
    font-size: 12px;
  }
  .contact-text-t {
    background-color: rgba(243, 243, 245, 0.788);
    border: solid 1px;
    width: 100%;
    height: 80px;
    float: left;
    font-size: 10px;
  }
  .contact-jh {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 24px 0px;
    clear: both;
    opacity: .8;
  }
  .contact-cd-title {
    font-size: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: bold;
    opacity: .8;
    text-align: left;
  }
  .pa-4ma-4 {
    padding: 16px  !important;
margin: 0px; 
  }
}
</style>