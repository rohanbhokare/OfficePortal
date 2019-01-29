using System;
using System.Collections.Generic;
using System.Linq;
using OfficePortal.Api.Core;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace OfficePortal.Api.Data
{
    public class Seed
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;

        public Seed(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role {Name = "Employee"},
                    new Role {Name = "Admin"},
                    new Role {Name = "HR"},
                    new Role {Name = "VIP"},
                    new Role {Name = "CoreTeam"},
                };

                foreach(var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    _userManager.CreateAsync(user, "password").Wait();
                    _userManager.AddToRoleAsync(user, "Employee").Wait();
                }

                var adminUser = new User
                {
                    UserName = "Admin"
                };

                IdentityResult result = _userManager.CreateAsync(adminUser, "password").Result;

                if(result.Succeeded)
                {
                    var admin = _userManager.FindByNameAsync("Admin").Result;
                    _userManager.AddToRolesAsync(admin, new[] {"Admin"}).Wait();
                };
            }
        }
    }
}