import Home from "./resources/Pages/Home";
import Work from "./resources/Pages/Work";
import Projects from "./resources/Pages/Projects";
import Contact from "./resources/Pages/Contact";

const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
  },
  {
    path: "/work",
    sidebarName: "Work",
    component: Work,
  },
  {
    path: "/projects",
    sidebarName: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    sidebarName: "Contact",
    component: Contact,
  },
];

export default Routes;
