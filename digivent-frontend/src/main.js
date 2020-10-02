import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  {
    name: "event",
    path: "/",
    component: () => import("./components/event/Event"),
    props: true,
  },
  {
    name: "edit",
    path: "/:eventId?/edit",
    component: () => import("./components/edit-event/EditEvent"),
    props: true,
  },
  {
    name: "details",
    path: "/:eventId/details",
    component: () => import("./components/event-details/EventDetails"),
    props: true,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("userName")) return next("login");
      next();
    },
  },
  {
    name: "book",
    path: "/booking",
    component: () => import("./components/book/BookEvent"),
    props: true,
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import("./components/profile/Profile"),
    props: true,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("userName")) return next("login");
      next();
    },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("./components/login/Login"),
  },
  {
    name: "register-user",
    path: "/register-user",
    component: () => import("./components/register/RegisterUser"),
    props: true,
  },
  {
    name: "register-speaker",
    path: "/register-speaker",
    component: () => import("./components/register/RegisterSpeaker"),
    props: true,
  },
  {
    name: "PostQuestion",
    path: "/post-question",
    component: () => import("./components/post-question/PostQuestion"),
    props: true,
  },
  {
    name: "Question",
    path: "/question",
    component: () => import("./components/question/Question"),
    props: true,
  },
  {
    name: "MyQuestions",
    path: "/my-questions",
    component: () => import("./components/question/MyQuestions"),
    props: true,
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
