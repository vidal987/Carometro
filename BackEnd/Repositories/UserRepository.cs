using System.Collections.Generic;
using System.Linq;
using BackEnd.Models;

namespace BackEnd.Repositories
{
    public class UserRepository
    {


        /*
         * 1 - Diretor
         * 2 - Gerente
         * 3 - Colaborador
         */

        public static IList<User> Users = new List<User>
        {

            new User
            {
                Type = 1,
                Ni = "lucas@eu.com",
                Nome = "Lucas",
                Password = "123"
            },

            new User
            {
                Type = 2,
                Ni = "mariana@eu.com",
                Nome = "Mariana",
                Password = "123"
            },

            new User
            {
                Type = 2,
                Ni = "gabriel@eu.com",
                Nome = "Gabriel",
                Password = "123"
            },
        };


        public User GetByEmail(string ni)
        {
            return Users.Where(x => x.Ni.ToLower() == ni.ToLower())
                .FirstOrDefault();
        }
    }
}