<template>
  <div class="login-vue">
    <div class="login-title">ログイン</div>
    <v-card class="login-card" flat>
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
          <v-btn class="mainte-btn-login" large depressed nuxt> ログイン</v-btn>
        </a>
        <a class="inquire-link" @click="logoutUser">
          <v-btn class="mainte-btn-login" large depressed nuxt> ログアウト</v-btn>
        </a>
      </div>
      <div class="login-register">
        <a class="non-rg" href="/register">お客様情報登録がお済みでない方</a>
      </div>
    </v-card>
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
            if (doc.email===res.email) {
              console.log("ユーザーがログインしています。");
            };
          
            let data = doc.data();
            console.log("SUCEESS getting document:", data);
            this.$store.commit("auth", {
              planName: data.radios,
            })
          })

         
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
.white--text {
  color: red;
}
.mainte-btn-login{
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 100px !important;
  font-weight: bold;
  background-color: #0d47a1 !important;
  color: white !important;
  height: 35px  !important;
}

.theme--light.v-icon {
  color: #0d47a1 !important;
}

.login-title {
  font-size: 30px;
  padding-bottom: 12px;
  padding-top: 12px;
  font-weight: bold;
  text-align: left;
  opacity: 0.8;
}
.non-rg {
  font-size: 18px ;
  color: #0d47a1;
}
.login-card {
  height: auto;
padding: 12px;
  margin: 12px 6px;
}

.login-text li {
  text-align: left !important;
}
.mx-4 {
  font-size: 18px;
  padding: 16px;
  margin-top: 16px;
}
.login-bt {
  margin-top: 80px;
}
.login-bt {
  margin-top: 0px !important;
  text-align: center;
}

.login-list {
  padding-top: 16px !important;
}
.login-vue {
  margin: 0px 50px;
}
.v-input--selection-controls__ripple {
  height: 0px !important;
}
.inquire-link {
  margin-top: 20px;
}
@media (max-width: 480px) {
  .login-title {
    font-size: 20px;
    padding-bottom: 12px;
    text-align: left;
    opacity: 0.8;
  }
  .non-rg {
    font-size: 12px !important;
    color: #0d47a1;
  }
  .login-card {
    height: auto;
    margin: 6px 0px 6px 0px;
  }
  .login-text li {
    height: 40px;
    text-align: left !important;
  }
  .mx-4 {
    font-size: 12px;
    padding: 16px;
    margin: 0px;
  }
  .login-bt {
    margin-top: 0px ;
    text-align: center;
  }
  .v-text-field {
    margin-top: 0px !important;
    padding-top: 0px !important;
  }
  .login-list {
    padding-top: 16px !important;
  }
  .login-vue {
  margin: 0px 30px;
  }
  .v-input--selection-controls__ripple {
    height: 0px !important;
  }
  .mainte-btn-login{
  margin-top: 10px;
  margin-bottom: 12px;
  padding: 0px 12px;
  width: 80px !important;
  font-weight: bold;
  background-color: #0d47a1 !important;
  color: white !important;
  height: 28px  !important;
}
}
</style>
