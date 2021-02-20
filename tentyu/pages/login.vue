<template>
  <div>
    <div>
      <div class="login-title">ログイン</div>
      <v-card class="login-card">
        <div class="login-text">
          <v-row align="center" class="mx-4">
            <span class="white--text mb-4">{{ errorMessage }}</span>
          </v-row>

          <ul class="login-list">
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
            <v-btn class="mainte-btn" large depressed nuxt> ログイン</v-btn>
          </a>
          <a class="inquire-link" @click="logoutUser">
            <v-btn class="mainte-btn" large elevation="" nuxt>
              ログアウト</v-btn
            >
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
import axios from "axios";

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
    logoutUser() {
      firebase.auth().signOut();
      this.$store.commit("auth", {
        planName: null,
      });
    },
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
      // ログイン成功後の処理
      console.log(res);
      const db = firebase.firestore();
      let user = db.collection("user");
      user.get().then((snapshot) => {
        snapshot
          .forEach((doc) => {
            // ログイン成功したメールアドレスと一致するユーザーのプラン情報を送る
              if (this.user.email, this.user.password===user) {
                console.log("ユーザーがログインしています。");
              } else {
                // ユーザーはログインしていません。
              }
            
            let data = doc.data();
            console.log("SUCEESS getting document:", data);
            this.$store.commit("auth", {
              planName: data.radios,
            });
          })

          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      });
      this.$router.push({ path: "/" });
    },

    showError() {
      this.errorMessage = "メールアドレス、またはパスワードが違います。";
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
  padding-top: 12px;
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
  margin: 20px 400px 0px 400px;
  padding: 0px 40px;
  background-color: #f5f5f5 !important;
}

@media (max-width: 480px) {
  .login-title {
    font-size: 15px;
    padding-top: 6px;
  }
  .non-rg {
    font-size: 6px !important;
    color: #0d47a1;
  }
  .login-card {
    height: 220px;
    margin: 18px 40px 6px 40px;
  }
  .login-text li {
    height: 40px;
  }
  .mx-4 {
    font-size: 12px;
    padding-top: 20px;
  }
  .login-bt {
    margin-top: 25px !important;
  }
  .v-text-field {
    margin-top: 0px !important;
    padding-top: 0px !important;
  }
  .login-list {
    margin: 0px 24px;
    padding-top: 0px !important;
  }
}
</style>
