using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace TeBellaCapstone.Migrations
{
    public partial class AddedUserTeasTableAndNavPropsForTea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TeaFamilyId",
                table: "Teas",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TeaFlavorId",
                table: "Teas",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TeaTypeId",
                table: "Teas",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "UserTeas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FavoritedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTeas", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teas_TeaFamilyId",
                table: "Teas",
                column: "TeaFamilyId");

            migrationBuilder.CreateIndex(
                name: "IX_Teas_TeaFlavorId",
                table: "Teas",
                column: "TeaFlavorId");

            migrationBuilder.CreateIndex(
                name: "IX_Teas_TeaTypeId",
                table: "Teas",
                column: "TeaTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teas_TeaFamilies_TeaFamilyId",
                table: "Teas",
                column: "TeaFamilyId",
                principalTable: "TeaFamilies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teas_TeaFlavors_TeaFlavorId",
                table: "Teas",
                column: "TeaFlavorId",
                principalTable: "TeaFlavors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teas_TeaTypes_TeaTypeId",
                table: "Teas",
                column: "TeaTypeId",
                principalTable: "TeaTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teas_TeaFamilies_TeaFamilyId",
                table: "Teas");

            migrationBuilder.DropForeignKey(
                name: "FK_Teas_TeaFlavors_TeaFlavorId",
                table: "Teas");

            migrationBuilder.DropForeignKey(
                name: "FK_Teas_TeaTypes_TeaTypeId",
                table: "Teas");

            migrationBuilder.DropTable(
                name: "UserTeas");

            migrationBuilder.DropIndex(
                name: "IX_Teas_TeaFamilyId",
                table: "Teas");

            migrationBuilder.DropIndex(
                name: "IX_Teas_TeaFlavorId",
                table: "Teas");

            migrationBuilder.DropIndex(
                name: "IX_Teas_TeaTypeId",
                table: "Teas");

            migrationBuilder.DropColumn(
                name: "TeaFamilyId",
                table: "Teas");

            migrationBuilder.DropColumn(
                name: "TeaFlavorId",
                table: "Teas");

            migrationBuilder.DropColumn(
                name: "TeaTypeId",
                table: "Teas");
        }
    }
}
