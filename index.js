const http = require("http")
const app = require("./src/app")
const config = require("./src/config")
require("./src/database/connection")

const PORT = config.server.port;

(() => {
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.info(`Server running on http://localhost:${PORT}`);
  })
})();
