<template>
  <div class="container">
    <h2>Product Management</h2>

    <form @submit.prevent="saveProduct">

      <div class="form-group">
        <label>Product Name</label>
        <input
          type="text"
          v-model="product.name"
          placeholder="Enter Product Name"
          required
        />
      </div>

      <div class="form-group">
        <label>Category</label>
        <input
          type="text"
          v-model="product.category"
          placeholder="Enter Category"
          required
        />
      </div>

      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          v-model="product.price"
          placeholder="Enter Price"
          required
        />
      </div>

      <button type="submit">
        Add Product
      </button>

    </form>

    <hr>

    <h3>Products</h3>

    <table>

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
        </tr>

      </tbody>

    </table>

  </div>
</template>