

class CrudRepository {
    constructor(model) {
        this.model = model
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw new Error("Bad Request");
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            throw new Error("Bad Request");
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            throw new Error("Bad Request");
        }

    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {new: true});
            return response;
        } catch (error) {
            throw new Error("Bad Request");
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            throw new Error("Bad Request");
        }
    }
}

module.exports = CrudRepository;