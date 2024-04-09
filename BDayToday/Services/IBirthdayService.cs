using BDayToday.Models;

namespace BDayToday.Services;

public interface IBirthdayService
{
    public Task<IEnumerable<BirthdayModel>> GetAllAsync();
    public Task<bool> CreateAsync(BirthdayModel birthday);
    public Task<bool> UpdateAsync(BirthdayModel birthday);
    public Task<bool> DeleteAsync(BirthdayModel birthday);
}