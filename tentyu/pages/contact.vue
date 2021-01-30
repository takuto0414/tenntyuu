<template>
  <div>
    <div v-show="!isConfirm">
      <div class="contact-title">お問い合わせ</div>
      <div class="contact-navi">
        お客様からのご質問などをこちらのお問合せフォームにて受け付けております。<br />項目を記入後確認ボタンを押してください。
      </div>
      <div class="contact-sub-title">お問い合わせ入力</div>

      <div class="contact-nkm">
        <v-card class="pa-4ma-4">
          <v-radio-group v-model="contactInformation.radios">
            <template>
              <div class="contact-im">お問い合わせ種類</div>
            </template>
            <v-radio
              value="ご購入頂いた商品等に関するお問い合わせ(機器の不具合、故障等)"
            >
              <template v-slot:label>
                <div>
                  ご購入頂いた商品等に関するお問い合わせ<br />(機器の不具合、故障等)
                </div>
              </template>
            </v-radio>
            <v-radio value="その他のお問い合わせ(商品のお見積もり依頼、質問等)">
              <template v-slot:label>
                <div>
                  その他のお問い合わせ<br />(商品のお見積もり依頼、質問等)
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
        </v-card>
      </div>
      <div class="contact-jh">お客様情報</div>

      <div class="contact-nr">
            <v-form>
        <ul>
          <li>
              <v-row
                ><v-col cols="" sm="" md="" class="cols-m">
                  <v-text-field
                    v-model="contactInformation.storeName"
                    label="店舗名/会社名"
                    filled
                   
                  ></v-text-field> </v-col
              ></v-row>
          </li>
          <li>
              <v-row
                ><v-col cols="" sm="" md="" class="cols-m">
                  <v-text-field
                    v-model="contactInformation.name"
                    label="氏名"
                    filled
                  ></v-text-field> </v-col
              ></v-row>
          </li>
          <li>
              <v-row
                ><v-col cols="" sm="" md="" class="cols-m">
                  <v-text-field
                    v-model="contactInformation.address"
                    label="住所"
                    filled
                  ></v-text-field> </v-col
              ></v-row>
          </li>
          <li>
             <v-row
                ><v-col cols="" sm="" md="" class="cols-m">
            <v-text-field
              v-model="contactInformation.email"
              label="メールアドレス"
              filled
            ></v-text-field></v-col
              ></v-row> 
          </li>
          <li>
              <v-row
                ><v-col cols="" sm="" md="" class="cols-m">
                  <v-text-field
                    v-model="contactInformation.tel"
                    label="電話番号"
                    filled
                  ></v-text-field></v-col
              ></v-row> 
          </li>
        </ul>
            </v-form>
      </div>

      <div>
        <v-btn elevation="2" plain rounded text @click="showConfirm"
          >確認</v-btn
        >
      </div>
    </div>
    <div v-show="isConfirm">
      <div class="contact-cd-title">入力項目確認</div>
      <div class="contact-ck">
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.radios }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.content }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.Storename }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.name }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.address }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.email }}</v-card
          >
        </div>
        <div>
          <v-card disabled elevation="11" outlined tile>
            {{ contactInformation.tel }}</v-card
          >
        </div>
      </div>

      <div>
        <v-btn href="/contact" elevation="2" plain rounded text>修正</v-btn
        >　<v-btn
          @click="submit"
          elevation="2"
          plain
          rounded
          text
          to="/contact-comp"
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
        address: "",
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
      console.log("submit call");
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
    },
  },
};
</script>
<style>
li {
  list-style: none;
}
.contact-title {
  font-size: 20px;
  font-weight: bold;
}
.contact-sub-title {
  font-size: 20px;
  font-weight: bold;
}
.contact-navi {
  font-size: 15px;
  margin: 5px 500px;
  text-align: left;
}
.contact-nkm {
  margin: 5px 500px;
}
.contact-im {
  text-align: left;
  font-weight: bold;
}
.contact-im2 {
  text-align: left;
  font-weight: bold;
}
.contact-text-t {
  background-color: rgba(243, 243, 245, 0.788);
  border: solid 1px;
  width: 333px;
}
.contact-jh {
  font-size: 25px;
  font-weight: bold;
}

.contact-nr {
  margin: 5px 500px;
}

.contact-nr ul li {
  text-align: left;
}
.contact-ck {
  margin: 0px 500px;
  text-align: left;
  padding: 15px;
}
.contact-cd-title {
  font-size: 20px;
  font-weight: bold;
}
.pa-4ma-4 {
  padding: 0px 12px 0px 12px;
}
.cols-m{
  margin:0px;
  padding: 0;
}
</style>