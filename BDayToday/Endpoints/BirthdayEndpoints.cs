using BDayToday.Endpoints.Internal;

namespace BDayToday.Endpoints;

public class BirthdayEndpoints : IEndpoints
{
    public static void DefineEndpoints(IEndpointRouteBuilder app)
    {
        //endpoints: 

        //app.MapGet("get", () => "Get");
        //app.MapPost(...)
    }

    public static void AddServices(IServiceCollection services, IConfiguration configuration)
    {
        throw new NotImplementedException();
    }
}