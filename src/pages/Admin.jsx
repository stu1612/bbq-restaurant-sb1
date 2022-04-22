import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <nav>
        <Link to="categoryForm">Add Category</Link>;
        <Link to="productForm">Add Product</Link>;
      </nav>
      <Outlet />
      <div>
        <h3>Categories</h3>
      </div>
    </div>
  );
}
