<template>
  <div>
    <div class="check-title">入力項目確認</div>
    <div class="check-sk">
      <div>お問い合わせ内容</div>
      <div class="check-im">お問い合わせ種類</div>
      <ul>
        <li>ご購入頂いた商品等に関するお問い合わせ(機器の不具合、故障等)</li>
        <li>その他のお問い合わせ(商品のお見積もり依頼、質問等)</li>
      </ul>
      <div class="check-text">
        <div class="check-im2">お問い合わせ内容</div>
      </div>
      <div class="check-jh">お客様情報</div>
      <div class="check-nr">
        <ul>
          <li>店舗名/会社名</li>
          <li>氏名</li>
          <li>住所</li>
          <li>電話番号</li>
        </ul>
      </div>
    </div>
    <div><a href="/contact">修正</a> <a href="contact-comp">送信</a></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
li {
  list-style: none;
}
.check-title {
  font-size: 35px;
  font-weight: bold;
}
.check-sk {
  border: solid 1px;
  margin: 5px 300px;
}
.check-im {
  text-align: left;
}
.check-im2 {
  text-align: left;
}
.check-nr {
  text-align: left;
}
.check-nr ul li {
  border-bottom: solid 1px;
  margin: 5px 0px;
}
</style>