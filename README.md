# electron-vite-vue
> 该项使用此模板进行开发

🥳 Really simple `Electron` + `Vue` + `Vite` boilerplate.  
[![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-vue)](https://github.com/electron-vite/electron-vite-vue/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470)](https://github.com/electron-vite/electron-vite-vue)
[![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vite-vue)](https://github.com/electron-vite/electron-vite-vue)

## 项目设想
基本：  
账号系统
基础功能：
查询标签库：初始化给予用户自定义的标签库（标签化有初始化模板，在创建用户时间进行）
添加任务：以周为单位定制计划,且只能指定从现在时刻至周末的计划
删除任务：确定删除任务
修改任务：修改任务内容，标签
查找任务：查找创建的任务以及任务信息。
统计：
- 本周完成了多少内容
- 本周还剩下多少任务
- 本周超时了多少任务
  未完成任务列表：
- 任务删除：是否确定删除任务？
- 任务修改：延迟时间期限（ 时间是从现在至周末）

## 页面
登录注册  
个人信息  
任务栏

## 开发记录

### 22.11.25
初始化了Vue+Electron项目  
创建了layouts模板目录作为承载所有页面的模板  
配置router   
``` npm install vue-router@4```  
安装Vant3  
```npm i vant```
建立了路由以及初始化模板  
配置axios  
```npm install axios```

### 22.11.26
完成了登录功能  
编写了登录页面以及注册功能(基于AccountPage,通过子路由进行切换)   
编写了本地用户类型以及在本地储存用户信息  
