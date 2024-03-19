const { deleteActivityDb } = require("../controllers/deleteActivityDb");

const deleteActivityHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteActivityDb(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  deleteActivityHandler,
};
