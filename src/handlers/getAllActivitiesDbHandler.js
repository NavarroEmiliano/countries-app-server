const { getAllActivitiesDb } = require("../controllers/getAllActivitiesDb");

const getAllActivitiesDbHandler = async (req, res) => {
  try {
    const response = await getAllActivitiesDb();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllActivitiesDbHandler,
};
