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

    public async Task<IEnumerable<BirthdayModel>> GetAllAsync()
    {
        return await _repository.Get();
    }

    public async Task<bool> CreateAsync(BirthdayModel birthday)
    {
        return await _repository.Create(birthday);
    }

    public async Task<bool> UpdateAsync(BirthdayModel birthday)
    {
        return await _repository.Update(birthday);
    }

    public async Task<bool> DeleteAsync(BirthdayModel birthday)
    {
        return await _repository.Delete(birthday);
    }
}