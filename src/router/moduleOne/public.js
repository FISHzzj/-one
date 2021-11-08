export default [
    {
        path: "/login", //登录
        name: "login",
        component: () => import("@/element/login.vue"),
        meta: {
            index: 0,
            mustLogin: false,//1111,
        }
    },
    {
        path: "/register", //注册
        name: "register",
        component: () => import("@/element/register.vue"),
        meta: {
            index: 0,
            mustLogin: false,//1111,
        }
    }
];