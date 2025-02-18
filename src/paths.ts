import { addAliases } from "module-alias";
import * as path from "path";

const baseUrl = path.resolve(__dirname);

addAliases({
  "@": baseUrl,
  "@/core": path.join(baseUrl, "core"),
  "@/modules": path.join(baseUrl, "modules"),
});
