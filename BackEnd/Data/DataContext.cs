using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Aluno> Alunos {get; set;}
        public DbSet<Ocorrencia> Ocorrencias {get; set;}
    }
}