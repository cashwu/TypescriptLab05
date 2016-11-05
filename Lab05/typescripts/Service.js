/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseService = (function () {
    function BaseService(type) {
        this.type = type;
    }
    BaseService.prototype.GetList = function () {
        var url = "/api/" + this.type;
        return $.get(url);
    };
    BaseService.prototype.Create = function (data) {
        var url = "/api/" + this.type;
        return $.post(url, data);
    };
    return BaseService;
}());
var ProductService = (function (_super) {
    __extends(ProductService, _super);
    function ProductService() {
        _super.call(this, 'post');
    }
    return ProductService;
}(BaseService));
var productService = new ProductService();
productService.Create({
    //Id: undefined,
    Name: 'New Product',
    Price: 100
});
productService.GetList().done(function (data) {
    console.log(data);
});
