/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var post = {
    id: 1,
    title: "title",
    content: "content"
};
var ServiceBase = (function () {
    function ServiceBase(urlPrefix) {
        this.urlPrefix = urlPrefix;
        this.baseUrl = "api/" + this.urlPrefix;
    }
    ServiceBase.prototype.GetList = function () {
        return $.get(this.baseUrl);
    };
    ServiceBase.prototype.Get = function (id) {
        return $.get(this.baseUrl + "/" + id);
    };
    ServiceBase.prototype.Create = function (data) {
        return $.post(this.baseUrl, data);
    };
    ServiceBase.prototype.Update = function (data) {
        return $.ajax({
            url: this.baseUrl + "/" + data.id,
            method: "PUT",
            data: data
        });
    };
    ServiceBase.prototype.Delete = function (id) {
        return $.ajax({
            url: this.baseUrl + "/" + id,
            method: "DELETE"
        });
    };
    return ServiceBase;
}());
var PostService = (function (_super) {
    __extends(PostService, _super);
    function PostService() {
        _super.call(this, "Posts");
    }
    return PostService;
}(ServiceBase));
$.myPlugin();
//# sourceMappingURL=app.js.map