using BDayToday.Models;

namespace BDayToday.Entities;

public class Birthday
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public DateTime BirthdayDate { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}