const { getCountryByIdDb } = require("../controllers/getCountryByIdDb")

const getCountryByIdDbHandler =async (req,res) =>{
try {
  const { idPais } = req.params;

  const response = await getCountryByIdDb(idPais);
  return res.status(200).json(response)
} catch (error) {
  return res.status(404).json({error:error.message})
}
}

module.exports = {
  getCountryByIdDbHandler
}