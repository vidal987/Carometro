using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BackEnd.Models;
using Microsoft.IdentityModel.Tokens;

namespace BackEnd.Helpers
{
    public static class JwtAuth
    {
        public static string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            //chave secreta, geralmente se coloca em arquivo de configuração
            var key = Encoding.ASCII.GetBytes("ZWRpw6fDo28gZW0gY29tcHV0YWRvcmE=");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Nome.ToString()),
                    new Claim(ClaimTypes.Role, RoleFactory(user.Type))
                }),
                Expires = DateTime.UtcNow.AddHours(10),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        private static string RoleFactory(int roleNumber)
        {
            switch (roleNumber)
            {
                case 1:
                    return "Admin";

                case 2:
                    return "Professor";

                case 3:
                    return "Colaborator";


                default:
                    throw new Exception();
            }
        }
    }
}