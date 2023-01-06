import axios from 'axios';
import joinSignature from "@ethersproject/bytes";


const timeNow = parseInt(Date.now() / 1000);
const address = await global.eth_owallet.request({"method":"eth_requestAccounts","params":[]});

const domain = [
    { name: "url", type: "string" },
    { name: "time", type: "uint256" },
];

const data = [
    { name: "action", type: "string" },
    { name: "account", type: "address" },
];

const msgParams = JSON.stringify({
    domain: {
        url: "eueno.io",
        time: timeNow,
    },
    message: {
        action: "Eueno login",
        account: address,
    },
    primaryType: "Data",
    types: {
        EIP712Domain: domain,
        Data: data,
    },
});

async function signV4(data) {
    const res = await window.eth_owallet.request({
      method: "eth_signTypedData_v4",
      params: [
        {
          typedMessage: JSON.parse(data),
          version: "V4",
          defaultCoinType: 60,
        },
      ],
    });
    const signature = JSON.parse(res.result);
    const r = "0x" + Buffer.from(signature.r.data).toString("hex");
    const s = "0x" + Buffer.from(signature.s.data).toString("hex");
    const v = signature.v;
    const hexSignature = joinSignature({
      r,
      s,
      recoveryParam: v === 27 ? 0 : 1,
    });
    return { v, r, s, signature: hexSignature };
}


let { signature } = await signV4(msgParams);

const response = await axios.post(`https://developers.eueno.io/api/v1/users/login`, {
        timestamp: timeNow,
        address: account,
        signature,
});