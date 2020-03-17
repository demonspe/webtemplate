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
    /// <param name="name">Имя категории</param>
    /// <returns>Массив товаров из этой категории.</returns>
    [HttpGet]
    public Product[] FromCategory(string name)
    {
      var category = DataStore.Instance.Categories.FirstOrDefault(c => c.Name == name);
      return category?.GetProducts().ToArray();
    }

    /// <summary>
    /// Получить список товаров в корзине.
    /// </summary>
    /// <returns>Массив товаров из корзины.</returns>
    [HttpGet]
    public Product[] FromCart()
    {
      return DataStore.Instance.Cart.Products.ToArray();
    }
  }
}
