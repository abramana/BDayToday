using BDayToday.Models;

namespace BDayToday.Services;

public interface IBirthdayService
{
    public Task<IEnumerable<Birthday>> GetAllAsync();
}