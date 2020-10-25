---
title: Flask-1：Hello World
date: 2020/8/1
categories:
  - Python
  - Flask
tags:
  - Flask
  - Python
---

[万 物 皆 可 h e l l o w o r l d]

<!--more-->

# 1.安装

```bash
pip install flask
```
即可

如果你没有添加环境变量或者没有安装python，请移步：[Windows下的Python安装与环境变量的配置](https://www.cnblogs.com/vilee/p/10029675.html)

# 2.Hello World

新建一个.py文件

输入：
```python
from flask import  *
app = Flask(__name__)



@app.route('/')
def index():
    return "Hello World"

app.run(port=80)
```

运行它

在游览器里打开localhost

如果看到Hello World就代表你成功了！
