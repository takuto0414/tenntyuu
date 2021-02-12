 <template>
  <div>
    <div class="footer-color">
      <footer>
        <div class="footerdiv">
          <div class="footer-title">株式会社　店厨サポート</div>
          <div class="map">
            <ul>
              <li>〒442-0807 愛知県豊川市谷川町中道181番地</li>
              <li>TEL0533-00-0000</li>
            </ul>
          </div>
          <div class="footer-btn">
            <ul>
              <li><v-btn plain small  to="/rule" nuxt>利用規約</v-btn></li>
              <li>
                <v-btn plain small text to="/pri" nuxt
                  >プライバシーポリシー</v-btn
                >
              </li>
              <li>
                <v-btn plain small text to="/stcc" nuxt>特定取引法表示</v-btn>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style>
.footer-color {
  background-color: #3f70bb;
  color:#ffffff !important;
}

footer {
 
  border-top: solid 5px #ffffff;
}

.footer-title {
  font-size: 35px;
  padding-left:6px;
  
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
  background-color: #333;
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
  padding-left:6px;
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
  padding-left:6px;
}
.footer-btn li {
  float: left;
  border-right: solid 0.5px;
  border-right-color: black;
  color:white !important;
}
@media (max-width: 480px) {
.footer-color{
    bottom: 0; /*下に固定*/
}}
</style>