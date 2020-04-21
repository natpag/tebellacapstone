using System;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using TeBellaCapstone.Models;
using System.Collections.Generic;



namespace TeBellaCapstone.Models
{
  public class ReferenceDataModel
  {
    public List<TeaFamily> TeaFamily { get; set; }
    public List<TeaFlavor> TeaFlavor { get; set; }
    public List<TeaType> TeaType { get; set; }

  }
}
