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

    public async Task<bool> CreateAsync(Birthday birthday)
    {
        return await _repository.Create(birthday);
    }

    public async Task<bool> UpdateAsync(Birthday birthday)
    {
        return await _repository.Update(birthday);
    }

    public async Task<bool> DeleteAsync(Birthday birthday)
    {
        return await _repository.Delete(birthday);
    }
}