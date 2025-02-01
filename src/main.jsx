import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import "./index.css";
import App from "./App.jsx";
import FallbackLoader from "./components/FallbackLoader.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Quizzes = lazy(() => import("./pages/Quizzes.jsx"));
const Result = lazy(() => import("./pages/Result.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/quizzes",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Quizzes />
          </Suspense>
        ),
      },
      {
        path: "/result",
        element: (
          <Suspense fallback={<FallbackLoader />}>
            <Result />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
