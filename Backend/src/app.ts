import express from "express";
import BodyParser from "body-parser";


const app = express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});