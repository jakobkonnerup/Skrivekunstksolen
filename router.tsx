import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Undervisning from "./pages/Undervisning";
import PriserKontakt from "./pages/PriserKontakt";
import Arrangementer from "./pages/Arrangementer";
import Undervisere from "./pages/Undervisere";
import Inspire from "./pages/Inspire";
import Politik from "./pages/Politik";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/undervisning", element: <Undervisning /> },
  { path: "/priser-kontakt", element: <PriserKontakt /> },
  { path: "/arrangementer", element: <Arrangementer /> },
  { path: "/undervisere", element: <Undervisere /> },
  { path: "/bliv-inspireret", element: <Inspire /> },
  { path: "/politik", element: <Politik /> },
]);

export default router;
