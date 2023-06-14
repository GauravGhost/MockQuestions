
class CrudRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        try {
            console.log(data);
            console.log(this.model);
            const response = await this.model.create(data);
            console.log("response", response);
            return response;    
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}


module.exports = CrudRepository;
