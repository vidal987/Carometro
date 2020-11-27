using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class User
    {
        [Required]
        public int Type { get; set; }
        public string Nome { get; set; }
        public string Ni { get; set; }
        public string Password { get; set; }
    }
}