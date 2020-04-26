using System;

namespace TeBellaCapstone.Models
{
  public class Review
  {
    public int Id { get; set; }
    public int Rating { get; set; }
    public string Comment { get; set; }

    public int TeaId { get; set; }
    public int UserId { get; set; }

    //Nav Properties
    public Tea Tea { get; set; }
    public User User { get; set; }

  }
}