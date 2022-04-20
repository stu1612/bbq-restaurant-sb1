// NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Project files
import { readCollection } from "../firebase/firestore";
// components
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";

export default function Category() {
  const { categoryId, subId } = useParams();
  // Local state
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
      const data = await readCollection(
        `dishes/${categoryId}/content/${subId}/content`
      );
      setItems(data);
      setStatus(1);
    }
    loadData();
  }, [categoryId, subId]);

  // Safeguard
  if (status === 0) return <Loading />;

  // Components
  const ProductItems = items.map((item) => (
    <ProductItem item={item} key={item.id} routeIds={[categoryId, subId]} />
  ));

  return (
    <div className="category">
      <h1>{subId}</h1>
      <div className="grid">{ProductItems}</div>
    </div>
  );
}
