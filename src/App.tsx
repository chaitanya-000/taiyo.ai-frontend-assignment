import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import Charts_And_Maps from "./pages/Charts_And_Maps";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Contact />} />
        <Route index path="Charts_And_Maps" element={<Charts_And_Maps />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
