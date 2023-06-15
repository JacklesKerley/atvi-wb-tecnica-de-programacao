import { Request, Response } from 'express';
import Servico from '../models/servico';

class ServicoController {
  // Método para obter todos os serviços
  async getAll(req: Request, res: Response) {
    try {
      const servicos = await Servico.findAll();
      res.json(servicos);
    } catch (error) {
      console.error('Erro ao obter os serviços:', error);
      res.status(500).json({ error: 'Erro ao obter os serviços' });
    }
  }

  // Método para obter um serviço pelo ID
  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const servico = await Servico.findByPk(id);
      if (servico) {
        res.json(servico);
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao obter o serviço:', error);
      res.status(500).json({ error: 'Erro ao obter o serviço' });
    }
  }

  // Método para criar um novo serviço
  async create(req: Request, res: Response) {
    const { nome, valor } = req.body;

    try {
      const servico = await Servico.create({ nome, valor });
      res.status(201).json(servico);
    } catch (error) {
      console.error('Erro ao criar o serviço:', error);
      res.status(500).json({ error: 'Erro ao criar o serviço' });
    }
  }

  // Método para atualizar um serviço
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, valor } = req.body;

    try {
      const servico = await Servico.findByPk(id);
      if (servico) {
        servico.nome = nome;
        servico.valor = valor;
        await servico.save();
        res.json(servico);
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao atualizar o serviço:', error);
      res.status(500).json({ error: 'Erro ao atualizar o serviço' });
    }
  }

  // Método para excluir um serviço
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const servico = await Servico.findByPk(id);
      if (servico) {
        await servico.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Serviço não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao excluir o serviço:', error);
      res.status(500).json({ error: 'Erro ao excluir o serviço' });
    }
  }
}

export default new ServicoController();
