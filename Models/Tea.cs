namespace TeBellaCapstone.Models
{
  public class Tea
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Url { get; set; } //for imageName ex: blackEarlGreyLavender.jpg//

    //navigation property

    //public int TeaFamilyId { get; set; }
    public int TeaFamilyId { get; set; }
    public TeaFamily TeaFamily { get; set; }

    //public int TypeId { get; set; }
    public int TeaTypeId { get; set; }
    public TeaType TeaType { get; set; }

    //public int FlavorId { get; set; }
    public int TeaFlavorId { get; set; }
    public TeaFlavor TeaFlavor { get; set; }

  }
}