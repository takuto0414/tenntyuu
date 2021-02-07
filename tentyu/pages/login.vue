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
                filled
              ></v-text-field>
            </li>
            <li>
              <v-text-field
                v-model="user.password"
                label="パスワード"
                filled
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
      this.$store.dispatch("auth", {
        planName: 'プレミアム'
        
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
  margin: 20px 100px 0px 100px;
}
</style>