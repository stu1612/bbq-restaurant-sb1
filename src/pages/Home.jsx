// npm
import { useState, useEffect } from "react";
// files
import { readCollection } from "../firebase/firestore";
import jsonContent from "../data/HomeContent.json";
// components
import Loading from "../components/Loading";
import ContentItem from "../components/ContentItem";
import PillsContainer from "../components/PillsContainer";
import EmptyArrayMessage from "../components/EmptyArrayMessage";

export default function Home() {
  const [status, setStatus] = useState(1);
  const [items, setItems] = useState([]);

  // method
  useEffect(() => {
    async function loadData() {
      const itemsData = await readCollection("dishes/dishes/content/");
      setItems(itemsData);
      setStatus(1);
    }
    loadData();
  }, []);

  // safeguard
  if (status === 0) return <Loading />;
  if (status === 2) return <p>Error ..</p>;

  const EmptyArray = items.length === 0 && <EmptyArrayMessage />;

  const dataObj = jsonContent[Object.keys(jsonContent)[0]];
  const dataObj1 = jsonContent[Object.keys(jsonContent)[1]];
  const dataObj2 = jsonContent[Object.keys(jsonContent)[2]];

  return (
    <section className="home" id="home">
      <div className="hero-image">
        <h1>holy bbq</h1>
        <img src="" alt="" />
      </div>
      <ContentItem>{dataObj}</ContentItem>
      <div className="banner-image">
        <img src="" alt="" />
      </div>
      <ContentItem>{dataObj1}</ContentItem>
      <div className="banner-image">
        <img src="" alt="" />
      </div>
      <article className="content">
        <ContentItem>{dataObj2}</ContentItem>
        <PillsContainer items={items} />
        {EmptyArray}
      </article>
    </section>
  );
}
