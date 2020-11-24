using System.ComponentModel.DataAnnotations;
using Carometro.Api.Enums;

namespace Carometro.Api.Entities
{
    public class User
    {
        public User(string nome, string nif, string senha, RoleEnum role)
        {
            Nome = nome;
            Nif = nif;
            Senha = senha;
            Role = role;
        }

        protected User() { }

        [Key]
        public int Id { get; set; }
        public string Foto { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        public string Nome { get; set; }

        public string Nif { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        public RoleEnum Role { get; set; }

    }
}