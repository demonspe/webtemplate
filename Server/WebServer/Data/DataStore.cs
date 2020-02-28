using System;
using System.Collections.Generic;
using System.Linq;
using WebServer.Models;

namespace WebServer.Data
{
  public class DataStore
  {
    #region Singletone

    private static Lazy<DataStore> instance = new Lazy<DataStore>(() => new DataStore());

    /// <summary>
    /// Singletone.
    /// </summary>
    public static DataStore Instance => instance.Value;

    #endregion

    #region Поля и свойства

    /// <summary>
    /// Все товары.
    /// </summary>
    public List<Product> Products => this.Categories.SelectMany(c => c.GetProducts()).ToList();

    /// <summary>
    /// Все категории.
    /// </summary>
    public List<Category> Categories { get; } = new List<Category>();

    /// <summary>
    /// Корзина.
    /// </summary>
    public Cart Cart { get; set; } = new Cart();

    #endregion

    #region Методы

    /// <summary>
    /// Заполнить хранилище тестовыми данными.
    /// </summary>
    private void InitData()
    {
      var tvCategory = new Category("Телевизоры");
      tvCategory.AddProduct(new Product("Телевизор Sony1"));
      tvCategory.AddProduct(new Product("Телевизор Sony2"));
      tvCategory.AddProduct(new Product("Телевизор Sony3"));
      tvCategory.AddProduct(new Product("Телевизор Sony4"));
      Categories.Add(tvCategory);

      var iceCategory = new Category("Холодильники");
      iceCategory.AddProduct(new Product("Холодильник Indusit"));
      iceCategory.AddProduct(new Product("Холодильник Perta"));
      iceCategory.AddProduct(new Product("Холодильник Ursulla"));
      iceCategory.AddProduct(new Product("Холодильник Sever"));
      Categories.Add(iceCategory);

      var coffeeCategory = new Category("Кофеварки");
      coffeeCategory.AddProduct(new Product("Кофеварка 1"));
      coffeeCategory.AddProduct(new Product("Кофеварка 2"));
      coffeeCategory.AddProduct(new Product("Кофеварка 3"));
      coffeeCategory.AddProduct(new Product("Кофеварка 4"));
      Categories.Add(coffeeCategory);
    }

    #endregion

    #region Конструкторы

    /// <summary>
    /// Конструктор.
    /// </summary>
    private DataStore()
    {
      InitData();
    } 

    #endregion
  }
}