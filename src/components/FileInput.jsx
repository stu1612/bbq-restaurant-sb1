import { useState } from "react";

export default function FileInput({ getter, setter }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleFileInput(event) {
    const file = event.target.files[0];
    setter(file);

    if (getter === null) {
      setErrorMessage("File required");
    }
    if (getter > 3000) {
      setErrorMessage("File cannot excced 3mb");
    }
  }

  return (
    <label>
      Upload image:
      <input
        type="file"
        accept="image/png, image/jpg"
        onChange={handleFileInput}
        required
      />
      <small>{errorMessage}</small>
    </label>
  );
}
