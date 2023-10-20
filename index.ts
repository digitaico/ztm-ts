import express, { Express, Request, Response, Application } from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();
console.log(process.env.PORT);
//const PORT: number = parseInt(process.env.PORT || "", 10) || 8000;
const PORT = process.env.PORT;

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:8000"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hola, welcome TS Jea`);
});

app.listen(PORT, () => {
  console.log(`[Server]: Is running on http://localhost:${PORT}`);
});
