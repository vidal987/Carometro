using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class Aluno
    {
        protected Aluno() { }
        public Aluno(int idaluno, string nome, string email, string telefone, string endereco, DateTime dataNasc)
        {
            IdAluno = idaluno;
            Nome = nome;
            Email = email;
            Telefone = telefone;
            Endereco = endereco;
            DataNasc = dataNasc;
        }

        [Key]
        [Required]
        public int IdAluno { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        //public string Foto {get; set;}
        public DateTime DataNasc { get; set; }
        
        public int IdOcorrencia { get; set; }
        public Ocorrencia Ocorrencia { get; set; }
      

    }
}