

namespace TeBellaCapstone.Models
{
  public class ReviewModel
  {
    public int Id { get; set; }
    public int TeaId { get; set; }
    public string TeaName { get; set; }
    public int Rating { get; set; }
    public string Comment { get; set; }
    public bool IsFavorite { get; set; }

  }
}
