using BDayToday.Models;
using Microsoft.EntityFrameworkCore;

namespace BDayToday.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Birthday> Birthdays { get; set; } = null!;
}