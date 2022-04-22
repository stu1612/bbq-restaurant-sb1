// npm
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// files
import { readCollection } from "../firebase/firestore";

export default function Admin() {
  // const [dishes, setDishes] = useState([]);
  // const [status, setStatus] = useState(0);

  // method
  // useEffect(() => {
  //   async function loadData() {
  //     const listData = await readCollection("dishes/dishes/content/");
  //     setDishes(listData);
  //     setStatus(1);
  //   }
  //   loadData();
  // }, [setDishes]);

  // const categoryItems = dishes.map((item) => (
  //   <div key={item.id}>
  //     <p>{item.title}</p>
  //   </div>
  // ));

  return (
    <div>
      <nav>
        <Link to="categoryForm">Add Category</Link>;
        <Link to="productForm">Add Product</Link>;
      </nav>
      <Outlet />
      <div>
        <h3>Categories</h3>
        {/* {categoryItems} */}
      </div>
    </div>
  );
}
