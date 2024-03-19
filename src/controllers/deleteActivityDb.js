const { Activity } = require("../db");

const deleteActivityDb = async (id) => {
  const response = await Activity.destroy({
    where: {
      id,
    },
  });

  if(response === 1) return "Borrado exitoso"

  throw new Error("No se ha encontrado el elemento en la base de datos")
};

module.exports = {
  deleteActivityDb,
};
