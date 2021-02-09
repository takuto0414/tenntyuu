<template>
  <div>
    <div>
      <div class="login-title">ログイン</div>
      <v-card class="login-card">
        <div class="login-text">
          <ul class="login-list">
            <v-row align="center" class="mx-4">
              <span class="white--text mb-4">{{ errorMessage }}</span>
            </v-row>
            <li>
              <v-text-field
                v-model="user.email"
                label="メールアドレス"
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
        <div class="login-bt">
          <a class="inquire-link" @click="login">
            <v-btn class="mainte-btn" large elevation="" nuxt> ログイン</v-btn>
          </a>
        </div>
        <div>
          <a class="non-rg" href="/register">お客様情報登録がお済みでない方</a>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",

      },
      error: false,
      errorMessage: "",
      
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(this.auth)
        .catch(this.showError);

      const db = firebase.firestore();
      let user = db.collection("user");
      user.get().then((snapshot) => {
        snapshot
          .forEach((doc) => {
            let data = doc.data();
            console.log("SUCEESS getting document:", data);
            this.user.push(data);
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      });
    
    },
    auth(res) {
      console.log("auth", res.user.emailVerified);
      console.log("auth", res);
      if (res.user.emailVerified == false) {
        console.log("emailVerified error");
        this.showErrornewuser(
          "メールリンクをクリックして、認証後再度ログインしてください。"
        );
        return;
      }
      this.$store.commit("auth", {
        planName: ''
      });
      this.$router.push({ path: "/home" });
    },
    
    showError() {
      this.errorMessage = "エラーが発生しました";
    },
    showErrornewuser(msg) {
      this.errorMessage = msg;
    },
  },
};
</script>
<style>
.login-title {
  font-size: 35px;
  font-weight: bold;
}
.login-list {
  margin: 0px 24px;
  padding-top: 30px;
 
}
@media (max-width: 1000px) {.non-rg {
  font-size: 20px;
  color:red;
}
}



.non-rg {
  font-size: 12px;
}
.login-text li {
  padding-top: 30px;
  height: 65px;
}
.white--text {
  color: red;
}
.login-bt {
  margin-top: 50px;
}
.login-card {
  height: 300px;
  margin: 20px 200px 0px 200px;
}
</style>