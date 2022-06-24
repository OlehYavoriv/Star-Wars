import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "*",
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
