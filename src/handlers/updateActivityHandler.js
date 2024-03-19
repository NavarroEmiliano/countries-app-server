const { putActivityDb } = require("../controllers/putActivityDb");

const updateActivityHandler = async (req, res) => {
  try {
    const body = req.body
    const response = await putActivityDb(body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({error:error.message})
  }
};

module.exports= {
  updateActivityHandler
}