const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getAllCountriesDb = async (name) => {
  if (name) {

    const countryFinded = await Country.findOne({
      where: {
        name: {
          [Op.iLike]: `${name}`,
        },
      },
      include: {
        model: Activity, 
        through: { attributes: [] },
      },
    });

    if (!countryFinded) throw new Error("No se encontro un pais por Query");

    return countryFinded;
  }


  const allCountries = await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });

  return allCountries;
};

module.exports = {
  getAllCountriesDb,
};
