using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Carometro.Api.Enums;

namespace Carometro.Api.Entities
{
    public class Aluno
    {
        public Aluno(string nome, string telefone, Cursos curso, TurnoEnum turno, List<Ocorrencias> ocorrencias)
        {
            Nome = nome;
            Telefone = telefone;
            Curso = curso;
            Turno = turno;
            Ocorrencias = new List<Ocorrencias>();
        }

        protected Aluno() { }

        [Key]
        public int Id { get; set; }
        public string Foto { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public Cursos Curso { get; set; }
        public TurnoEnum Turno { get; set; }
        public List<Ocorrencias> Ocorrencias { get; set; }

    }
}