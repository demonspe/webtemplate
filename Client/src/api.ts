import { ICategory, IProduct } from './types/models';

/** Получить список всех категорий. */
export async function getAllCategories(): Promise<Array<ICategory>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/categories/all', options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

/** Получить список товаров по названию категории.
 * @param categoryName Название категории.
 */
export async function getProductsFromCategory(categoryName: string): Promise<Array<IProduct>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/products/fromCategory?name=' + categoryName, options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

/** Получить список всех товаров в корзине. */
export async function getProductsInCart(): Promise<Array<IProduct>> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET'
  };
  const response = await fetch('api/products/fromCart/', options);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error(`Error: ${response.statusText}`);
}

/** Добавить товар в корзину.
 * @param id Id товара.
 */
export async function addToCart(id: string): Promise<void> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  };
  const response = await fetch('api/cart/add/' + id, options);
  if (response.ok)
    return;

  throw new Error(`Error: ${response.statusText}`);
}

/** Удалить товар из корзины.
 * @param id Id товара.
 */
export async function removeFromCart(id: string): Promise<void> {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  };
  const response = await fetch('api/cart/remove/' + id, options);
  if (response.ok)
    return;

  throw new Error(`Error: ${response.statusText}`);
}