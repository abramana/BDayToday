using BDayToday.Data;
using BDayToday.Models;
using Microsoft.EntityFrameworkCore;

namespace BDayToday.Repositories;

public class BirthdayRepository : IBirthdayRepository
{
    private readonly ApplicationDbContext _ctx;

    public BirthdayRepository(ApplicationDbContext ctx)
    {
        _ctx = ctx;
    }

    public async Task<List<Birthday>> Get()
    {
        return await _ctx.Birthdays.ToListAsync();
    }

    public async Task<bool> Create(Birthday birthday)
    {
        _ctx.Birthdays.Add(birthday);
        return await _ctx.SaveChangesAsync() > 0;    
    }

    public async Task<bool> Update(Birthday birthday)
    {
        _ctx.Birthdays.Update(birthday);
        return await _ctx.SaveChangesAsync() > 0;
    }

    public async Task<bool> Delete(Birthday birthday)
    {
        _ctx.Birthdays.Remove(birthday);
        return await _ctx.SaveChangesAsync() > 0;
    }
}