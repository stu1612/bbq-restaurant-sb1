// npm
import { useState } from "react";
// firebase
import { createDocument } from "../firebase/firestore";
// components
import ProductForm from "../components/ProductForm";

export default function AdminProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [recipe, setRecipe] = useState([]);
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );
  const [dishes, setDishes] = useState([]);
  const [optionValue, setOptionValue] = useState("");

  async function onCreateProduct(event) {
    event.preventDefault();
    const payload = {
      name: name,
      description: description,
      price: price,
      recipe: recipe,
      imgURL: imgURL,
    };
    const filePath = `dishes/dishes/content/${optionValue}/content`;
    const documentId = await createDocument(filePath, payload);
    payload.id = documentId;
    setDishes([...dishes, payload]);
    resetForm();
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice("");
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
