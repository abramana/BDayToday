namespace BDayToday.Models;

public class Birthday
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public DateTime BirthdayDate { get; set; }
}