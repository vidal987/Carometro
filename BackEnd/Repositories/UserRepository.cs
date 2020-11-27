using System.Collections.Generic;
using System.Linq;
using BackEnd.Models;

namespace BackEnd.Repositories
{
    public class UserRepository
    {
        public User GetByEmail(string ni)
        {
            return Users.Where(x => x.Ni.ToLower() == ni.ToLower())
                .FirstOrDefault();
        }
    }
}