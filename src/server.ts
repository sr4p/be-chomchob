import bodyParser from "body-parser";
import express, { Application, Request, Response , NextFunction } from "express";
import { expressjwt, Request as JWTRequest } from "express-jwt";
import path from 'path'

const app: Application = express();
const port: number = 9999;

app.use(bodyParser.json());
app.use(
  expressjwt({
    secret: process.env.JWT_SECRET+"",
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) : any{
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    },
  })
);
app.use(express.static(path.resolve(__dirname, ".")));

app.get("/", (req: Request, res: Response) => {
  res.send({ status : true, message : "Say Hi. 🌱" });
});

app.listen(port, async() => {
  console.log(`Listening on port : ${port} 🌱`);
});
