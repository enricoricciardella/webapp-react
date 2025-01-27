import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Layout } from "./pages/Layout"
import { MovieDetail } from "./pages/MovieDetail"
import { NoPage } from "./pages/NoPage"
import { MovieList } from "./pages/MovieList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/:slug" element={<MovieDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
