using BDayToday.Models;

namespace BDayToday.Repositories;

public interface IBirthdayRepository
{
    public Task<List<BirthdayModel>> Get();
    public Task<bool> Create(BirthdayModel birthday);
    public Task<bool> Update(BirthdayModel birthday);
    public Task<bool> Delete(BirthdayModel birthday);
}