using BDayToday.Models;
using BDayToday.Repositories;

namespace BDayToday.Services;

public class BirthdayService : IBirthdayService
{
    private readonly IBirthdayRepository _repository;

    public BirthdayService(IBirthdayRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Birthday>> GetAllAsync()
    {
        return await _repository.Get();
    }
}