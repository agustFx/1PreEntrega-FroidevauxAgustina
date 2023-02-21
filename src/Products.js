export default class Product {
    constructor(id, title, description, price, thumbnail, code, stock = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;

        if (!id) {
            throw new Error('ID ES UN CAMPO OBLIGATORIO');
        }
        if (!title) {
            throw new Error('TITLE ES UN CAMPO OBLIGATORIO');
        }
        if (!description) {
            throw new Error('DESCRIPTION ES UN CAMPO OBLIGATORIO');
        }
        if (!price) {
            throw new Error('PRICE ES UN CAMPO OBLIGATORIO');
        }
        
        if (!code) {
            throw new Error('CODE ES UN CAMPO OBLIGATORIO');
        }
        if (!stock) {
            throw new Error('STOCK ES UN CAMPO OBLIGATORIO');
        }

    }
}


