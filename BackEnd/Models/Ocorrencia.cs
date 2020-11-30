using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Ocorrencia
    {

        [Key]
        public int IdOcorrencia { get; set; }
        [Required]
        public DateTime DataCriacao { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Conteudo { get; set; }
        public Aluno aluno { get; set; }
        public int IdAluno { get; set; }
    }
}
