import BaseLayout from "@/layouts/BaseLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";
import NotFound from "@/pages/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
