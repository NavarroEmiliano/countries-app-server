const { Activity, Country } = require("../db");

const getAllActivitiesDb = async () => {
  const allActivities = await Activity.findAll({
    include: {
      model: Country,
    },
  });
  if (allActivities.length) return allActivities;
  return "No hay actividades en la base de datos"
};

module.exports = {
  getAllActivitiesDb,
};
