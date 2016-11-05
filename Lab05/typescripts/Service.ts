/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

class BaseService<T> {
    constructor(public type: string) {
    }

    GetList(): JQueryXHR {
        var url = `/api/${this.type}`;

        return $.get(url);
    }

    Create(data: T) {
        var url = `/api/${this.type}`;

        return $.post(url, data);
    }
}

interface Product {
    //Id: number;

    Name: string;

    Price: number;
}

class ProductService extends BaseService<Product> {
    constructor() {
        super('post');
    }
}

var productService = new ProductService();

productService.Create({
    //Id: undefined,
    Name: 'New Product',
    Price: 100
});

productService.GetList().done(data => {
    console.log(data);    
});

