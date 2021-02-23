 <template>
  <div class="footer-color">
    <div class="footerdiv">
      <div class="footer-title">株式会社　店厨サポート</div>
      <div class="map">
        <ul>
          <li>〒442-0807 愛知県豊川市谷川町中道181番地</li>
          <li>TEL：0533-00-0000</li>
        </ul>
      </div>
      <div class="footer-btn">
        <ul>
          <li>
            <v-btn
              class="footer-btn-class"
              color="#ffffff"
              plain
              small
              to="/rule"
              nuxt
              >利用規約</v-btn
            >
          </li>
          <li>
            <v-btn
              class="footer-btn-class"
              color="#ffffff"
              plain
              small
              text
              to="/pri"
              nuxt
              >プライバシーポリシー</v-btn
            >
          </li>
          <li>
            <v-btn
              class="footer-btn-class"
              color="#ffffff"
              plain
              small
              text
              to="/stcc"
              nuxt
              >特定取引法表示</v-btn
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
li{
  list-style: none;
}
.footer-color {
  background-color: #0d47a1;
  color: #ffffff !important;
    opacity: .9;

}

.footer-title {
  font-size: 35px;
  padding-left: 6px;
}
.footer-list {
  list-style: none;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 10px;
}

.footer-list li {
  width: 200px;
  text-align: center;
  display: inline-block;
}

.footer-list li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
.map {
  text-align: left;
  display: inline-block;
  padding-left: 6px;
}

.map-title li {
  display: inline-block;
}
.map-title li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-align: left;
}
.map li {
  list-style: none;
}
.footer-btn {
  overflow: hidden;
  margin-top: 15px;
  padding-left: 6px;
}

.footer-btn ul li {
  float: left;
  border-right: solid 0.5px;
  color: white !important;
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
     opacity: 1.0; 
}
@media (max-width: 480px) {
  .footer-btn a {
    color: white !important;
    height: 20px !important;
  }
  .footer-color {
    background-color: #0d47a1;
    color: #ffffff !important;
    height: 100px;
    clear: both;
    border-top: solid 3px;
    padding-top: 10px;
    opacity: .9;
  }
  .footer-title {
    font-size: 15px;
    padding-left: 6px;
    font-weight: bold;
  }
  .map {
    text-align: left;
    display: inline-block;
    padding-left: 6px;
    font-size: 12px;
  }
  .footer-color {
    bottom: 0; /*下に固定*/
  }
  .footer-btn-class {
    font-size: 10px !important;
  }
  .footer-btn {
    overflow: hidden;
    margin-top: 3px;
    height: 20px !important;
    text-align: center;
    opacity: 1.0 !important;
  }
  .footer-btn ul li {
    height: 20px;
  }
}
</style>