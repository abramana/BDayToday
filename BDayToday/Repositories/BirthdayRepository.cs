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
}