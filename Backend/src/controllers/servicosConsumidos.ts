import { Request, Response } from 'express';
import ServicosConsumidos from '../models/servicosConsumidos';

class ServicosConsumidosController {
  public async listar(req: Request, res: Response): Promise<void> {
    try {
      const servicosConsumidos = await ServicosConsumidos.findAll();
      res.json(servicosConsumidos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os serviços consumidos' });
    }
  }

  public async criar(req: Request, res: Response): Promise<void> {
    try {
      const { servicoId, clienteId } = req.body;
      const servicoConsumido = await ServicosConsumidos.create({ servicoId, clienteId });
      res.status(201).json(servicoConsumido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o serviço consumido' });
    }
  }

  public async atualizar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { servicoId, clienteId } = req.body;

      const servicoConsumido = await ServicosConsumidos.findByPk(id);
      if (!servicoConsumido) {
        res.status(404).json({ error: 'Serviço consumido não encontrado' });
        return;
      }

      await servicoConsumido.update({ servicoId, clienteId });
      res.json(servicoConsumido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o serviço consumido' });
    }
  }

  public async deletar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const servicoConsumido = await ServicosConsumidos.findByPk(id);
      if (!servicoConsumido) {
        res.status(404).json({ error: 'Serviço consumido não encontrado' });
        return;
      }

      await servicoConsumido.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o serviço consumido' });
    }
  }
}

export default new ServicosConsumidosController();
