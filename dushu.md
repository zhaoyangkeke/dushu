> 项目介绍

  这是一个全新的读书平台,在全新的文化世界里,我们国家近几年,又兴起了,魔幻,玄幻,穿越,的网络小说,在这个小米书城中我们可以,观看到你想看的所有,一致受到了广大网友的好评

>技术栈

gulp + require + jquery + handlebars + ES6/7 + ajax + sass + flex + 懒加载

>目录结构

>dushu

    |——mock
    |    |——data
    |    |    |---352876.json    //老九门数据
    |    |    |---chapter-list.json    //目录
    |    |    |---data1.json    //第一章的jsonp
    |    |    |---data2.json    //第二章的jsonp
    |    |    |---data3.json    //第三章的jsonp
    |    |    |---data4.json    //第四章的jsonp
    |    |    |---lohin.json    //登录页数据
    |    |——home
    |    |    |---home.json          //首页数据
    |    |    |---recommend1.json    //加载更多
    |    |    |---recommend2.json    //加载更多
    |    |    |---recommend3.json    //加载更多
    |    |    |---search.json        //搜索结果
    |    |    |---searchKey.json     //搜索关键字
    |    |-index.js                 //数据接口
    |——src
    |    |——page
    |    |    |——search.html //搜索页
    |    |    |——read.html //文章阅读页
    |    |    |——detail.html //详情页
    |    |    |——mulu.html //目录页
    |    |    |——login.html //登录页
    |    |——fonts  //字体图标
    |    |——js
    |    |    |——common
    |    |    |    |-temp.js     //handlebars模板
    |    |    |    |-getUrl.js   //获取地址栏参数
    |    |    |——page
    |    |    |    |-index.js    //首页
    |    |    |——search
    |    |    |    |-search.js   //搜索页
    |    |    |——read
    |    |    |    |-read.js     //文章阅读页
    |    |    |——detail
    |    |    |    |-detail.js   //详情页
    |    |    |——mulu
    |    |    |    |-mulu.js     //目录页
    |    |    |——login
    |    |    |    |-login.js    //登录页
    |    |    |——lib
    |    |    |    |-require.js
    |    |    |    |-handlebars.js
    |    |    |    |-flexible.js
    |    |    |    |-jquery.js
    |    |    |    |-jquery.lazyload.js  //图片懒加载
    |    |    |    |-jquery.base64.js    //解码阅读文章 
    |    |    |    |-require.text.js
    |    |    |——main.js                 //require配置文件
    |    |——css
    |    |    |-style.css
    |    |    |-common.css
    |    |    |-detail.css
    |    |    |-read.css
    |    |    |-mulu.css
    |    |    |-search.css
    |    |——templay
    |    |    |-lunbo.html      //轮播
    |    |    |-hot.html        //最火
    |    |    |-lick.html       //女生最爱 男生最爱 
    |    |    |-tuijian.html    //重磅推荐
    |    |    |-xqy.html        //详情页
    |    |    |-mian.html       //限时免费
    |    |    |-gd.html         //精选专题
    |    |——img  //所用图片
    |    |-index.html            //首页
    |-gulpfile.js


![image](./buld/image/0180629161704.png)
![image](./buld/image/20180629161830.png)
![image](./buld/image/20180629161901.png)
![image](./buld/image/20180629161932.png)
    