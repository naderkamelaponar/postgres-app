// بسم الله الرحمن الرحيم
import express from "express";
const port = 3000;
const app = express();
const address = "0.0.0.0:" + port;
app.listen(port, () => {
  console.log(`server is live @${address}`);
});
