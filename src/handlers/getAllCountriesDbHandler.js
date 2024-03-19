const { getAllCountriesDb } = require("../controllers/getAllCountriesDb");

const getAllCountriesDbHandler = async (req, res) => {
  try {
  const { name } = req.query;

    const response = await getAllCountriesDb(name);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllCountriesDbHandler,
};
