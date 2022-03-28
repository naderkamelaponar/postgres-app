// بسم الله الرحمن الرحيم
import express from "express";
const port = 3000;
const app = express();
const address = "0.0.0.0:" + port;
app.get("/", (req, res) => {
    res.send("Allah");
});
app.listen(port, () => {
    console.log(`server is live @${address}`);
});
export default app;
