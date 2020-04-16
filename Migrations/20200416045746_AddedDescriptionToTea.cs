using Microsoft.EntityFrameworkCore.Migrations;

namespace TeBellaCapstone.Migrations
{
    public partial class AddedDescriptionToTea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Teas",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Teas");
        }
    }
}
