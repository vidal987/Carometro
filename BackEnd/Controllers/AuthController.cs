using System;
using System.Threading.Tasks;
using BackEnd.Helpers;
using BackEnd.Models;
using BackEnd.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        /*
         * Diretor pode ver suas informações e fazer CRUD de funcionarios e gerentes
         * Gerentes podem ver suas informações, fazer CRUD de funcionarios
         * Funcionários podem ver suas informações
         */

        [HttpPost]
        [AllowAnonymous]
        [Route("/api/v1/auth")]
        public async Task<IActionResult> Auth([FromBody] User user)
        {
            try
            {
                //uma boa prática seria usar DI (Injeção de dependência)
                //mas não é o foco do artigo

                var userExists = new UserRepository().GetByNi(user.Ni);

                if (userExists == null)
                    return BadRequest(new { Message = "Ni e/ou senha está(ão) inválido(s)." });


                if (userExists.Password != user.Password)
                    return BadRequest(new { Message = "Ni e/ou senha está(ão) inválido(s)." });


                var token = JwtAuth.GenerateToken(userExists);

                return Ok(new
                {
                    Token = token,
                    Usuario = userExists
                });

            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente." });
            }
        }
    }
}
