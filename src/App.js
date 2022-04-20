// npm
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// files
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import CategoryForm from "./pages/CategoryForm";
import ProductForm from "./pages/ProductForm";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu/:categoryId" element={<Menu />} />
        <Route path="menu/:categoryId/:subId" element={<Category />} />
        <Route path="menu/:categoryId/:subId/:title" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />}>
          <Route path="categoryForm" element={<CategoryForm />} />
          <Route path="productForm" element={<ProductForm />} />
        </Route>
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
