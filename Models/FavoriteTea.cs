using System;

namespace TeBellaCapstone.Models
{
  public class FavoriteTea
  {
    public int Id { get; set; }


    public int TeaId { get; set; }
    public int UserId { get; set; }

    //Nav Properties
    public Tea Tea { get; set; }
    public User User { get; set; }

  }
}