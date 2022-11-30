import express from "express";
import { connectDB } from "./config/DB";
import schoolRoute from "./routes/schoolRoute";

const app = express();

// methods

connectDB();

// middleware

app.use(express.json());

app.use(`/api/v1/school`, schoolRoute);

const PORT = process.env.port || 5002;
app.listen(PORT, () => {
  console.log("server run on port : " + PORT);
});
