using System.Collections.Generic;
using System.Linq;
using BackEnd.Models;

namespace BackEnd.Repositories
{
    public class UserRepository
    {
        public User GetByNi(string ni)
        {
            return User.Where(x => x.Ni.ToLower() == ni.ToLower())
                .FirstOrDefault();
        }
    }
}