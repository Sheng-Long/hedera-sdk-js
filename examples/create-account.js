const { Client, Ed25519PrivateKey, AccountCreateTransaction } = require("@hashgraph/sdk");

async function main() {
    const operatorPrivateKey = process.env.OPERATOR_KEY;
    const operatorAccount = process.env.OPERATOR_ID;

    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();
    client.setOperator(operatorAccount, operatorPrivateKey);

    const privateKey = await Ed25519PrivateKey.generate();

    console.log("private =", privateKey);
    console.log("public =", privateKey.publicKey);

    const transactionId = await new AccountCreateTransaction()
        .setKey(privateKey.publicKey)
        .setInitialBalance(0)
        .execute(client);

    const transactionReceipt = await transactionId.getReceipt(client);

    console.log("receipt =", transactionReceipt);

    const newAccountId = transactionReceipt.getAccountId();

    console.log("accountId =", newAccountId);
}

main();

