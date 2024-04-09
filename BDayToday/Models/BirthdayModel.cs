namespace BDayToday.Models;

public class BirthdayModel
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public DateTime Birthdate { get; set; }
}