const server = require('./src/server')
const { conn } = require('./src/db.js')
const { apiLoader } = require('./src/apiLoader')
require('dotenv').config()
const PORT = process.env.PORT || 3001

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      await apiLoader()
      console.log(`Server listening on port ${PORT}`)
    })
  })
  .catch(error => console.error(error))
