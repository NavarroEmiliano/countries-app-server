const { postActivities } = require("../controllers/postActivities")

const postActivitiesHandler = async (req,res) =>{
  try {
    const body = req.body;

    const response = await postActivities(body);

    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json({error:error.message})
  }
}

module.exports = {
  postActivitiesHandler
}