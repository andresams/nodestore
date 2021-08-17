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
        return await product.json();
    } catch (error) {
        return [];
    }
}

export async function createProduct(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json();
}