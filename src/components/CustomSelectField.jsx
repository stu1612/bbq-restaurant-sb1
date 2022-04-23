// npm
import { useState, useEffect } from "react";
// files
import { readCollection } from "../firebase/firestore";

export default function CustomSelectField({ optionState }) {
  const [optionValue, setOptionValue] = optionState;
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadCategoryItems(path) {
      const listData = await readCollection(path);
      setList(listData);
    }
    loadCategoryItems(`dishes/dishes/content/`);
  }, [optionValue]);

  const OptionItem = list.map((item) => (
    <option value={item.title} key={item.id}>
      {item.title}
    </option>
  ));
  return (
    <select
      value={optionValue}
      onChange={(event) => setOptionValue(event.target.value)}
    >
      {OptionItem}
    </select>
  );
}
