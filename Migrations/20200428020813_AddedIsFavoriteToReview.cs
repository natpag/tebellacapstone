using Microsoft.EntityFrameworkCore.Migrations;

namespace TeBellaCapstone.Migrations
{
    public partial class AddedIsFavoriteToReview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsFavorite",
                table: "Reviews",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsFavorite",
                table: "Reviews");
        }
    }
}
