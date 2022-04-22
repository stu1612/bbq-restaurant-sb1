// npm
import { useState } from "react";
// components
import InputField from "../components/InputField";
// files
import validateString from "../scripts/validateString";
import { createDocument } from "../firebase/firestore";

// data
import formInput from "../data/CategoryInputData.json";

// context
// import { DishContext } from "../context/DishContext";

export default function AdminCategory() {
  // const { dishesList, setDishesList } = useContext(DishContext);
  const [dishes, setDishes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState(
    "https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  );

  async function addItem(event) {
    event.preventDefault();
    const payload = {
      documentId: title,
      title: title,
      description: description,
      imgURL: imgURL,
    };
    const path = "dishes/dishes/content";
    const document = await createDocument(payload, path, title);
    payload.title = document;
    setDishes([...dishes, payload]);
  }

  return (
    <form onSubmit={addItem}>
      <InputField
        setup={formInput.title}
        state={[title, setTitle]}
        validation={validateString}
      />
      <InputField
        setup={formInput.description}
        state={[description, setDescription]}
        validation={validateString}
      />

      <label>
        Image:
        <input
          type="text"
          accept="image/png, image/jpg"
          value={imgURL}
          onChange={(event) => setImgURL(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
