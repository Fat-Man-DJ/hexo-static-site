---
title: Hexo主题开发 Part 1
tags:
  - Hexo
categories: []
date: 2020-10-25 15:20:00
---

## 1.环境准备

Git 和 NodeJS 安装我不会多讲

但如何安装Hexo环境，有两种方法

1.
```shell
hexo init
```

2.
先clone官方的hexo模板

执行
```shell
npm install
# or
cnpm install
```

## 2.框架
随便找一个hexo主题

然后把文件夹里的文件全部删掉

然后重命名主题文件夹成你喜欢的名字

> 注：是themes文件夹里面的主题文件夹，如下

![pic_1.png](https://shop.io.mi-img.com/app/shop/img?id=shop_5d35e09e28f8ebf272d580c528b1eccc.png)

## 3.Hello World！

在主题文件夹里的layout文件夹，

新建一个叫index.ejs的文件

![屏幕截图 2020-10-25 190203.png](https://shop.io.mi-img.com/app/shop/img?id=shop_1af80790de3a4eba27ac1e5e7b50134e.png)

写入以下内容：

```html
<html>
  <head>
  </head>
  <body>
    Hello World
  </body>
</html>
```

将_config.yml里的theme改成主题文件夹名

让后运行Hexo

浏览localhost:4000

你应该会看待网页上显示着Hello World

恭喜你完成了第一步！
