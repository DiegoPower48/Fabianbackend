import Usuario from "../models/model.js";

const controller = {
  login: async (req, res) => {
    const usuario = req.body.usuario;
    console.log(usuario);
    const contraseña = req.body.contraseña;
    console.log(contraseña);

    try {
      //   const usuarioCorrecto = await Usuario.findOne({ usuario });
      //   const contraseñaCorrecta = await Usuario.findOne({ contraseña });

      //   if (!usuarioCorrecto) {
      //     return res.status(400).send("Nombre de usuario incorrecto");
      //   }
      //   if (!contraseñaCorrecta) {
      //     return res.status(400).send("Contraseña incorrecta");
      //   }

      if (usuario != "admin") {
        return res.status(400).send("Nombre de usuario incorrecto");
      }
      if (contraseña != "admin") {
        return res.status(400).send("Contraseña incorrecta");
      }
      return res.status(200).send("login exitoso");
    } catch (error) {
      res.status(500).send("Error en el servidor");
    }
  },
};

export default controller;
