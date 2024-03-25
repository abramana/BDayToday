using BDayToday.Data;
using BDayToday.Endpoints.Internal;
using BDayToday.Repositories;
using BDayToday.Services;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((ctx, sp, configuration) =>
{
    configuration.ReadFrom.Configuration(ctx.Configuration);
});
builder.Services.AddScoped<IBirthdayService, BirthdayService>();
builder.Services.AddScoped<IBirthdayRepository, BirthdayRepository>();
builder.Services.AddEndpoints<Program>(builder.Configuration);
builder.Services.AddCors(o => o.AddPolicy("AllowOrigin", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

var connectionString = builder.Configuration.GetConnectionString("AppDBConnectionString");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var app = builder.Build();

app.UseSerilogRequestLogging();
app.UseCors("AllowOrigin");
app.UseEndpoints<Program>();

app.Run();