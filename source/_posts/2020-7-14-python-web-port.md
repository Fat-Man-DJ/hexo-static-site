---
title: Flask+Request实现web接口
date: 2020/7/14
tags:
  - Web
  - Python
categories: python
---


```bash
blog with love
```

<!--more-->
废话不多说,代码!

web.py:
```python
from flask import  Flask
app = Flask(__name__)
import tokengenerator

@app.route('/')
def index():
    return '<h1>Welcome To NGEdit Active Code Port!</h1>'

@app.route('/token')
def index():
  return tokengenerator.token()

if __name__ == '__main__':
    app.run(port=80)
```

tokengenerator.py:
```Python
import time
import random


lsa = list("12aAbBcCdDeEfFgGhHiIjJkK9lLm78MnNoO56pPqQrLsStTuUvV34wWxXyYzZ")
def token:
    p = random.choice(lsa)
    p1 = random.choice(lsa)
    p2 = random.choice(lsa)
    p3 = random.choice(lsa)
    p4 = random.choice(lsa)
    p5 = random.choice(lsa)
    p6 = random.choice(lsa)
    p7 = random.choice(lsa)
    p8 = random.choice(lsa)
    p9 = random.choice(lsa)
    p10 = random.choice(lsa)
    p11 = random.choice(lsa)
    p12 = random.choice(lsa)
    p13 = random.choice(lsa)
    p14 = random.choice(lsa)



    hole = p+p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14
    return hole
```

crawl.py:
```python
import request

response = request.get("http://localhost:80/token")
print(response.text)
```

利用python做web的好处就是:

可以直接返回python中的变量

也就是说:

### 你可以直接用pymysql,redis-py直接返回数据库中的数据

所以好处就体现出来了~

在第一个文件中,我们创建了一个flask程序,指定了/token地址返回激活码

在第二个文件,我们生成了随机的token

在crawl.py中来爬取网页数据

end~~
