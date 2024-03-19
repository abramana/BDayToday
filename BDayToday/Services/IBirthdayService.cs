using BDayToday.Models;

namespace BDayToday.Services;

public interface IBirthdayService
{
    public Task<IEnumerable<Birthday>> GetAllAsync();
    public Task<bool> CreateAsync(Birthday birthday);
    public Task<bool> UpdateAsync(Birthday birthday);
    public Task<bool> DeleteAsync(Birthday birthday);
}