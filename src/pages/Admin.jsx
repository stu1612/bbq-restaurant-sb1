// npm
import { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// files
import { readCollection } from "../firebase/firestore";
import loadItems from "../scripts/loadItems";
// components
import Loading from "../components/Loading";

export default function Admin() {
  const { dishes, setDishes } = useContext(AppContext);
  const [status, setStatus] = useState(0);
  const [products, setProducts] = useState([]);

  const path = "dishes/dishes/content/";

  useEffect(() => {
    loadItems(path, setDishes, setStatus);
  }, [setDishes, status]);

  async function loadProducts(path, setter, status) {
    const data = await readCollection(path);
    setter(data);
    status(1);
    return data;
  }

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const CategoryItems = dishes.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
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
    products.map((product) => <p key={product.id}>{product.name}</p>);

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
