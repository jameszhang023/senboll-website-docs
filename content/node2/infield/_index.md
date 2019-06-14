---
weight: 20
title : "刷固件工具(In-Field)使用说明"
---

**目录**

- [简介](#j10)
- [准备工作](#j20)
- [操作说明](#j30)

<h2 id="j10">简介</h2>

---

Infield软件是专门用来刷固件的工具软件，支持串口，网络，拨号等通讯方式。

<h2 id="j20">准备工作</h2>

---

- 下载软件，Infield软件已经被集成到Babyware里了，下载Babyware请访问[资料服务器](http://support.senboll.com:8888/)。

![Babyware下载](/help/node2/infield/images/babyware-download.png)

- 如果是串口通讯方式，需要准备好307USB通讯模块，请先安装串口驱动。驱动下载请访问[资料服务器](http://support.senboll.com:8888/)。请根据Windows系统版本下载并安装驱动，如下图：

![307USB驱动下载](/help/node2/infield/images/307usb-driver-download.png)

如果安装驱动遇到困难，请点[驱动安装方法](/help/node2/babyware/#j202)。

<h2 id="j30">操作说明</h2>

---

步骤一：启动软件，请先启动Babyware，如图：

![启动软件](/help/node2/infield/images/infield-start.png)

步骤二：设置连接方式，选择合适的方式建立连接。

- Serial是串口方式，需要307USB通讯模块。
- Internet网络方式，需要网络模块，通过天鹅云方式连接，Panel S/N填入主机8位序列号，IP password默认是`paradox`。
- Static IP，通过IP地址连接，填入IP地址和端口号（端口默认是10001），IP password默认是`paradox`。

![设置通讯方式](/help/node2/infield/images/infield-setting.png)

步骤三：选择需要升级的设备，准备好固件，开始升级。最新固件下载请访问[资料服务器](http://support.senboll.com:8888/)。升级的过程有时候比较慢，请耐心等待，切记不要中断通讯线路、关闭电脑或者Infield软件，否则有可能升级失败，甚至报废。如图：

![开始升级](/help/node2/infield/images/infield-start-update.png)