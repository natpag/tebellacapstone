using System.Text.Json.Serialization;

namespace TeBellaCapstone.Models
{
  public class User
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
    [JsonIgnore]
    public string HashedPassword { get; set; }

  }
}