import Vue from "vue";
import VueRouter from "vue-router";
import Music from "@/views/Music.vue";
import Custom from "@/views/Custom.vue";
import Echarts from "@/views/Echarts.vue";
import My from "@/views/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/music",
  },
  {
    path: "/music",
    name: "music",
    component: Music,
    redirect: "/music/home",
    children: [
      {
        path: "/music/home",
        name: "home",
        component: () => import("@/views/music/Home.vue"),
      },
      {
        path: "/music/rank",
        name: "rank",
        component: () => import("@/views/music/Rank.vue"),
      },
      {
        path: "/music/singer",
        name: "singer",
        component: () => import("@/views/music/Singer.vue"),
      },
    ],
  },
  {
    path: "/custom",
    name: "custom",
    component: Custom,
    redirect: "/custom/user1",
    children: [
      {
        path: "/custom/user1",
        name: "home",
        component: () => import("@/views/custom/User1.vue"),
      },
      {
        path: "/custom/user2",
        name: "rank",
        component: () => import("@/views/custom/User2.vue"),
      },
      {
        path: "/custom/user3",
        name: "singer",
        component: () => import("@/views/custom/User3.vue"),
      },
    ],
  },
  {
    path: "/echarts",
    name: "echarts",
    component: Echarts,
    redirect: "/echarts/chart1",
    children: [
      {
        path: "/echarts/chart1",
        name: "chart1",
        component: () => import("@/views/echarts/chart1.vue"),
      },
      {
        path: "/echarts/chart2",
        name: "chart2",
        component: () => import("@/views/echarts/chart2.vue"),
      },
      {
        path: "/echarts/chart3",
        name: "chart3",
        component: () => import("@/views/echarts/chart3.vue"),
      },
    ],
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
];

const router = new VueRouter({
  mode: "history", //去掉去路前#，路由模式由hash改为history
  routes,
});

export default router;

const tableList = [
  {
    key: "1",
    source: "工单管理",
    type: "沟通回复",
    openMess: true,
    openEmail: false,
  },
  {
    key: "2",
    source: "工单管理",
    type: "状态变更",
    openMess: false,
    openEmail: true,
  },
  {
    key: "3",
    source: "工单管理",
    type: "状态变更",
    openMess: true,
    openEmail: false,
  },
  {
    key: "4",
    source: "工单管理",
    type: "沟通回复",
    openMess: false,
    openEmail: true,
  },
  {
    key: "5",
    source: "工单管理",
    type: "沟通回复",
    openMess: true,
    openEmail: true,
  },
  {
    key: "6",
    source: "工单管理",
    type: "沟通回复",
    openMess: true,
    openEmail: false,
  },
  {
    key: "7",
    source: "资源管理",
    type: "沟通回复",
    openMess: true,
    openEmail: true,
  },
  {
    key: "8",
    source: "资源管理",
    type: "沟通回复",
    openMess: true,
    openEmail: false,
  },
];

const data = [
  {
    name: "工单管理",
    child: [
      {
        type: "沟通回复",
        openMess: true,
        openEmail: true,
      },
      {
        type: "沟通回复",
        openMess: true,
        openEmail: true,
      },
    ],
  },
];
