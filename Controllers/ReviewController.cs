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
    public async Task<ActionResult<IEnumerable<ReviewModel>>> GetReviews()
    {
      var userId = _userService.GetCurrentUserId(User);

      var reviewModels = await _context
      .Reviews
      .Where(review => review.UserId == userId)
      .Select(review => new ReviewModel()
      {
        TeaId = review.TeaId,
        TeaName = review.Tea.Name,
        Rating = review.Rating,
        Comment = review.Comment
      })
      .ToListAsync();

      if (reviewModels == null)
      {
        return NotFound();
      }

      return reviewModels;
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
        UserId = userId
      };

      _context.Reviews.Add(review);
      await _context.SaveChangesAsync();

      return Ok(review);
    }
  }

  //   [HttpPost("{reviewId}")]
  //    public async Task<ActionResult<FavoriteTeasModel>> FavoriteTeaForUser(FavoriteTeasModel favoriteTeasModel)
  //   {
  //     // get the user Id form the User Object
  //     var userId = _userService.GetCurrentUserId(User);

  //     // create a new bookmark 
  //     var favorite = new FavoriteTeasModel
  //     {
  //       TeaId = favoriteTeasModel.TeaId,
  //       UserId = userId
  //     };
  //     //save it our database
  //     _context.FavoriteTeas.Add(favorite);
  //     await _context.SaveChangesAsync();
  //     // return something?
  //     return Ok(favorite);
  //   }

  // }


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

