import { readCollection } from "../firebase/firestore";

export default async function loadItems(path, setter, status) {
  const data = await readCollection(path);
  setter(data);
  status(1);
  return data;
}
