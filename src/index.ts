import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { taskEndpoint } from "./controllers/taskEndpoint";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Task loader server listening at http://localhost:${PORT}`);
});

app.post("/task", taskEndpoint);
