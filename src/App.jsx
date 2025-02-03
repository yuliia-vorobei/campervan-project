import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const SingleCatalog = lazy(() =>
  import("./pages/SingleCatalogPage/SingleCatalogPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

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
