(this["webpackJsonpinstagram-react"]=this["webpackJsonpinstagram-react"]||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var c=t(0),o=t.n(c),l=t(72),i=t.n(l),s=(t(92),t(73)),r=t(74),m=t(85),n=t(83),A=t(0),d=t(36),k=function(e){return A.createElement("a",{href:"#",style:{color:"black",margin:"10px",fontSize:"1.5rem"}},A.createElement(d,{className:e}))},p=t(36),E=t.n(p),u=t(134);function f(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-dark bg-light d-flex justify-content-between border  fixed"},o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("a",{href:"#"},o.a.createElement("img",{src:e.logo,alt:"logo"}))),o.a.createElement("div",{className:"search_icon"},o.a.createElement(E.a,{className:"fas fa-search"})),o.a.createElement("div",null,o.a.createElement("input",{className:"form-control mr-sm-2 text-center",type:"search",placeholder:"Search","aria-label":"Search"})),o.a.createElement("div",{className:"menu__icons"},k("fas fa-home"),k("far fa-paper-plane"),k("fas fa-compass"),k("fas fa-heart"),o.a.createElement(u.a,{src:e.userPict,alt:"Mauricio"})))))}var h=t(25),I=t(84),y=t(24),C=t(12);function g(e){return e.cards.map((function(e){var a=e.id,t=e.name,c=e.likes,l=e.comments,i=e.url;return o.a.createElement("div",{className:"card",key:a},o.a.createElement("img",{key:a,src:i,alt:t}),o.a.createElement("div",{key:a,className:"card__likes"},o.a.createElement("span",{className:"likes"},o.a.createElement("span",{class:"material-icons"},"favorite"),o.a.createElement("span",null,c)),o.a.createElement("span",{className:"comments"},o.a.createElement("span",{class:"material-icons"},"comment"),o.a.createElement("span",null,l))))}))}var b=t(78);t(117);function j(e){return e.cards.map((function(e){var a=e.id,t=(e.name,e.likes),c=e.comments,l=e.url;return o.a.createElement("div",{className:"video__card"},o.a.createElement(b.Player,{autoplay:!0,key:a,src:l}),o.a.createElement("div",{className:"video__card__likes"},o.a.createElement("span",{className:"video__likes"},o.a.createElement("span",{class:"material-icons"},"favorite"),o.a.createElement("span",null,t)),o.a.createElement("span",{className:"video__comments"},o.a.createElement("span",{class:"material-icons"},"comment"),o.a.createElement("span",null,c))))}))}function H(e){return o.a.createElement(y.a,{basename:"/Instagram-react"},o.a.createElement("div",{className:"post__navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(y.b,{to:"/"},o.a.createElement("span",{class:"material-icons"},"view_comfy"),o.a.createElement("span",null,"Posts"))),o.a.createElement("li",null,o.a.createElement(y.b,{to:"/video"},o.a.createElement("span",{class:"material-icons"},"local_offer"),o.a.createElement("span",null,"Video"))),o.a.createElement("li",null,o.a.createElement(y.b,{to:"/reels"},o.a.createElement("span",{class:"material-icons"},"ondemand_video"),o.a.createElement("span",null,"Reels"))))),o.a.createElement("div",{className:"post__card"},o.a.createElement(C.c,null,o.a.createElement(C.a,{exact:!0,path:"/"},o.a.createElement(g,{cards:e.data.posts})),o.a.createElement(C.a,{path:"/video"},o.a.createElement(j,{cards:e.data.videos})),o.a.createElement(C.a,{path:"/reels"},o.a.createElement(g,{cards:e.data.tags})))))}function Q(e){var a=Object(c.useState)({follow:"Follow",style:{backgroundColor:"#0095f6",color:"white"}}),t=Object(I.a)(a,2),l=t[0],i=t[1];return o.a.createElement("div",{className:"container mt-3 header"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 logo__container"},o.a.createElement("div",null,o.a.createElement("img",{src:e.data.user.logo,alt:"logo",style:{borderRadius:"50%"}}))),o.a.createElement("div",{className:"col-sm-8 d-flex flex-column"},o.a.createElement("div",{className:"channel__div"},o.a.createElement("div",{className:"chanel__container"},o.a.createElement("h1",{className:"chanel__name"},e.data.user.channel__name),o.a.createElement("span",{className:"follow",style:l.style,onClick:function(){"Follow"===l.follow?i(Object(h.a)(Object(h.a)({},l),{},{follow:"Unfollow",style:{backgroundColor:"transparent",color:"black",border:"1px solid #6e6e6e"}})):i(Object(h.a)(Object(h.a)({},l),{},{follow:"Follow",style:{backgroundColor:"#0095f6",color:"white"}}))}},l.follow),o.a.createElement("span",{className:"similar__pages"},o.a.createElement("span",{class:"material-icons"},"expand_more")),o.a.createElement("span",{className:"dots"},o.a.createElement("span",{class:"material-icons"},"more_horiz")))),o.a.createElement("div",{className:"user__info"},o.a.createElement("div",{className:"pots"},o.a.createElement("strong",null,e.data.user.posts),"Posts"),o.a.createElement("div",{className:"followers"},o.a.createElement("strong",null,e.data.user.followers),"Followers"),o.a.createElement("div",{className:"following"},o.a.createElement("strong",null,e.data.user.following),"Following")),o.a.createElement("div",{className:"channel__info"},o.a.createElement("h4",null,e.data.user.info__title),o.a.createElement("ul",null,e.data.user.info__text.map((function(e){return o.a.createElement("li",null,e)})))),o.a.createElement("div",null))),o.a.createElement("div",{className:"container posts__div"},o.a.createElement("div",{className:"card__container"},o.a.createElement(H,{data:e.data}))))}var x=t(80),w=t.n(x),S=t(81),J=t.n(S),M=t(82),O=function(e){Object(m.a)(t,e);var a=Object(n.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{logo:w.a,userPict:J.a}),o.a.createElement(Q,{data:M}))}}]),t}(o.a.Component);t(119);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))},80:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAdCAMAAACAJoJsAAACwVBMVEUAAAAjHyAjHyD///8zIiIjHyBAQEAkICErICsmJiYsISEmIiKAgIAjHyAnISEtLS0kHyIpKSkkICEkHyEkHyE5OTkkICEjHyAzMzMuIyMkJCQjICElHyImISEjICErKyskJCQoKCgkICEkICEkICElICAmHyNAIEAkICEkISEnJyczMzMmJiYkICFVVVUkICAlISEjICAjHyEjHyElICAjHyEjHyEjICEkICEkICAkICIrIiIkHyAkHyEjICAkICAjHyElISEkISElICArKysmICArKysjICEkHyAkHyAkICIkISEnIyMkICElISEkHyAjICEuLi4kHyAjHyAlICUkISEnIyMkICAkJCQjHyAjHyEpIyMkHyEkICIkICEjICEjICAmIiIjICEkICIjICAkICAkISEkICAlHyIkICEwIDAoIiIjICIkHyIkISEkICQmISEkHyEkICElICIjICEkISEkICAkICAkICAjICAjISElHyEjISEkHyAkHyQjISEkISEmICYjICEkICAkISEkICAkHyApIiIjICEkICAkISElICMkJCQjHyEkICAjICEjHyEkHyEjHyEnIiIkICAjICEkHyAkHyEjICAkISEjHyAkICAkICInJyckHyEkICEkISEjICAjICEkHyEjHyEjICMkHyEmJiYjICAmISEkHyEkICAjIyMkICQlISEkICEjIyMnISEkISEkICAkICAkJCQlICIoIiIkJCQjICAjICAjICMkISEnJyckJCQlISEkICIjIyMkICEjICIpISEjICEkIiIjICAmIiImHyIkICAjIyMkHyEjISEkHyEkHyEkISEjICAmICMjICIkHyAlHyUlICAkHyAkJCQjHyMlHyElICIjICAkICEkICEkHyAlICAkHyAoICgkICAjICEmHyMlIiIkICEkICAkHyQjHyAYxkEZAAAA6nRSTlMA/fwBD/4E+hgUF0MC7i4Rchn5nPsJ+OYKFjLgWi/pBioTucDydlEIyUYaBRuoA3d9l7zDZ8xz2tBHgR7NlN+GikVObxJfDMr03XlNO6E+xdIL1b0wXUK/FfWDLKuAsNHnNcJw751rf1K4ECaYalxANrOqYdmFj8eWrl6SdO0xbZUokZ5Vz+Ql4daNYCO0t5nL23s0h9jsrJ9W9r5xIZPqZLXwpMRQmiKtPevOJDiE8R0nY36vK1ktB7amSIwNDnV4M7KJH+hb9zxKxjqjbOPzVKdYkN4pN9QcQYtoV+K65W7cII6gSVOxPzlNBvrEAAAEaklEQVR4XrXNU5OeiQJF4fV+atq2EXd3bNu2PbE5sTO2bds+tm2sX3HqfFW5m75IJf3c7dq7agP0+GFBQS+6Ulfw02e4GfKqQ99oBl34gc7hJugxy98/oEl0Yb/WcxP0dCmzNJkuvKcDuHHN+c5mnibyLcJ35adl67nq/TmJ3Jg6O6FGs/gWkZBxGvoNN6a/V6CvZlH1nTwgdeqXxM2eeBLyRmcV6MnK481QOTEziwhxRatuT2cGQGb768RB+Kklb8ca3gXY9hBEUj4Cyl4jboEL4UlNpJ93f0Ryu8HPw0BpoBkAp/UMwJiQru5t56vAHY9rcGe0vIl0HUfrLa8BLdvVPldD90I4cB0bTEunLOSfNgL82XUwTRPZosnhGnP1CKQ+ryVhgAJtBcpyrV2zS/0vxG7TDZfUTEbqgrs12AQ9dfqU8ToBWvTKL9XhHFNLAY65A76nyazV+X9w8DD9PlSpXwPwlY4GntXnqDqsxbBTH4bPdS0Ny9zVd7muIJLmzDwO6Dlo0M3D1N4Vadl6H8DomfdnsVeTOapJL2RXDtPZwDgLIgCU6wwozPdJoE0roY+5SfCo9oO++Uk8ZkID6+OxMOQpmKGbh0677JomT+hIAPKWjKBRixilAxzCrboJyNEJdwA8rzF4SV8GBupFUmttBEbo6yQGT8By22G4LgKGuhc+1sE+tdi2gwkDtIlrxul8VukTCYPI0VdhU+7CoWYfgB4/VmCr7gR66SAe0n8AKbqTnm6jUN+Hx3Q+sMuVsFFd3bLGy/2rV+hvueaqJpGp47fD+5oIS/eGmzuNjmSuBsBRXQ8M01bSdQ8wSccUlu+HRP0CajQGnLUGMtQdDPdcaEu6zuWads2gQy2FezSZEUExnMl2Op8HRlNhiP4MaNNBlGkOkKljDoWOwzO6DubFd+8GroTRaiYdavFF/S4UEjdYx/KJZo+FZ3VQQ+cQgDfNn9NYrRlUnNYOCJfoWyTrLGCx3l67Gxgb9UOYookwWQfDc2o992moJS/qASpKiOtvEKNO5xHfDzjxo42/aoY3DSVMHa4pTJwWuBRS1HqadHkqSffrgmUVABPsAzv0J3CvpsHT6me8o7+AoZ5n7l3EzfQsPKgDgYEaDVIWJaT16pmgL3NEGz9MKL5kqHTy2T6/9p6MlSW68K0HanX1iwCcNzT1pUdynV521N/pByMOq2focdpG2G35kep9xP3RDTBJ64EVgaEL1Aeq+W8AOeohjh9WayJvq6eqTqklk7WDuIxlGp30oBo9RJv6l/HaCunHxkDRX3X83wCIJbgeYr02FwGc/PtnQOWnJ/Z90gwQ3rrnn0DrkodHVsAtt9ZFKBzV+0LWdt1CHGNHHUz5fzUwHVoe7V3Kvw7eGSYOit44v4i4bY5L5TpF+oZCjuK69Pv3x1ynpP7B1jRX0c0iL7iWWufQzRabA4FNdK//WB4hWd+he+12D6T4eIzuVeenMMR9dLMXX5nwQWbubUl0t+L3Xnnk6arrOPgfG95WRPTKWcwAAAAASUVORK5CYII="},81:function(e,a){e.exports="data:image/jpeg;base64,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"},82:function(e){e.exports=JSON.parse('{"user":{"channel__name":"MauricioDev","logo":"https://scontent-ber1-1.cdninstagram.com/v/t51.2885-19/s150x150/65408786_475591846592750_976418745540935680_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com&_nc_ohc=sqYs3Wo1hBAAX_mLZ1y&oh=2006f44784d4a2c818fc41c7dc51b499&oe=5F638BA3","posts":123,"followers":698,"following":20,"info__title":"Mauricio","info__text":["Web development student.","Passionate about ReactJS, MongoDB, ExpressJS.","E-mail: j-ms-27@hotmail.com."]},"posts":[{"id":"teD7jMb","race":"dog","likes":"299.9k","comments":"13k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"VyhP0ia","race":"dog","likes":"200.9k","comments":"11.2k","url":"https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"P9rkk8D","race":"dog","likes":"309.9k","comments":"5k","url":"https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"7mmEopT","race":"dog","likes":"209.9k","comments":"12k","url":"https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"tKhLAAY","race":"dog","likes":"125.9k","comments":"12k","url":"https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"tPw9spf","race":"dog","likes":"175.9k","comments":"5.3k","url":"https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"p6DOR27","race":"dog","likes":"275.9k","comments":"7k","url":"https://images.unsplash.com/photo-1576702438167-5341af8f0c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"tvJFYwK","race":"cat","likes":"205.9k","comments":"15.2k","url":"https://images.unsplash.com/photo-1542395765-761de4ee9696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"jepxOhs","race":"dog","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1577375870519-0a9fdb747f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"hc6JIxs","race":"dog","likes":"86.9k","comments":"21k","url":"https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"e5Wmtz7","race":"cat","likes":"869.9k","comments":"5k","url":"https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"cCyKgKI","race":"cat","likes":"6.9m","comments":"2.7k","url":"https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"l5axxNP","race":"bunny","likes":"86.9k","comments":"21k","url":"https://images.unsplash.com/photo-1560651921-d0f00d033501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"Z7yufqu","race":"bunny","likes":"869.9k","comments":"5k","url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"LFpWaCq","race":"bunny","likes":"6.9m","comments":"2.7k","url":"https://images.unsplash.com/photo-1506478260391-8dc8e747cdd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"gdh3MsO","race":"dog","likes":"209.9k","comments":"12k","url":"https://images.unsplash.com/photo-1593640475872-c8b414553244?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"lep9CMM","race":"dog","likes":"125.9k","comments":"12k","url":"https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"vJeuBAR","race":"dog","likes":"175.9k","comments":"5.3k","url":"https://images.unsplash.com/photo-1551476934-df3469af86af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"GnAjEZ2","race":"dog","likes":"275.9k","comments":"7k","url":"https://images.unsplash.com/photo-1525641964647-eccdf3c13af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"YhkwHgt","race":"cat","likes":"205.9k","comments":"15.2k","url":"https://images.unsplash.com/photo-1577375870519-0a9fdb747f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"PfwtWCO","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1532769200180-0eb4314a75f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"dAzR2wd","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1571126770130-a74e645a3811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"XFCPKGb","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1515388544247-1d0605806096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"Wln7urY","race":"dog","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1596831749402-783c83a82655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}],"videos":[{"id":"yz10ERv","race":"dog","likes":"299.9k","comments":"13k","url":"https://vod-progressive.akamaized.net/exp=1599928573~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3648%2F17%2F443244046%2F1941326365.mp4~hmac=4fc791fd352c3aa4b92a06e1a4e5f0dcdb67342b26c6ad20fcdd0698f0ba2a8f/vimeo-prod-skyfire-std-us/01/3648/17/443244046/1941326365.mp4?filename=Glacier+Express+-+45569.mp4"},{"id":"jolbmtm","race":"cat","likes":"200.9k","comments":"11.2k","url":"https://i.imgur.com/jolbmtm.png"},{"id":"sLsAKA4","race":"cat","likes":"309.9k","comments":"5k","url":"https://i.imgur.com/sLsAKA4.png"},{"id":"y5Yeoh6","race":"cat","likes":"299.9k","comments":"13k","url":"https://i.imgur.com/y5Yeoh6.png"},{"id":"FPlsLa3","race":"dog","likes":"200.9k","comments":"11.2k","url":"https://i.imgur.com/FPlsLa3.png"},{"id":"9GCekWi","race":"dog","likes":"309.9k","comments":"5k","url":"https://i.imgur.com/9GCekWi.png"}],"tags":[{"id":"l5axxNP","race":"bunny","likes":"86.9k","comments":"21k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"Z7yufqu","race":"bunny","likes":"869.9k","comments":"5k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"LFpWaCq","race":"bunny","likes":"6.9m","comments":"2.7k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"gdh3MsO","race":"dog","likes":"209.9k","comments":"12k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"lep9CMM","race":"dog","likes":"125.9k","comments":"12k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"vJeuBAR","race":"dog","likes":"175.9k","comments":"5.3k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"GnAjEZ2","race":"dog","likes":"275.9k","comments":"7k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"YhkwHgt","race":"cat","likes":"205.9k","comments":"15.2k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"PfwtWCO","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"dAzR2wd","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"XFCPKGb","race":"cat","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":"Wln7urY","race":"dog","likes":"2.9m","comments":"214k","url":"https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}]}')},87:function(e,a,t){e.exports=t(120)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.a308e064.chunk.js.map