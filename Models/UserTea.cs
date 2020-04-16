using System;

namespace TeBellaCapstone.Models
{
  public class UserTea
  {
    public int Id { get; set; }
    public DateTime FavoritedAt { get; set; } = DateTime.Now;
  }
}