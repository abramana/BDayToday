using BDayToday.Endpoints.Internal;
using BDayToday.Services;

namespace BDayToday.Endpoints;

public class BirthdayEndpoints : IEndpoints
{
    public static void DefineEndpoints(IEndpointRouteBuilder app)
    {
        app.MapGet("birthday", GetAllBirthdaysAsync);
    }

    public static void AddServices(IServiceCollection services, IConfiguration configuration)
    {
    }

    internal static async Task<IResult> GetAllBirthdaysAsync(
        IBirthdayService birthdayService, string? searchTerm)
    {
        var birthdays = await birthdayService.GetAllAsync();
        return Results.Ok(birthdays);
    }
}