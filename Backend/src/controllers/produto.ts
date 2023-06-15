import { Request, Response } from 'express';
import Produto from '../models/produto';


class ProdutoController {
  // Obtém todos os produtos
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
  }

  // Obtém um produto pelo ID
  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto' });
    }
  }

  // Cria um novo produto
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, valor } = req.body;
    try {
      const produto = await Produto.create({ nome, valor });
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar o produto' });
    }
  }

  // Atualiza um produto
  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, valor } = req.body;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.update({ nome, valor });
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
  }

  // Exclui um produto
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.destroy();
      return res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
  }
}

export default new ProdutoController();
