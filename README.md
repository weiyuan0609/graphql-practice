
## 启动
node src/server.js

## 例子 
    输入：  
      {
        projectByName(name: "Learn React Native") {
          id
          name
          tasks {
            title
            id
          }
        }
      }
    输出： 
    {
    "data": {
      "projectByName": {
        "id": 1,
        "name": "Learn React Native",
        "tasks": [
          {
            "title": "Install Node",
            "id": 1
          },
          {
            "title": "Install React Native CLI:",
            "id": 2
          },
          {
            "title": "Install Xcode",
            "id": 3
          }
        ]
      }
    }
}


链接：  
http://graphql.cn/code/
https://segmentfault.com/a/1190000011263214#articleHeader3  
http://jerryzou.com/posts/10-questions-about-graphql/  