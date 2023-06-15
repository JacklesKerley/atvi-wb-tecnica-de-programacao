import { Request, Response } from 'express';
import ProdutosConsumidos from '../models/produtosConsumidos';

class ProdutosConsumidosController {
  public async listar(req: Request, res: Response): Promise<void> {
    try {
      const produtosConsumidos = await ProdutosConsumidos.findAll();
      res.json(produtosConsumidos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os produtos consumidos' });
    }
  }

  public async criar(req: Request, res: Response): Promise<void> {
    try {
      const { produtoId, clienteId } = req.body;
      const produtoConsumido = await ProdutosConsumidos.create({ produtoId, clienteId });
      res.status(201).json(produtoConsumido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o produto consumido' });
    }
  }

  public async atualizar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { produtoId, clienteId } = req.body;

      const produtoConsumido = await ProdutosConsumidos.findByPk(id);
      if (!produtoConsumido) {
        res.status(404).json({ error: 'Produto consumido não encontrado' });
        return;
      }

      await produtoConsumido.update({ produtoId, clienteId });
      res.json(produtoConsumido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o produto consumido' });
    }
  }

  public async deletar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const produtoConsumido = await ProdutosConsumidos.findByPk(id);
      if (!produtoConsumido) {
        res.status(404).json({ error: 'Produto consumido não encontrado' });
        return;
      }

      await produtoConsumido.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o produto consumido' });
    }
  }
}

export default new ProdutosConsumidosController();
