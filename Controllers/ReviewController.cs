using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeBellaCapstone.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeBellaCapstone.Models;
using Microsoft.EntityFrameworkCore;


namespace TeBellaCapstone.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ReviewController : ControllerBase
  {
    private readonly DatabaseContext _context;
    private readonly IUserService _userService;

    public ReviewController(DatabaseContext context, IUserService userService)
    {
      _context = context;
      _userService = userService;
    }

    //Get:api/Review
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
    {
      var userId = _userService.GetCurrentUserId(User);

      return await _context.Reviews.Where(review => review.UserId == userId).ToListAsync();
    }

    //GET: api/Review/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Review>> GetReview(int id)
    {

      var review = await _context
            .Reviews
            .Include(trl => trl.Comment)
            .FirstOrDefaultAsync(f => f.Id == id);

      if (review == null)
      {
        return NotFound();
      }

      return review;
    }

    [HttpPost]
    public async Task<ActionResult<Review>> PostReview(ReviewModel reviewModel)
    {

      //get user Id to add to the review
      var userId = _userService.GetCurrentUserId(User);

      var review = new Review
      {
        TeaId = reviewModel.TeaId,
        Rating = reviewModel.Rating,
        Comment = reviewModel.Comment,
        UserId = userId //tried to hard code, still failed
      };

      _context.Reviews.Add(review);
      await _context.SaveChangesAsync();

      return Ok(review);
    }

    // // DELETE: api/Trails/5
    // [HttpDelete("{id}")]
    // public async Task<ActionResult<Review>> DeleteReview(int id)
    // {
    //   var review = await _context.Reviews.FindAsync(id);
    //   if (review == null)
    //   {
    //     return NotFound();
    //   }

    //   _context.Reviews.Remove(review);
    //   await _context.SaveChangesAsync();

    //   return review;
    // }

    // private bool TrailExists(int id)
    // {
    //   return _context.Reviews.Any(e => e.Id == id);
    // }
  }

}
