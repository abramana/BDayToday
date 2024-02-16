using BDayToday;
using BDayToday.Endpoints.Internal;

var builder = WebApplication.CreateBuilder(args);

//Service registration starts here

builder.Services.AddSingleton<Service>();
builder.Services.AddEndpoints<Program>(builder.Configuration);

//Service registration stops here

var app = builder.Build();
//Middleware registration starts here. Middleware is software that different applications use to communicate with each other.
//It provides functionality to connect applications intelligently and efficiently so that you can innovate faster.

app.UseEndpoints<Program>();

//app.UseMiddleware<Middleware>();




//Middleware registration stops here
app.Run();

