using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Turma
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public Curso Curso { get; set; }
        public IList<Aluno> Alunos { get; set; }
    }
}