import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

app.use(cors({ origin: "*", methods: ["POST", "OPTIONS"] }));

app.use(express.json());

// mongoose.connect("URL de MONGODB");
// mongoose.connection.on("connected", () => {
//   console.log("Conectado a MongoDB");
// });
// mongoose.connection.on("error", (err) => {
//   console.error("Error al conectar a MongoDB: ", err);
// });

app.use(router);

app.listen(3000, () => {
  console.log("servidor corriendo en http://localhost:" + 3000);
});
