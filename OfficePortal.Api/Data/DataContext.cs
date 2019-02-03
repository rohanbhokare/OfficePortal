using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OfficePortal.Api.Core;
//using OfficePortal.Api.Models;

namespace OfficePortal.Api.Data
{
    public class DataContext: IdentityDbContext<User,Role, string>
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
            
        }

        public DbSet<CurrentOpening> CurrentOpenings {get;set;}
        

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
        }
    }
}
