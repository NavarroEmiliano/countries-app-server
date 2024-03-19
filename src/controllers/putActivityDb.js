const { Activity, Country } = require("../db");

const putActivityDb = async (body) => {
  const { id, name, difficulty, duration, season, countryId } = body;

  if (!id || !name || !difficulty || !duration || !season || !countryId)
    throw new Error("La información recibida está incompleta");


  const activity = await Activity.findByPk(id, {
    include: {
      model: Country,
      through: { attributes: [] },
    },
  });


  if (activity) {
    await activity.update({ name, difficulty, duration, season });

    await activity.setCountries(countryId);

    return activity;
  }

  throw new Error(`La actividad con id: ${id} no se encuentra en la base de datos`);
};

module.exports = {
  putActivityDb,
};
