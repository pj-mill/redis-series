using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RedisCache.Models;

namespace RedisCache.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Category> Categories {get; set;}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}