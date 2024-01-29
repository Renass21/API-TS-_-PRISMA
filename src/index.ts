import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
    res.sendStatus(200);

})

app.listen(3333, () => {
    console.log("A API está rodando!");
});