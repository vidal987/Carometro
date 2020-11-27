using System;

namespace BackEnd.Models
{
    public class Ocorrencia
    {
        public int Id { get; set; }
        public User User { get; set; }
        public DateTime Data { get; set; }
        public string Titulo { get; set; }
        public string Body { get; set; }
    }
}