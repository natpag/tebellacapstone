using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TeBellaCapstone.Models;
using TeBellaCapstone.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;


namespace TeBellaCapstone.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {

    readonly private DatabaseContext _context;
    readonly private string JWT_KEY;

    public AuthController(DatabaseContext context, IConfiguration config)
    {
      JWT_KEY = config["JWT_KEY"];
      _context = context;
    }

    private string CreateJWT(User user)
    {
      var expirationTime = DateTime.UtcNow.AddHours(10);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim("id", user.Id.ToString()),
            new Claim("email", user.Email),
            new Claim("firstname", user.FirstName),
            new Claim("lastname", user.LastName),
            new Claim("phonenumber", user.PhoneNumber)

      }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
               new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JWT_KEY)),
              SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));


      return token;
    }

    //params
    [HttpPost("signup")]
    public async Task<ActionResult> SignUpUser(NewUsers newUser)
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

      return Ok(new { Token = CreateJWT(user), user = user });

    }

    [HttpPost("login")]
    public async Task<ActionResult> Login(UserLogin useLogIn)
    {

      // find the user
      var user = await _context
        .Users
        .FirstOrDefaultAsync(user => user.Email.ToLower() == useLogIn.Email.ToLower());
      if (user == null)
      {
        return BadRequest("User does not exists");
      }
      // validate the password
      var results = new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, useLogIn.Password);

      if (results == PasswordVerificationResult.Success)
      {
        // create the token
        return Ok(new { Token = CreateJWT(user), user = user });
      }
      else
      {
        return BadRequest("Incorrect password!");
      }

    }
  }
}