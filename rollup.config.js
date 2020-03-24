import "ts-node/register";

import client from "./config/client.ts";
import server from "./config/server.ts";
import serviceworker from "./config/service.ts";

export default {
  client,
  server,
  serviceworker
};
