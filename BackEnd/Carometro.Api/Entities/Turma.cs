using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Carometro.Api.Entities
{
    public class Turma
    {
        [Key]
        public int Id { get; set; }
        public Cursos Curso { get; set; }
        public List<Aluno> Alunos { get; set; }
    }
}