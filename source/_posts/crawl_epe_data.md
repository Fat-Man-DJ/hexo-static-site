---
title: 使用Python-Flask实现登录
tags:
  - Python
  - Flask
date: 2020/10/7
---

> 又鸽了

# 第一步

<ul>
  <li>
    1.确保自己安装了MonogoDB
  </li>
  <li>
    2.确保安装了PyMongo,Flask等Python库
  </li>
  </ul>

# 2:主体代码

main.py:

```python
from flask import Flask
from flask import render_template
from flask import request
import dbdata

app = Flask(__name__)
@app.route("/",methods=['POST','GET'])
def index():

    if request.method=="POST":
        user = request.form['user']
        password = request.form['password']
        if dbdata.checkDataExists(user,password) == True:
            return render_template('_temp/index.html',user=user)

    else:
        return render_template('_temp/layout.html',co="请输入用户和密码")
@app.errorhandler(500)
def internal_server_error(e):
    return render_template("_temp/500.html"),500
def index():

    if request.method=="POST":
        user = request.form['user']
        password = request.form['password']
        for i in dbdata.returnData():
            if user == i['username'] and password==i['password']:
                return render_template('_temp/index.html',user=i['username'])

    else:
        return render_template('_temp/layout.html',co="请输入用户和密码")

@app.route("/register",methods=['POST','GET'])
def register():

    if request.method=="POST":
        user = request.form['user']
        password = request.form['password']
        dbdata.Register(user,password)
        print("Register Succesful")
        if dbdata.checkDataExists(user,password) == True:
            return render_template('_temp/layout.html',co="Register Succesful!Please Login.")

    else:
        return render_template('_temp/layout.html',co="请输入用户和密码")



if __name__=='__main__':
    app.run()
```

dbdata.py:
```python
import pymongo

client = pymongo.MongoClient('mongodb://YourMonogoDBConnectAddres')#这里填自己的MongoDB地址
db = client['login']
data = db['userData']

def Register(name,password):
    dict = { "username": name,"password": password }
    x = data.insert_one(dict)

def returnData():
    return data.find({},{ "_id": 0})

def checkDataExists(username,password):
    datax = {"username": username,"password": password}
    for i in  data.find({},{ "_id": 0}):
        if datax != i:
            return False
        elif datax == i:
            return True
        else:
            return None
```

模板文件最后放，以免伸手党

# 3.代码解析

第一节：

```python
from flask import Flask
from flask import render_template
from flask import request
import dbdata

app = Flask(__name__)
```
