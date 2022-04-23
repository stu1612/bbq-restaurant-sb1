// components
import InputField from "./InputField";
import CustomSelectField from "./CustomSelectField";
import FileInput from "./FileInput";

// files
import validateString from "../scripts/validateString";
import validateNumber from "../scripts/validateNumber";
import formInput from "../data/ProductInputData.json";

export default function ProductForm({
  nameState,
  describeState,
  priceState,
  recipeState,
  optionState,
  onCreateProduct,
  onImageSelect,
}) {
  const [name, setName] = nameState;
  const [description, setDescription] = describeState;
  const [price, setPrice] = priceState;
  const [recipe, setRecipe] = recipeState;

  return (
    <form onSubmit={onCreateProduct}>
      <CustomSelectField optionState={optionState} />
      <InputField
        setup={formInput.name}
        state={[name, setName]}
        validation={validateString}
      />
      <InputField
        setup={formInput.description}
        state={[description, setDescription]}
        validation={validateString}
      />
      <InputField
        setup={formInput.price}
        state={[price, setPrice]}
        validation={validateNumber}
      />
      <InputField
        setup={formInput.recipe}
        state={[recipe, setRecipe]}
        validation={validateString}
      />
      <FileInput onImageSelect={onImageSelect} />
      <button type="submit">Submit</button>
    </form>
  );
}
