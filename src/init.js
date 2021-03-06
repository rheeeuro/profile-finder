import "@babel/polyfill";
import "./db";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import "./models/Recruit";
import "./models/Resume";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ 서버 연결: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
