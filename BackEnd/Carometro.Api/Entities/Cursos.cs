using System.Collections.Generic;
using Carometro.Api.Entities;

namespace Carometro.Api.Entities
{
    public class Cursos
    {
        public int Id { get; set; }
        public string CursoNome { get; set; }
        public List<Turma> Turmas { get; set; }
    }
}