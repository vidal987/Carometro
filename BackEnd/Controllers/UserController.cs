using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("/api/v1/user/employee")]
        [Authorize]
        public IActionResult GetEmployeee()
        {
            return Ok("Olá " + User.Identity.Name + " rota aberta a todos os colaboradores.");
        }


        [HttpGet]
        [Route("/api/v1/user/manager")]
        [Authorize(Roles = "Admin,Professor")]
        public IActionResult GetManager()
        {
            return Ok("Está logado como gerente: " + User.Identity. );
        }


        [HttpGet]
        [Route("/api/v1/user/director")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetDirector()
        {
            return Ok("Está logado como diretor: " + User.Identity.Name);
        }
    }
}