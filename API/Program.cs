using API.Extensions;
using Microsoft.EntityFrameworkCore;
using Persistence;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllers();
        builder.Services.AddApplicationServices(builder.Configuration);

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("CorsPolicy");
        app.UseAuthorization();


        app.MapControllers();

        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;
        try
        {
            var context = services.GetRequiredService<DataContext>();
            Seed.SeedData(context).Wait();
        }
        catch (Exception ex)
        {

            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An Error Has Occured During Migration");
        }

        app.Run();
    }
}