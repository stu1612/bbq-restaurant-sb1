// npm
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// files
import { readDocument, readCollection } from "../firebase/firestore";
import CategoryItem from "../components/CategoryItem";
import Loading from "../components/Loading";
import { AppContext } from "../context/AppContext";

export default function Menu() {
  const { categoryId } = useParams();
  const [document, setDocument] = useState({});
  const [status, setStatus] = useState(0);
  const { dishes, setDishes } = useContext(AppContext);

  // method
  useEffect(() => {
    async function loadData() {
      const documentData = await readDocument("dishes", categoryId);
      const itemsData = await readCollection(`dishes/${categoryId}/content/`);
      setDocument(documentData);
      setDishes(itemsData);
      setStatus(1);

      if (itemsData.length === 0) {
        setStatus(1);
      }
    }
    loadData();
  }, [categoryId, setDishes]);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  // const EmptyArray = items.length === 0 && <p>Nope</p>;

  const CategoryItems = dishes.map((item) => (
    <CategoryItem item={item} key={item.id} categoryId={categoryId} />
  ));

  return (
    <section className="menu" id="menu">
      <h2>{document.title}</h2>
      <div>{CategoryItems}</div>
    </section>
  );
}
