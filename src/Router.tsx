import { Routes, Route, Navigate } from "react-router-dom";
import { Blog } from "./pages/Blog/Blog";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Post } from "./pages/Post/Post";

export function Router() {
  return ( 
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Navigate to="/issues" />} />
      <Route path="/issues" element={<Blog />} />
      <Route path="/issues/:id" element={<Post />} />
    </Route>
  </Routes>
  );
}
