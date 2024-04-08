import express from "express";
import * as dotenv from "dotenv-safe";
import routes from "./routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(`${process.env.API_PATH}`, routes(express));

app.listen(process.env.PORT, () => {
  console.log("Payment Server Is Listening On Port:", process.env.PORT);
});
