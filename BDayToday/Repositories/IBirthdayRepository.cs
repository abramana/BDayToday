using BDayToday.Models;

namespace BDayToday.Repositories;

public interface IBirthdayRepository
{
    public Task<List<Birthday>> Get();
    public Task<bool> Create(Birthday birthday);
    public Task<bool> Update(Birthday birthday);
    public Task<bool> Delete(Birthday birthday);
}