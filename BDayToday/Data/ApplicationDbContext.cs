using BDayToday.Entities;
using Microsoft.EntityFrameworkCore;

namespace BDayToday.Data;

public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.EnableSensitiveDataLogging();
    }

    public DbSet<Birthday> Birthdays { get; set; } = null!;
}