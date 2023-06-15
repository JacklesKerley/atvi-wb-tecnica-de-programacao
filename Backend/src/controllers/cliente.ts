import { Request, Response } from 'express';
import Cliente from '../models/cliente';
import RG from '../models/rg';
import Telefone from '../models/telefone';
import { QueryTypes } from 'sequelize/types';
import sequelize from "../database"; 





class ClienteController {
    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await Cliente.findAll({
                include: [RG, Telefone]
            });
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar os clientes.' });
        }
    }


    public async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findByPk(id, {
                include: [RG, Telefone]
            });
            if (cliente) {
                res.json(cliente);
            } else {
                res.status(404).json({ error: 'Cliente não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar o cliente.' });
        }
    }


    public async create(req: Request, res: Response): Promise<void> {
        const { nome, genero, cpf, rg1, rg2, tel1, tel2 } = req.body;
      
        try {
          const transaction = await sequelize.transaction();
      
          try {
            // Criar o cliente e obter o último ID inserido na tabela Cliente
            const cliente = await Cliente.create({ nome, genero, cpf }, { transaction });
            const ultimoId = await Cliente.max('id', { transaction });
      
            // Criar o RG associado ao cliente
            await RG.create({ rg1, rg2, idCliente: ultimoId }, { transaction });
      
            // Criar o Telefone associado ao cliente
            await Telefone.create({ tel1, tel2, idCliente: ultimoId }, { transaction });
      
            await transaction.commit();
      
            res.status(201).json(cliente);
          } catch (error) {
            await transaction.rollback();
            throw error;
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao criar o cliente.' });
        }
      }
      

      public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, genero, cpf, rg1, rg2, tel1, tel2 } = req.body;
      
        try {
          const transaction = await sequelize.transaction();
      
          try {
            // Buscar o cliente pelo ID
            const cliente = await Cliente.findByPk(id, { transaction });
      
            if (!cliente) {
              res.status(404).json({ error: 'Cliente não encontrado.' });
              return;
            }
      
            // Atualizar os campos do cliente
            await cliente.update({ nome, genero, cpf }, { transaction });
      
            // Atualizar o RG associado ao cliente
            const rg = await RG.findOne({ where: { idCliente: id }, transaction });
            if (rg) {
              await rg.update({ rg1, rg2 }, { transaction });
            } else {
              await RG.create({ rg1, rg2, idCliente: id }, { transaction });
            }
      
            // Atualizar o Telefone associado ao cliente
            const telefone = await Telefone.findOne({ where: { idCliente: id }, transaction });
            if (telefone) {
              await telefone.update({ tel1, tel2 }, { transaction });
            } else {
              await Telefone.create({ tel1, tel2, idCliente: id }, { transaction });
            }
      
            await transaction.commit();
      
            res.json(cliente);
          } catch (error) {
            await transaction.rollback();
            throw error;
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao atualizar o cliente.' });
        }
      }
      


      public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
      
        try {
          const transaction = await sequelize.transaction();
      
          try {
            // Buscar o cliente pelo ID
            const cliente = await Cliente.findByPk(id, { transaction });
      
            if (!cliente) {
              res.status(404).json({ error: 'Cliente não encontrado.' });
              return;
            }
      
            // Excluir o RG associado ao cliente, se existir
            await RG.destroy({ where: { idCliente: id }, transaction });
      
            // Excluir o Telefone associado ao cliente, se existir
            await Telefone.destroy({ where: { idCliente: id }, transaction });
      
            // Excluir o cliente
            await cliente.destroy({ transaction });
      
            await transaction.commit();
      
            res.status(204).end();
          } catch (error) {
            await transaction.rollback();
            throw error;
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao excluir o cliente.' });
        }
      }
      
}

export default new ClienteController();
