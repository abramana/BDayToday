using BDayToday.Endpoints.Internal;
using BDayToday.Models;
using BDayToday.Services;
using Microsoft.AspNetCore.Mvc;

namespace BDayToday.Endpoints;

public class BirthdayEndpoints : IEndpoints
{
    private const string BaseRoute = "birthday";

    public static void DefineEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet(BaseRoute, GetAllBirthdaysAsync);
        app.MapPost(BaseRoute, CreateBirthdayAsync);
        app.MapPut(BaseRoute, UpdateBirthdayAsync);
        app.MapDelete(BaseRoute, DeleteBirthdayAsync);
    }

    public static void AddServices(IServiceCollection services, IConfiguration configuration)
    {
    }

    private static async Task<IResult> GetAllBirthdaysAsync(
        IBirthdayService birthdayService)
    {
        var birthdays = await birthdayService.GetAllAsync();
        return Results.Ok(birthdays);
    }

    private static async Task<IResult> CreateBirthdayAsync(
        [FromBody] BirthdayModel birthday, [FromServices] IBirthdayService birthdayService)
    {
        var created = await birthdayService.CreateAsync(birthday);
        return created
            ? Results.Created((string?)null, birthday)
            : Results.BadRequest("A person with this name already exists");
    }

    private static async Task<IResult> UpdateBirthdayAsync(
        [FromBody] BirthdayModel birthday, [FromServices] IBirthdayService birthdayService)
    {
        var updated = await birthdayService.UpdateAsync(birthday);
        return updated
            ? Results.Ok(birthday)
            : Results.NotFound();
    }

    private static async Task<IResult> DeleteBirthdayAsync(
        [FromBody] BirthdayModel birthday, [FromServices] IBirthdayService birthdayService)
    {
        var deleted = await birthdayService.DeleteAsync(birthday);
        return deleted
            ? Results.Ok(birthday)
            : Results.NotFound();
    }
}