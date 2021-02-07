const axios = require('axios');
exports.createContacts = functions.region("asia-northeast1")
    .firestore.document('contacts/{contactId}').onCreate(async(snap, _) => {
        const data = snap.data();
        const backQuote = '\n';
        console.log('sendSlack call', data);

        const messageContent = backQuote + '店舗名/会社名: ' + data.storeName + backQuote + '氏名: ' + data.name + backQuote + 'メールアドレス: ' + data.email +
            backQuote + '連絡先: ' + data.tel + backQuote + 'お問い合わせ内容: ' + data.content




        const message = 'お問い合わせがありました。速やかに回答してください。\n' + messageContent;
        await sendSlack(message, '#contact-us', 'https://hooks.slack.com/services/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');

    });


exports.createUser = functions.region("asia-northeast1")
    .firestore.document('user/{userId}').onCreate(async(snap, _) => {
        const data = snap.data();
        const backQuote = '\n';
        console.log('sendSlack call', data);

        const messageContent = backQuote + '店舗名/会社名: ' + data.storeName + backQuote + '氏名: ' + data.name + backQuote + 'メールアドレス: ' + data.email +
            backQuote + 'パスワード: ' + data.password



        const message = '新規会員が登録完了しました。\n' + messageContent;
        await sendSlack(message, '#contact-us', 'https://hooks.slack.com/services/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');

    });
async function sendSlack(param, channel, url) {
    const payload = '{"text":"<!channel> ' + param + '"}';
    console.log('sendSlack payload', payload);
    const headers = { 'Content-Type': 'application/json' };
    try {
        await axios.post(url, payload, { headers: headers });
    } catch (error) {
        console.error(`Error occuered in sendSlack: ${error}`, error);
    }
}