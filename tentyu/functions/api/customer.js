exports.handler = async function(event) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const data = JSON.parse(event.body);
    // TODO 登録メールへ変更
    const customers = {
        email: "customer1@example.com",
        source: data.token
    };

    const customer = await stripe.customers.create(customers);

    exports.handler = async function(event) {
        const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

        const data = JSON.parse(event.body);
        // TODO 登録メールへ変更
        const customers = {
            email: "customer1@example.com",
            source: data.token
        };

        const customer = await stripe.customers.create(customers);

        console.log("customer", customer);

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type"
        };
        return {
            statusCode: 200,
            headers,
            body: result ? "NORMAL" : "ERROR"
        };
    };
}