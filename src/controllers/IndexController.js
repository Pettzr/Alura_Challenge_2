class Controller {
    constructor(model) {
        this.model = model;
    }

    async getElementsController( req, res) {
        try {
            const query = req.query.descricao;
            if (query) {
                const data = await this.model.getQueryDescricaoElementService(query);
                return res.status(200).json(data);
            } else {
                const data = await this.model.getAllElementsService();
                return res.status(200).json(data);
            }

  
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getIdElementController( req, res) {
        try {
            const id = req.params.id;
            const data = await this.model.getIdElementService(id);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getElementByDateController( req, res) {
        const { ano, mes } = req.params;
        try {
            const data = await this.model.getElementByDateService(ano, mes);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async postElementController (req, res) {
        try{
            const data = req.body
            const createItem = await this.model.postElementService(data);
            return res.status(201).json(createItem);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async putIdElementController( req, res) {
        try {
            const id = req.params.id;
            const newElement = req.body;
            const data = await this.model.putIdElementService(id, newElement);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteIdElementController( req, res) {
        try {
            const id = req.params.id;
            await this.model.deleteIdElementService(id);
            return res.status(200).json({ "message" : "Elemento deletado com sucesso"});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
module.exports = Controller;