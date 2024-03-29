export default [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'index' },
        component: () => import("@/element/home"),
        meta:{
            index: 0,
            mustLogin: false,//1111,
        },
        children: [
            {
                path: '/index', // 首页
                name: 'index',
                component: () => import("@/element/home/index.vue"),
                props: false,//1111,
                meta:{
                    index: 1,
                    mustLogin: true,//
                }
            },
        ]
    },
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
    },
    {
        path: "/forget", //忘记密码
        name: "forget",
        component: () => import("@/element/forget.vue"),
        meta: {
            index: 0,
            mustLogin: false,//1111,
        }
    },
    {
        path: "/yangzhi", //养殖
        name: "yangzhi",
        component: () => import("@/element/home/yangzhi.vue"),
        meta: {
            index: 0,
            mustLogin: true,//1111,
        }
    },
    {
        path: "/invite", //分享
        name: "invite",
        component: () => import("@/element/home/invite.vue"),
        meta: {
            index: 0,
            mustLogin: true,//1111,
        }
    },
    {
        path: "/loader", //loading加载
        name: "loader",
        component: () => import("@/element/common/Loader.vue"),
        meta: {
            index: 0,
            mustLogin: true,//1111,
        }
    }
];