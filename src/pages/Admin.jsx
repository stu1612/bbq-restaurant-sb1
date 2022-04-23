// npm
import { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// files
import loadItems from "../scripts/loadItems";
import loadProducts from "../scripts/loadProducts";
// components
import Loading from "../components/Loading";
import deleteItem from "../scripts/deleteItem";

export default function Admin() {
  const { dishes, setDishes } = useContext(AppContext);
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);

  const path = "dishes/dishes/content/";

  useEffect(() => {
    loadItems(path, setDishes, setStatus);
  }, [setDishes, status]);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const CategoryItems = dishes.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.id}</p>
      <button onClick={() => deleteItem(path, item.id, dishes, setDishes)}>
        Delete
      </button>
      <button
        onClick={() =>
          loadProducts(
            `dishes/dishes/content/${item.id}/content`,
            setProducts,
            setStatus
          )
        }
      >
        See items
      </button>
    </div>
  ));

  const items =
    products &&
    products.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.id}</p>
        <button
          onClick={() =>
            deleteItem(
              `dishes/dishes/content/${item.id}/content`,
              item.id,
              products,
              setProducts
            )
          }
        >
          Delete
        </button>
      </div>
    ));

  return (
    <div>
      <nav>
        <Link to="categoryForm">Add Category</Link>
        <Link to="productForm">Add Product</Link>
      </nav>
      <Outlet />
      <section>
        <h2>Categories</h2>
        {CategoryItems}
        <h3>items</h3>
        {items}
      </section>
    </div>
  );
}
