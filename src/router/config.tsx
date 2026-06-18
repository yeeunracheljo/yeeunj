import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Work from "../pages/work/page";
import WorkAnua from "../pages/work-anua/page";
import WorkLG from "../pages/work-lg/page";
import WorkReta from "../pages/work-reta/page";
import WorkMacsLearning from "../pages/work-macslearning/page";
import WorkUtkcc from "../pages/work-utkcc/page";
import WorkDrRejuall from "../pages/work-dr-rejuall/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/work/karrot-campus-sprint",
    element: <Work />,
  },
  {
    path: "/work/anua-consumer-report",
    element: <WorkAnua />,
  },
  {
    path: "/work/lg-interbrand-strategy",
    element: <WorkLG />,
  },
  {
    path: "/work/dr-rejuall",
    element: <WorkDrRejuall />,
  },
  {
    path: "/work/reta",
    element: <WorkReta />,
  },
  {
    path: "/work/macslearning",
    element: <WorkMacsLearning />,
  },
  {
    path: "/work/utkcc",
    element: <WorkUtkcc />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
