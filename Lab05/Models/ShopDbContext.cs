using System.Data.Entity;

namespace Lab05.Models
{
    public class ShopDbContext : DbContext
    {
        public DbSet<Product> Product { get;  set; }
    }
}