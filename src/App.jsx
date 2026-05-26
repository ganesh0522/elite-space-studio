import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader/Loader";

// Lazy Loaded Pages

const Home = lazy(() =>
  import("./pages/Home/Home")
);

const About = lazy(() =>
  import("./pages/About/About")
);

const Services = lazy(() =>
  import("./pages/Services/Services")
);

const Projects = lazy(() =>
  import("./pages/Projects/Projects")
);

const Contact = lazy(() =>
  import("./pages/Contact/Contact")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>

          <Route
            path="/"
            element={<MainLayout />}
          >

            <Route
              index
              element={<Home />}
            />

            <Route
              path="about"
              element={<About />}
            />

            <Route
              path="services"
              element={<Services />}
            />

            <Route
              path="projects"
              element={<Projects />}
            />

            <Route
              path="contact"
              element={<Contact />}
            />

          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;