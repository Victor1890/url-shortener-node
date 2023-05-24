const http = require("http")
const app = require("./app")
const config = require("./config")
require("./database/connection")

const PORT = config.server.port;

(() => {
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.info(`Server running on http://localhost:${PORT}`);
  })
})();
