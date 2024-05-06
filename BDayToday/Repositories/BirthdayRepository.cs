using BDayToday.Data;
using BDayToday.Mappers;
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

    public async Task<List<BirthdayModel>> Get()
    {
        return await _ctx.Birthdays
            .Select(bday => bday.ToBirthdayModel())
            .ToListAsync();
    }

    public async Task<BirthdayModel?> GetById(int id)
    {
        return await _ctx.Birthdays
            .Where(bday => bday.Id == id)
            .Select(bday => bday.ToBirthdayModel())
            .SingleOrDefaultAsync();    
    }

    public async Task<bool> Create(BirthdayModel birthday)
    {
        _ctx.Birthdays.Add(birthday.ToBirthday());
        return await _ctx.SaveChangesAsync() > 0;    
    }

    public async Task<bool> Update(BirthdayModel birthday)
    {
        _ctx.Birthdays.Update(birthday.ToBirthday());
        return await _ctx.SaveChangesAsync() > 0;
    }

    public async Task<bool> DeleteById(int id)
    {
        return await _ctx
            .Birthdays
            .Where(b => b.Id == id)
            .ExecuteDeleteAsync() > 0;
    }
}