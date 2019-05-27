const routes = [
  {
    path: "/",
    component: () => import("../features/Index.vue")
  },
  {
    path: "/collections/client_list",
    component: () => import("../features/Collections/ClientsList.vue")
  },
  {
    path: "/collections/client_detail",
    //component: () => import("../layouts/Landing.vue")
    component: () => import("../features/Collections/ClientDetail.vue")
  },
];

routes.push({
  path: "*",
  component: () => import("../features/Error404.vue")
});
export default routes;
