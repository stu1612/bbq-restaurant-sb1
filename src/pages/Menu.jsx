// npm
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// files
import { readDocument, readCollection } from "../firebase/firestore";
import CategoryItem from "../components/CategoryItem";
import Loading from "../components/Loading";

export default function Menu() {
  const { categoryId } = useParams();
  const [document, setDocument] = useState({});
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(0);

  // method
  useEffect(() => {
    async function loadData() {
      const documentData = await readDocument("dishes", categoryId);
      const itemsData = await readCollection(`dishes/${categoryId}/content/`);

      setDocument(documentData);
      setItems(itemsData);
      setStatus(1);
    }
    loadData();
  }, [categoryId]);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const Categories = items.map((item) => (
    <CategoryItem item={item} key={item.id} categoryId={categoryId} />
  ));

  return (
    <section className="menu" id="menu">
      <h2>{document.title}</h2>
      <div>{Categories}</div>
    </section>
  );
}
