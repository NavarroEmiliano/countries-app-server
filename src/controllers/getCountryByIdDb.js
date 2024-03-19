const { Country, Activity } = require("../db");

const getCountryByIdDb = async (idPais) => {
  if (idPais) {
    const countryId = await Country.findByPk(idPais, {
      include: {
        model: Activity,
        through: { attributes: [] },
      },
    });

    if (countryId) {
      return countryId;
    }
    throw new Error(
      `El pais con id: ${idPais} no se encuentra en la base de datos`
    );
  }
};

module.exports = {
  getCountryByIdDb,
};
