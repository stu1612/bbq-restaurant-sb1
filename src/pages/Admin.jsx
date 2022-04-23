// npm
import { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// files
import { readCollection } from "../firebase/firestore";
// components
import Loading from "../components/Loading";

export default function Admin() {
  const { dishes, setDishes } = useContext(AppContext);
  const [status, setStatus] = useState(0);

  // method
  useEffect(() => {
    async function loadData(path) {
      const listData = await readCollection(path);
      setDishes(listData);
      setStatus(1);
    }
    loadData("dishes/dishes/content/");
  }, [setDishes]);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const categoryItems = dishes.map((item) => (
    <div key={item.id}>
      <p>{item.title}</p>
    </div>
  ));

  return (
    <div>
      <nav>
        <Link to="categoryForm">Add Category</Link>;
        <Link to="productForm">Add Product</Link>;
      </nav>
      <Outlet />
      <div>
        <h3>Categories</h3>
        {categoryItems}
      </div>
    </div>
  );
}
