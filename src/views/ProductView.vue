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
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to load products.");
    });
}

onMounted(() => {
  loadProducts();
});

function saveProduct() {
  ps.addProduct(product.value)
    .then(() => {
      alert("Product Added Successfully!");

      product.value = {
        name: "",
        category: "",
        price: ""
      };

      loadProducts();
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to add product.");
    });
}
</script>
<template>
  <div class="page">

    <div class="card">

      <div class="header">
        <h1>📦 Product Management</h1>
        <p>Add and manage your products</p>
      </div>

      <div class="form">

        <div class="input-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            v-model="product.name"
          />
        </div>

        <div class="input-group">
          <label>Category</label>

          <select v-model="product.category">
            <option disabled value="">Choose Category</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Furniture</option>
            <option>Sports</option>
            <option>Beauty</option>
            <option>Clothing</option>
            <option>Toys</option>
            <option>Groceries</option>
          </select>

        </div>

        <div class="input-group">
          <label>Price</label>

          <input
            type="number"
            placeholder="Enter Price"
            v-model="product.price"
          />

        </div>

        <button class="save-btn" @click="saveProduct">
          Save Product
        </button>

      </div>

    </div>

    <div class="table-card">

      <div class="table-header">

        <h2>Product List</h2>

        <div class="badge">
          {{ products.length }} Products
        </div>

      </div>

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

          <tr
            v-for="p in products"
            :key="p.id"
          >
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.category }}</td>
            <td>₹ {{ p.price }}</td>
          </tr>

          <tr v-if="products.length==0">
            <td colspan="4" class="empty">
              No Products Found
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>
<style scoped>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

.page{
width:100%;
min-height:100vh;
padding:40px;
background:#f3f6fb;
}

.card,
.table-card{
width:100%;
background:white;
border-radius:18px;
overflow:hidden;
box-shadow:0 12px 30px rgba(0,0,0,.08);
margin-bottom:35px;
}

.header{
background:linear-gradient(135deg,#2563eb,#4f46e5);
padding:35px;
color:white;
}

.header h1{
font-size:36px;
margin-bottom:8px;
}

.header p{
font-size:18px;
opacity:.9;
}

.form{
padding:35px;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:25px;
align-items:end;
}

.input-group{
display:flex;
flex-direction:column;
}

.input-group label{
font-weight:600;
margin-bottom:8px;
}

input,
select{
padding:14px;
border:1px solid #ddd;
border-radius:10px;
font-size:16px;
}

input:focus,
select:focus{
outline:none;
border-color:#2563eb;
box-shadow:0 0 8px rgba(37,99,235,.2);
}

.save-btn{
height:52px;
border:none;
background:#2563eb;
color:white;
font-size:17px;
border-radius:10px;
cursor:pointer;
transition:.3s;
}

.save-btn:hover{
background:#1d4ed8;
}

.table-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:25px 30px;
}

.badge{
background:#2563eb;
color:white;
padding:10px 20px;
border-radius:30px;
font-weight:600;
}

table{
width:100%;
border-collapse:collapse;
}

thead{
background:#2563eb;
color:white;
}

th,
td{
padding:18px;
text-align:center;
}

tbody tr:nth-child(even){
background:#f8f9ff;
}

tbody tr:hover{
background:#eef4ff;
}

.empty{
padding:25px;
color:#666;
}

@media(max-width:768px){

.page{
padding:20px;
}

.form{
grid-template-columns:1fr;
}

}

</style>