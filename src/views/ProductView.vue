<script setup>
import { ProductService } from "@/services/ProductService";
import { onMounted, ref } from "vue";

const product = ref({
    name: "",
    category: "",
    price: ""
});

const products = ref([]);

const ps = new ProductService();

function loadProducts() {

    ps.retrieveAllProducts()
        .then((res) => {
            products.value = res.data;
            console.log(products.value);
        })
        .catch((err) => {
            console.log("Error loading products");
            console.log(err);
        });
}

onMounted(() => {
    console.log("Product View Mounted");
    loadProducts();
});

function saveProduct() {

    ps.addProduct(product.value)
        .then((res) => {

            alert("✅ Product Saved Successfully!");

            console.log(res.data);

            product.value = {
                name: "",
                category: "",
                price: ""
            };

            // Reload the table
            loadProducts();

        })
        .catch((err) => {

            alert("❌ Failed to Save Product");

            console.log(err);

        });
}
</script>

<template>
  <div class="product-view">

    <h2>Product Management</h2>

    <div class="card">

      <div class="mb-3">
        <label>Product Name</label>
        <input
          type="text"
          class="form-control"
          v-model="product.name"
        />
      </div>

      <div class="mb-3">
        <label>Category</label>
        <input
          type="text"
          class="form-control"
          v-model="product.category"
        />
      </div>

      <div class="mb-3">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          v-model="product.price"
        />
      </div>

      <button class="btn btn-primary" @click="saveProduct">
        Save Product
      </button>

    </div>

    <hr>

    <table class="table table-bordered table-striped">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-warning btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>

      </tbody>

    </table>

  </div>
  <h3 />
  <pre>{{ product }}</pre>
</template>