/**
 * Get all products
 * @returns {Promise<*[]|any>}
 */
export async function getAllProducts() {
  try {
    const response = await fetch('/products');
    return await response.json();
  } catch (error) {
    return [];
  }
}

/**
 * Get a single product
 * @param id
 * @returns {Promise<*[]|any>}
 */
export async function getSingleProduct(id) {
  try {
    const product = await fetch(`/products/${id}`);
    const jsonResponse = await product.json();
    return jsonResponse.product;
  } catch (error) {
    return [];
  }
}
