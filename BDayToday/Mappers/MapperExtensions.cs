using BDayToday.Entities;
using BDayToday.Models;

namespace BDayToday.Mappers;

public static class MapperExtensions
{
    public static BirthdayModel ToBirthdayModel(this Birthday entity)
    {
        return new BirthdayModel
        {
            Id = entity.Id,
            Name = entity.Name,
            Birthdate = entity.BirthdayDate
        };
    }

    public static Birthday ToBirthday(this BirthdayModel model)
    {
        return new Birthday
        {
            Id = model.Id,
            Name = model.Name,
            BirthdayDate = model.Birthdate
        };
    }
}