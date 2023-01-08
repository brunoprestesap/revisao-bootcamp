import express from "express";
import * as dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRoute);

app.listen(8080, () => {
    console.log(`App up and runing on port http://localhost:8080`);
});