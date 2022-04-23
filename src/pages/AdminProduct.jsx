// npm
import { useState } from "react";
// firebase
import { createDocument } from "../firebase/firestore";
// components
import ProductForm from "../components/ProductForm";

export default function AdminProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [imgURL, setImgURL] = useState("");
  const [dishes, setDishes] = useState([]);
  const [optionValue, setOptionValue] = useState("");

  const filePath = `dishes/dishes/content/${optionValue}/content`;

  async function onCreateProduct(event) {
    event.preventDefault();
    const payload = {
      name: name,
      description: description,
      price: price,
      recipe: recipe,
      imgURL: imgURL,
    };
    const documentId = await createDocument(filePath, payload);
    payload.id = documentId;
    setDishes([...dishes, payload]);
    resetForm();
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice(0);
    setRecipe("");
    setImgURL("");
  }

  return (
    <ProductForm
      nameState={[name, setName]}
      describeState={[description, setDescription]}
      priceState={[price, setPrice]}
      recipeState={[recipe, setRecipe]}
      imgState={[imgURL, setImgURL]}
      optionState={[optionValue, setOptionValue]}
      onCreateProduct={onCreateProduct}
    />
  );
}
