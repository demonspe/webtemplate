using System;
using System.Collections.Generic;

namespace WebServer.Models
{
  /// <summary>
  /// Товар.
  /// </summary>
  public class Product
  {
    /// <summary>
    /// Id товара.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Название товара.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Id категории к которой относится товар.
    /// </summary>
    public Guid CategoryId { get; set; }

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="name">Имя товара.</param>
    public Product(string name)
    {
      this.Id = Guid.NewGuid();
      this.Name = name;
    }
  }

  /// <summary>
  /// Категория товаров.
  /// </summary>
  public class Category
  {
    /// <summary>
    /// Id категории.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Имя категории.
    /// </summary>
    public string Name { get; set; }

    private List<Product> products;

    /// <summary>
    /// Товары в этой категории.
    /// </summary>
    public IEnumerable<Product> GetProducts() => products;

    /// <summary>
    /// Добавить товар в категорию.
    /// </summary>
    /// <param name="product">Товар.</param>
    public void AddProduct(Product product)
    {
      if (product == null)
        return;
      product.CategoryId = this.Id;
      this.products.Add(product);
    }

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="name">Имя категории.</param>
    public Category(string name)
    {
      this.Id = Guid.NewGuid();
      this.Name = name;
      this.products = new List<Product>();
    }
  }

  /// <summary>
  /// Корзина.
  /// </summary>
  public class Cart
  {
    private List<Product> products = new List<Product>();

    /// <summary>
    /// Коллекция товаров в корзине.
    /// </summary>
    public IEnumerable<Product> Products => this.products;

    /// <summary>
    /// Добавить товар в корзину.
    /// </summary>
    /// <param name="product">Товар.</param>
    public void Add(Product product)
    {
      if (product != null)
        this.products.Add(product);
    }

    /// <summary>
    /// Удалить товар из корзины.
    /// </summary>
    /// <param name="product"></param>
    public void Remove(Product product)
    {
      this.products.Remove(product);
    }

    /// <summary>
    /// Очистить корзину.
    /// </summary>
    public void Clear()
    {
      this.products.Clear();
    }
  }
}