import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import SingleCatalog from "./pages/SingleCatalogPage/SingleCatalogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<SingleCatalog />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
