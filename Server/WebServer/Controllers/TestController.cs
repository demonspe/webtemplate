using System.Web.Http;

namespace WebServer.Controllers
{
  public class TestController : ApiController
  {
    public string Get()
    {
      return "Hello world";
    }
  }
}
