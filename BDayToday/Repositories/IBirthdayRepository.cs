using BDayToday.Models;

namespace BDayToday.Repositories;

public interface IBirthdayRepository
{
    public Task<List<Birthday>> Get();
}