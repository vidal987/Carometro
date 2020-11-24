using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Threading;

namespace Carometro.Api.Entities
{
    public class Ocorrencias
    {
        public Ocorrencias(string titulo, DateTime dateTime, string ocorrencia, Aluno aluno)
        {
            Titulo = titulo;
            DateTime = dateTime;
            Ocorrencia = ocorrencia;
            Aluno = aluno;
        }

        [Key]
        public int Id { get; set; }
        public string Titulo { get; set; }
        public DateTime DateTime { get; set; }
        public string Ocorrencia { get; set; }
        public Aluno Aluno { get; set; }

    }
}