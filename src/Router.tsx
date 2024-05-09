import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog/Blog";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

export function Router() {
  
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        {/* <Route path="/:id" element={<Post />} /> */}
      </Route>
    </Routes>
  );
}