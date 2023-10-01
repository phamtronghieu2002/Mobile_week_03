import Bai1 from "../components/Bai01/Bai1";
import Bai2 from "../components/Bai02/Bai02";
import Bai03 from "../components/Bai03/Bai03";
import Bai08 from "../components/Bai08/Bai08";
import Home from "../components/Home/Home";
import configs from "../configs";
const router = [
  {
    name: configs.routes.Home.name,
    component: Home,
    options: { title: configs.routes.Home.title },
  },
  {
    name: configs.routes.Bai1.name,
    component: Bai1,
    options: { title: configs.routes.Bai1.title },
  },
  {
    name: configs.routes.Bai2.name,
    component: Bai2,
    options: { title: configs.routes.Bai2.title },
  },
  {
    name: configs.routes.Bai3.name,
    component: Bai03,
    options: { title: configs.routes.Bai3.title },
  },
  {
    name: configs.routes.Bai8.name,
    component: Bai08,
    options: { title: configs.routes.Bai8.title },
  },
];

export default router;
