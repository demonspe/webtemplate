using System.Web.Http;
using WebServer.Data;
using WebServer.Models;

namespace WebServer.Controllers
{
  public class CategoriesController : ApiController
  {
    /// <summary>
    /// Получить список всех категорий.
    /// </summary>
    /// <returns>Cписок всех категорий.</returns>
    [HttpGet]
    public Category[] All()
    {
      return DataStore.Instance.Categories.ToArray();
    }
  }
}
