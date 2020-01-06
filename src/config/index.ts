import path from "path";
import dotenv from "dotenv";
import pkg from "../../package.json";

const envRootPath = path.resolve(process.cwd(), ".env");
const config = { path: `${envRootPath}` };
dotenv.config(config );

export default {
  port: process.env.PORT,
  host: process.env.HOST,
  basePath: process.env.BASE_PATH,
  mongoUri: process.env.MONGO_URI,
  privateKey: process.env.PRIVATE_KEY,
  pkg
};
