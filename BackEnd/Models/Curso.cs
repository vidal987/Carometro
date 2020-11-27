using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Curso
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }

    }
}