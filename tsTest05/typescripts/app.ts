/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

// 泛型

interface IPost {
    id: number;
    title: string;
    content: string;
}

let post : IPost = {
    id: 1,
    title: "title",
    content: "content"
}

class ServiceBase<T extends IPost> {

    baseUrl: string;

    constructor(private urlPrefix: string) {
        this.baseUrl = `api/${this.urlPrefix}`;
    }

    GetList() : JQueryXHR {
        return $.get(this.baseUrl);
    }

    Get(id: number) : JQueryXHR {
        return $.get(`${this.baseUrl}/${id}`);
    }

    Create(data: T) : JQueryXHR {
        return $.post(this.baseUrl, data);
    }

    Update(data: T) : JQueryXHR {
        return $.ajax({
            url: `${this.baseUrl}/${data.id}`,
            method: "PUT",
            data: data
        });
    }

    Delete(id: number) {
        return $.ajax({
            url: `${this.baseUrl}/${id}`,
            method: "DELETE"
        });
    }
}

class PostService extends ServiceBase<IPost> {
    constructor() {
        super("Posts");
    }
}