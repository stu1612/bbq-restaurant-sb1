// files
import { getDoc, doc, getDocs, setDoc, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "./firebase";

// methods
export async function readDocument(path, id) {
  const documentPath = doc(firestore, path, id);
  const document = await getDoc(documentPath);
  return document.data();
}

export async function readCollection(path) {
  const collectionPath = collection(firestore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });
  return documents;
}

export async function createDocument(data, path, title) {
  // const documentReference = doc(firestore, path, title);
  const documentReference = doc(firestore, path, title);
  const document = await setDoc(documentReference, data);
  return document;
}

export async function addDocument(path, data) {
  const documentPath = collection(firestore, path);
  const document = await addDoc(documentPath, data);

  return document.id;
}
