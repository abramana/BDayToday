using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BDayToday.Migrations
{
    /// <inheritdoc />
    public partial class UserMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            DateTime myDateTime = new DateTime(1995, 8, 29);
            string formattedDate = myDateTime.ToString("yyyy-MM-dd HH:mm:ss");
            
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Birthdays",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Login = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Birthdays_UserId",
                table: "Birthdays",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Birthdays_Users_UserId",
                table: "Birthdays",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade); 
            
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Name", "Login", "Password" },
                values: new object[,]
                {
                    { "TestUser", "test", "test" } 
                });
            
            migrationBuilder.InsertData(
                table: "Birthdays",
                columns: new[] { "Name", "BirthdayDate", "UserId" },
                values: new object[,]
                {
                    { "TestBirthday", formattedDate, 1 } 
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Birthdays_Users_UserId",
                table: "Birthdays");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Birthdays_UserId",
                table: "Birthdays");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Birthdays");
        }
    }
}
