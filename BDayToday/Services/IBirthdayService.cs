using BDayToday.Models;

namespace BDayToday.Services;

public interface IBirthdayService
{
    public Task<IEnumerable<BirthdayModel>> GetAll();
    public Task<BirthdayModel?> GetById(int id);
    public Task<bool> Create(BirthdayModel birthday);
    public Task<bool> Update(BirthdayModel birthday);
    public Task<bool> DeleteById(int id);
}