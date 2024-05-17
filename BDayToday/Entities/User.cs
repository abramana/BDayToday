using BDayToday.Entities;

namespace BDayToday.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Login { get; set; } = null!;
    public string Password { get; set; } = null!;
    
    public ICollection<Birthday> Birthdays { get; }

}