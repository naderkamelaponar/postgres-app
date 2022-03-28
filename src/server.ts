// بسم الله الرحمن الرحيم
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import glopalError from "./middlewares/errors";
import config from "./config";
import db from "./database";
const port = config.port || 3000;
const app = express();
const address = "0.0.0.0:" + port;
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "too many requests",
});
app.use(limiter);
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(glopalError);
// db.connect().then((client) => {
//     return client
//         .query("SELECT NOW()")
//         .then((res) => {
//             console.log(res.rows);
//             client.release();
//         })
//         .catch((err) => {
//             client.release();
//             console.error(err);
//         });
// });

app.get("/", (req, res) => {
    res.send("بسم الله الرحمن الرحيم");
});
app.post("/", (req, res) => {
    res.json({
        msg: "Allah",
        data: req.body,
    });
});
app.use((_req, res) => {
    res.status(404).json({
        code: res.status,
        message: "route not existes",
    });
});
app.listen(port, () => {
    console.log(`server is live @${address}`);
});
export default app;
