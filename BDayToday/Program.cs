using BDayToday.Data;
using BDayToday.Endpoints.Internal;
using BDayToday.Repositories;
using BDayToday.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IBirthdayService, BirthdayService>();
builder.Services.AddScoped<IBirthdayRepository, BirthdayRepository>();
builder.Services.AddEndpoints<Program>(builder.Configuration);

var connectionString = builder.Configuration.GetConnectionString("AppDBConnectionString");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var app = builder.Build();

app.UseEndpoints<Program>();

app.Run();