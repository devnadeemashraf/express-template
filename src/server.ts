import "module-alias/register";

import app from "@/app";

import config from "@/shared/config";

app.listen(config.port, () => {
  console.log(`Server Listening on ${config.host}:${config.port}`);
});
