import { Request, Response } from 'express';
import Cliente from '../models/cliente';



class ClienteController {
    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar os clientes.' });
        }
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findByPk(id);
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
        const { nome, genero, cpf } = req.body;
        try {
            const cliente = await Cliente.create({ nome, genero, cpf });
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o cliente.' });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, genero, cpf } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            res.status(404).json({ error: 'Cliente não encontrado.' });
            return;
        }
        try {
            await cliente.update({ nome, genero, cpf });
            res.json(cliente);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o cliente.' });
        }
    }


    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findByPk(id);
            if (cliente) {
                await cliente.destroy();
                res.status(204).end();
            } else {
                res.status(404).json({ error: 'Cliente não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o cliente.' });
        }
    }
}

export default new ClienteController();
