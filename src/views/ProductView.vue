<script setup>
import { ref } from "vue";

const product = ref({
  name: "",
  category: "",
  price: ""
});
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
</template>