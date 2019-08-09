---
title : "手机APP(Insite Gold)说明书"
linktitle: 手机APP(Insite Gold)说明书
description: 枫叶APP（Insite Gold）的安装调试和使用说明
date: 2017-02-01
publishdate: 2017-02-01
lastmod: 2017-02-01
keywords: [ssg,static,performance,security]
menu:
  docs:
    parent: "安装和维护"
    weight: 13
weight: 30
sections_weight: 30
draft: false
aliases: []
layout: single
toc: true
---

## 简介

Insite Gold是枫叶针对枫叶安防系统自主开发的手机应用app，集成了报警，视频复核，门禁控制和自动化控制功能，是报警系统、监控系统、门禁系统和智能家居控制的“一站式”解决方案。

## 版本日志

- 更新日期：20190611，版本：2.5.2，安卓请点[下载](attachment/InsiteGold-V2.5.2.apk)；
  - Migration of “Paradox my home” sites to new SWAN.
  - Fixed push notification language support (only on IP150 v4.40.011)
  - Bug and stability fixes.
  
- 更新日期：20190530，版本：2.5.1，安卓请点[下载](attachment/InsiteGold-V2.5.1.apk)；
  - Migration of “Paradox my home” sites to new SWAN.
  - Fixed push notification language support (only on IP150 v4.40.011)
  - Bug and stability fixes.

- 更新日期：20190522，版本：2.5.0，安卓请点[下载](attachment/InsiteGold-V2.5.0.apk)；
  - Migration of “Paradox my home” sites to new SWAN.
  - Panel language support.
  - New info button with option to share site details.
  - Hostname support on fixed IP mode.
  - Bug and stability fixes.
  
关于功能的详细描述请访问：[了解更多](http://aboutswan.paradox.com/version_insitegold)

## 准备工作

硬件：枫叶主机和网络模块IP150，并接入互联⽹（连接IP150的路由器需要开启DHCP）；

软件：手机上安装Insite Gold软件，IOS用户到商店搜索Insite Gold，

## 首次使用

### 步骤一：确认主机状态，记录主机8位序列号

1. 确保IP150的软件版本在V4.0以上，Internet灯长亮，如下图：

    ![IP150](images/ip150.png)

2. 记录枫叶主机8位序列号。如下图：

![SN](images/sn.png)

### 步骤二：激活

请将主机的序列号提供给枫叶技术人员。

### 步骤三：启动APP

激活成功后，打开APP，点击APP的`+`加号按钮，添加账户。

***地点名称***是可选项，可以不填；

***地点编号***处填入8位主机序列号；

***SWAN邮箱***处填入`paradox-support@qq.com`。

![添加账户](images/add-account.png)

如果没有HD77/HD78系列视频探测器，只有IP网络模块，只需要输入用户密码（默认用户密码是`1234`）即可登陆。

![通过IP模块登录](images/login-ip-module.png)

如果含有HD77/HD78等系列视频探测器，需要填帐户名和用户密码，默认最高权限帐户名是`master`，默认用户密码是`1234`。
![通过视频探测器登录](images/login-video-detector.png)

## 缴费

两种方案：

1. 通过APP直接缴费，要求需要准备具备Visa标志的银行卡，请自行按照APP支付页面支付费用；
2. 代付，如果没有跨境⽀付渠道，[枫叶APP缴费](http://support.senboll.com:8888/swan)。