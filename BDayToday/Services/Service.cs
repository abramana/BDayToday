namespace BDayToday;

public record Person(string FullName);


public class Service
{
    private readonly List<Person> _people = new()
    {
        new Person("Nick Chapsas"),
        new Person("John Chapsas"),
        new Person("Tim Cook")
    };

    public IEnumerable<Person> Search(string searchTerm)
    {
        return _people.Where(x => x.FullName.Contains(searchTerm, StringComparison.OrdinalIgnoreCase));
    }
    
}