using System;
using System.Linq;
using System.Web.Http;
using WebServer.Data;

namespace WebServer.Controllers
{
  public class CartController : ApiController
  {
    /// <summary>
    /// Добавить товар в корзину.
    /// </summary>
    /// <param name="id">Guid товара.</param>
    [HttpPost]
    public void Add([FromUri]Guid id)
    {
      var product = DataStore.Instance.Products.FirstOrDefault(p => p.Id == id);
      if (product == null)
        return;

      DataStore.Instance.Cart.Add(product);
    }

    /// <summary>
    /// Удалить товар из корзины.
    /// </summary>
    /// <param name="id">Guid товара.</param>
    [HttpPost]
    public void Remove([FromUri]Guid id)
    {
      var product = DataStore.Instance.Products.FirstOrDefault(p => p.Id == id);
      if (product == null)
        return;

      DataStore.Instance.Cart.Remove(product);
    }
  }
}
