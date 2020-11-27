using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Aluno
    {
        [Key]
        [Required]
        public int Matricula { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public DateTime DataNasc { get; set; }
        public byte[] Foto { get; set; }
        public IList<Ocorrencia> Ocorrencia { get; set; }
    }
}