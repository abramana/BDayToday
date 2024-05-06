using BDayToday.Endpoints.Internal;
using BDayToday.Models;
using BDayToday.Services;
using Microsoft.AspNetCore.Mvc;

namespace BDayToday.Endpoints;

public class BirthdayEndpoints : IEndpoints
{
    private const string BaseRoute = "birthdays";

    public static void DefineEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet(BaseRoute, GetAllBirthdays);
        app.MapGet(BaseRoute + "/{id}", GetBirthdayById);
        app.MapPost(BaseRoute, CreateBirthday);
        app.MapPut(BaseRoute + "/{id}", UpdateBirthday);
        app.MapDelete(BaseRoute + "/{id}", DeleteBirthday);
    }

    public static void AddServices(IServiceCollection services, IConfiguration configuration)
    {
    }

    private static async Task<IResult> GetAllBirthdays(
        IBirthdayService birthdayService)
    {
        var birthdays = await birthdayService.GetAll();
        return Results.Ok(birthdays);
    }

    private static async Task<IResult> GetBirthdayById(
        [FromRoute] int id, [FromServices] IBirthdayService birthdayService)
    {
        var birthday = await birthdayService.GetById(id);
        return birthday is not null
            ? Results.Ok(birthday)
            : Results.NotFound();
    }

    private static async Task<IResult> CreateBirthday(
        [FromBody] BirthdayModel birthday, [FromServices] IBirthdayService birthdayService)
    {
        var created = await birthdayService.Create(birthday);
        return created
            ? Results.Created((string?)null, birthday)
            : Results.BadRequest("A person with this name already exists");
    }

    private static async Task<IResult> UpdateBirthday(
        [FromBody] BirthdayModel birthday, [FromServices] IBirthdayService birthdayService)
    {
        var updated = await birthdayService.Update(birthday);
        return updated
            ? Results.Ok(birthday)
            : Results.NotFound();
    }

    private static async Task<IResult> DeleteBirthday(
        [FromRoute] int id, [FromServices] IBirthdayService birthdayService)
    {
        var deleted = await birthdayService.DeleteById(id);
        return deleted
            ? Results.Ok(id)
            : Results.NotFound();
    }
}