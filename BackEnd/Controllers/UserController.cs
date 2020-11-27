using System.Threading.Tasks;
using BackEnd.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]

        #region Criar Usuario
        public async Task<IActionResult<User>> PostUser(User user)
        {
            _context.User.Add(User);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostUser), new { id = User.Id }, user);
        }
        #endregion


        #region Mostrar usuarios

        [HttpGet]
        public async Task<IActionResult<User>> GetUsers(User user)
        {
            return await _context.User.ToListAsync();
        }
        #endregion

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
            return Ok("Está logado como gerente: " + User.Identity.Name);
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