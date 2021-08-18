/**
 * Get a list containing all categories
 * @returns {Promise<*[]|any>}
 */
export async function getAllCategories() {
  try {
    const response = await fetch('/categories');
    return await response.json();
  } catch (error) {
    return [];
  }
}

/**
 * Get a single category with product data
 * @param id
 * @returns {Promise<*[]|any>}
 */
export async function getSingleCategory(id) {
  try {
    const category = await fetch(`/categories/${id}/products`);
    return await category.json();
  } catch (error) {
    return [];
  }
}
