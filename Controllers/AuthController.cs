using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeBellaCapstone.Models;
using TeBellaCapstone.ViewModels;
using Microsoft.AspNetCore.Identity;

namespace TeBellaCapstone.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {

    private DatabaseContext _context;
    public AuthController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost("signup")]
    public async Task<ActionResult> SignUpUser(NewUser newUser)
    {
      if (newUser.Password.Length < 7)
      {
        return BadRequest("Password must be at least 7 characters.");
      }

      var doesUserExist = _context.Users.Any(user => user.Email.ToLower() == newUser.Email.ToLower());

      if (doesUserExist)
      {
        return BadRequest("User already exists with that email.");
      }

      var user = new User
      {
        FirstName = newUser.FirstName,
        LastName = newUser.LastName,
        PhoneNumber = newUser.PhoneNumber,
        Email = newUser.Email
      };
      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);

      user.HashedPassword = hashed;
      _context.Users.Add(user);

      await _context.SaveChangesAsync();

      return Ok(user);

    }
  }
}