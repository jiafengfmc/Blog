module.exports = {
    base: '/Blog',
    title: '王佳峰个人博客',
    head: [
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: `./favicon.ico`
        }]
    ],
    description: '王佳峰个人博客-技术积累',
    themeConfig: {
        nav: [{
            text: '首页',
            link: '/'
        }, ],
        sidebar: [{
                title: '前端',
                path: '/static/web/JavaScript/',
                collapsable: false, // 不折叠
                children: [{
                        title: "JavaScript",
                        path: "/static/web/JavaScript/",
                        collapsable: false, // 不折叠
                        children: [{
                            title: "Es6-let 和 const 命令",
                            path: "/static/web/JavaScript/letorconst",
                            collapsable: false, // 不折叠
                        }, {
                            title: "Object.freeze()",
                            path: "/static/web/JavaScript/Object.freeze",
                            collapsable: false, // 不折叠
                        }, ]
                    },
                    {
                        title: "TypeScript",
                        path: "/static/web/TypeScript/",
                        collapsable: false, // 不折叠
                    },
                    {
                        title: "Html",
                        path: "/static/web/Html/",
                        collapsable: false, // 不折叠
                        children: [{
                            title: "实现九宫格抽奖",
                            path: "/static/web/Html/luckDraw",
                            collapsable: false, // 不折叠
                        }]
                    },
                    {
                        title: "框架",
                        path: "/static/web/frame/Vue/",
                        collapsable: false, // 不折叠
                        children: [{
                                title: "Vue",
                                path: "/static/web/frame/Vue/",
                                collapsable: false, // 不折叠
                            },
                            {
                                title: "React",
                                path: "/static/web/frame/React/",
                                collapsable: false, // 不折叠
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Java',
                path: '/static/Java/',
                collapsable: false, // 不折叠
            },
        ]
    }
}