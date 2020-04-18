using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeBellaCapstone.Models;

namespace TeBellaCapstone.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TeasController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public TeasController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Teas
    [HttpGet]
    public ActionResult<IEnumerable<Tea>> GetTeas()
    {
      var result = new ActionResult<IEnumerable<Tea>>(GetAllTeas());

      return result;
    }

    // GET: api/Teas/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Tea>> GetTea(int id)
    {
      var tea = await _context.Teas.FindAsync(id);

      if (tea == null)
      {
        return NotFound();
      }

      return tea;
    }

    // GET: api/Teas/random
    [HttpGet("random")]
    public ActionResult<Tea> GetRandomTea()
    {
      var teas = GetAllTeas();

      var numberOfTeas = teas.Count();

      var randomIndex = new Random().Next(numberOfTeas);
      var randomTea = teas.ElementAt(randomIndex);

      return randomTea;
    }

    private IEnumerable<Tea> GetAllTeas()
    {
      return _context.Teas
        .Include(tea => tea.TeaFamily)
        .Include(tea => tea.TeaFlavor)
        .Include(tea => tea.TeaType)
        .ToList();
    }

    // PUT: api/Teas/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTea(int id, Tea tea)
    {
      if (id != tea.Id)
      {
        return BadRequest();
      }

      _context.Entry(tea).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TeaExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Teas
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Tea>> PostTea(Tea tea)
    {
      _context.Teas.Add(tea);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetTea", new { id = tea.Id }, tea);
    }

    // DELETE: api/Teas/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Tea>> DeleteTea(int id)
    {
      var tea = await _context.Teas.FindAsync(id);
      if (tea == null)
      {
        return NotFound();
      }

      _context.Teas.Remove(tea);
      await _context.SaveChangesAsync();

      return tea;
    }

    private bool TeaExists(int id)
    {
      return _context.Teas.Any(e => e.Id == id);
    }
  }
}
