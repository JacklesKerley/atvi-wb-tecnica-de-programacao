import express from "express";
import bodyParser from "body-parser";
import sequelize from "./database"; 
import router from "./routes";
import cors from "cors";
import  Cliente  from "./models/cliente"; 
import RG from "./models/rg"
import Telefone from "./models/telefone"
import Produto from "./models/produto"
import Servico from "./models/servico"
import ProdutosConsumidos from "./models/produtosConsumidos";
import ServicosConsumidos from "./models/servicosConsumidos";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(cors());

(async () => {
  try {
    await sequelize.sync();
    await Cliente.sync();
    await RG.sync();
    await Telefone.sync();
    await Produto.sync();
    await Servico.sync();
    await ProdutosConsumidos.sync();
    await ServicosConsumidos.sync();
    console.log("Todas as tabelas foram criadas")

    app.listen(3000, () => {
      console.log("Ouvindo a porta 3000");
    });
  } catch (error) {
    console.error("Erro ao sincronizar as tabelas:", error);
  }
})();
