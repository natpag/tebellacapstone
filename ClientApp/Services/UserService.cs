using System.Linq;
using System.Security.Claims;

namespace TeBellaCapstone.Services
{
  public interface IUserService
  {
    int GetCurrentUserId(System.Security.Claims.ClaimsPrincipal User);
  }

  public class UserService : IUserService
  {
    public int GetCurrentUserId(ClaimsPrincipal User)
    {
      var userId = int.Parse(User.Claims.FirstOrDefault(f => f.Type == "id").Value);
      return userId;
    }
  }
}