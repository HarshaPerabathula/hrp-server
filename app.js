require("dotenv").config();
const express = require("express");
const authRoutes = require("./Routes/auth");
const http = require("http");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello response" });
});
app.use("/api/auth", authRoutes);

//database connection
const server = http.createServer(app);
server.listen(process.env.PORT, "localhost", async () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
