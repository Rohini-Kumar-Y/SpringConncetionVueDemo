import axios from "axios";

export class ProductService {

    URL = "http://localhost:8080/api/v1/products";

    // Create Product
    addProduct(product) {
        return axios.post(this.URL, product);
    }

    // Get All Products
    retrieveAllProducts() {
        return axios.get(this.URL);
    }

    // Get Product By Id
    getProductById(id) {
        return axios.get(`${this.URL}/${id}`);
    }

    // Update Product
    updateProduct(id, product) {
        return axios.put(`${this.URL}/${id}`, product);
    }

    // Delete Product
    deleteProduct(id) {
        return axios.delete(`${this.URL}/${id}`);
    }
}