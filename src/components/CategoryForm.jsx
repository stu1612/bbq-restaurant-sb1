// components
import InputField from "./InputField";
import FileInput from "./FileInput";
// files
import validateString from "../scripts/validateString";
import formInput from "../data/CategoryInputData.json";

export default function CategoryForm({
  titleState,
  describeState,
  onCreateCategory,
  onImageSelect,
}) {
  const [title, setTitle] = titleState;
  const [description, setDescription] = describeState;

  return (
    <form onSubmit={onCreateCategory}>
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
      <FileInput onImageSelect={onImageSelect} />
      <button type="submit">Submit</button>
    </form>
  );
}
