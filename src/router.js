import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import IndexComponent from "@/components/IndexComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import CreateComponent from "@/components/CreateComponent.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent,
  },

  {
    name: "register",
    path: "/register",
    component: RegisterComponent,
  },
  {
    name: "login",
    path: "/login",
    component: LoginComponent,
  },
  {
    name: "createpost",
    path: "/createPost",
    component: CreateComponent,
  },
  {
    name: "editpost",
    path: "/edit/:id",
    component: EditComponent,
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
