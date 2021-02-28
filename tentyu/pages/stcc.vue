<template>
  <div class="rule">
    <div class="rule-title">特定取引法表示</div>
    <v-card flat class="rule-card">
      <table class="table">
        <tbody>
          <tr>
            <td style="opacity: 0.6">販売事業者名</td>
            <td class="stcc-sub">平松　誠也</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">所在地</td>
            <td class="stcc-sub">愛知県豊川市谷川町中道181番地</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">電話番号</td>
            <td class="stcc-sub">080-2649-1610</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">受付時間</td>
            <td class="stcc-sub">9:00〜18:00</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">メールアドレス</td>
            <td class="stcc-sub">s1234567a0530@gmail.com</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">プラン価格</td>
            <td class="stcc-sub">メンテナンスページをご参照ください。</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">プラン代金以外の必要料金</td>
            <td class="stcc-sub">なし</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">サービス開始時期</td>
            <td class="stcc-sub">
              お客様情報登録を完了し、プラン選択後よりサービスを開始。
            </td>
          </tr>
          <tr>
            <td style="opacity: 0.6">お支払方法</td>
            <td class="stcc-sub">クレジットカード</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">キャンセル・退会</td>
            <td class="stcc-sub">利用規約、プライバシーポリシーをご参照ください。</td>
          </tr>
          <tr>
            <td style="opacity: 0.6">返金期限</td>
            <td class="stcc-sub">プラン登録より２週間以内にご連絡下さい。</td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </div>
</template>
<style>
  .table {
    font-size: 18px;
  }

  .stcc-sub {
    text-align: left;
    padding: 12px 0px 12px 24px;
    opacity: 0.9;
  }

@media (max-width: 480px) {
  .table {
    font-size: 12px;
  }

  .stcc-sub {
    text-align: left;
    width: 170px;
    padding: 12px 0px;
    opacity: 0.9;
  }
}
</style>