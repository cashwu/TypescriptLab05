# Lab 05

## 練習步驟

1. 建立一個新的 WebApi 專案

1. 安裝 EntityFramework

1. 建立 BlogDbContext

    ``` csharp
    public class BlogDbContext: DbContext
    {
        public DbSet<Post> Posts { get; set; }
    }
    ```

1. 建立 Post

    ``` csharp
    public class Post
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }
    }
    ```

1. 產生 Api Controller

1. 新增 Service.ts

   ``` typescript
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
       Id: number;

       Name: string;

       Price: number;
   }

   class ProductService extends BaseService<Product> {
       constructor() {
           super('posts');
       }
   }

   var productService = new ProductService();

   productService.Create({
       Id: undefined,
       Name: 'New Product',
       Price: 100
   });
   ```


