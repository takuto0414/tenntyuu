<template>
  <div>
    <div>
      <div class="login-title">ログイン</div>
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
          <v-btn elevation="2" plain rounded text>ログイン</v-btn></a
        >
      </div>

      <div>
        <v-btn class="non-rg" color="accent" plain small text to="/register"
          >お客様情報登録がお済みでない方</v-btn
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
        .catch(
          this.showError("メールアドレスもしくはパスワードが間違っています")
        );
    },
    auth(res) {
      console.log("auth", res.user.emailVerified);
      if (res.user.emailVerified == false) {
        console.log("emailVerified error");
        this.showError(
          "メールリンクをクリックして、認証後再度ログインしてください。"
        );
        return;
      }
      this.$router.push({ path: "/home" });
    },
    showError(msg) {
      this.errorMessage = msg;
    },
  },
};
</script>
<style>
.login-title {
  font-size: 20px;
  font-weight: bold;
}
.login-list {
  margin: 40px 500px 0px 500px;
}
.non-rg{
    text-decoration: underline;
}
.login-text li{
padding-top: 30px;
height: 65px;
}
.white--text{
  color: red;
}
.login-bt{
  margin-top:50px;
}
</style>