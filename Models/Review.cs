using System;

namespace TeBellaCapstone.Models
{
  public class Review
  {
    public int Id { get; set; }
    public string Comment { get; set; }
    public int Rating { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

  }
}