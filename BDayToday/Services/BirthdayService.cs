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

    public async Task<IEnumerable<BirthdayModel>> GetAll()
    {
        return await _repository.Get();
    }

    public async Task<BirthdayModel?> GetById(int id)
    {
        return await _repository.GetById(id);
    }

    public async Task<bool> Create(BirthdayModel birthday)
    {
        return await _repository.Create(birthday);
    }

    public async Task<bool> Update(BirthdayModel birthday)
    {
        return await _repository.Update(birthday);
    }

    public async Task<bool> DeleteById(int id)
    {
        return await _repository.DeleteById(id);
    }
}