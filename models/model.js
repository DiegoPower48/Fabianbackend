import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    usuario: { type: String },
    contraseña: { type: String },
  },
  { collection: "Usuarios" }
);

const modelo = mongoose.model("Usuario", userSchema);

export default modelo;
