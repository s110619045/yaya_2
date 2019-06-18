import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import LoginPage from "../pages/LoginPage";
import ShopPage from "../pages/ShopPage";
import CommentPage from "../pages/CommentPage";
import News16 from "../pages/News16";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "*", component: Main },
    { path: "/login", component: LoginPage},
    { path: "/ShopPage", component: ShopPage},
    { path: "/CommentPage", component: CommentPage},
    { path: "/news/:id", component: News16, props: true }
  ]
});
