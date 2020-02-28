using System;
using System.Linq;
using System.Web.Http;
using WebServer.Data;
using WebServer.Models;

namespace WebServer.Controllers
{
  public class ProductsController : ApiController
  {
    /// <summary>
    /// Получить список товаров категории.
    /// </summary>
    /// <param name="id">Guid категории</param>
    /// <returns>Массив товаров из этой категории.</returns>
    [HttpGet]
    public Product[] FromCategory(Guid id)
    {
      var category = DataStore.Instance.Categories.FirstOrDefault(c => c.Id == id);
      return category.GetProducts().ToArray();
    }
  }
}
