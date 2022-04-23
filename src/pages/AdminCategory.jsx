// npm
import { useState, useContext } from "react";
import CategoryForm from "../components/CategoryForm";
import { AppContext } from "../context/AppContext";
// files
import { createDocument } from "../firebase/firestore";

export default function AdminCategory() {
  const { dishes, setDishes } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState("");

  async function onCreate(event) {
    event.preventDefault();
    const payload = {
      title: title,
      description: description,
      imgURL: imgURL,
    };
    const filePath = "dishes/dishes/content";
    const documentId = await createDocument(filePath, payload);
    payload.id = documentId;
    setDishes([...dishes, payload]);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setImgURL("");
  }
  return (
    <CategoryForm
      titleState={[title, setTitle]}
      describeState={[description, setDescription]}
      imgState={[imgURL, setImgURL]}
      onCreate={onCreate}
    />
  );
}
