---
title : "硬件问题"
linktitle: 硬件问题
description:  收集了枫叶硬件设备安装和使用中遇到的一些问题，对于安装和维护有很大的参考价值...
date: 2017-02-01
publishdate: 2017-02-01
lastmod: 2017-02-01
keywords: [ssg,static,performance,security]
menu:
  docs:
    parent: "常见问题"
    weight: 11
weight: 30
sections_weight: 30
draft: false
aliases: []
layout: single
toc: true
---

## 万能大法

如果碰到了一些奇怪的问题，通过常见方法都解决不了，请使用重新上电、复位和升降固件大法。

### 重新上电

断电的时候，记得给后备电源断电，上电的时候检查好接线以免发生意外。

### 复位

有些误操作会导致内置程序错乱，出现一些奇怪的现象，可通过复位解决，其中复位分为软件复位和硬件，为了提高效率和便于操作，建议用硬件复位，下面介绍硬件复位方法：

|设备|复位方法|
|:------|:------|
|EVO192主机|将主机板上Reset和AUX两个按钮同时长按，直到指示灯全部熄灭即可|
|EVOHD主机|长按Reset按钮，直到指示灯快闪的时候松开再短按一下即可|
|SP5500 SP6000 SP7000 MG5000 MG5050 MG6250主机|长按Reset按钮，直到指示灯快闪的时候松开短按一下即可|
|MG6250主机|断开电源，同时长按`*`和`#`按钮，然后上电，直到系统进入待机即可|
|SP4000 SP65主机|断开电源，将PG1和Z1短接，然后上电，等待指示灯闪烁即可|
|网络模块IP100 IP150|长按Reset按钮，直到指示灯快闪的时候松开短按一下即可|
|总线模块：总线模块包括操作键盘、总线探测器、无线信号覆盖模块RTX3、对接模块PRT3，防区模块，继电器模块等|仅针对EVO系统，在触摸屏键盘上操作步骤：**菜单** → **高级设置** → **安装设置** → **系统编程** → 安装者密码（默认：000000） → 输入`4001` → 输入模块序列号即可|

### 升降固件

固件是内置在设备中的程序文件，有些问题可能只适用于特定版本的固件。升降固件请看[刷固件工具(In-Field)使用说明](../../node2/infield/)，多数设备都可以通过连接主机进行升级，对于一些特殊的设备，升降级的时候需要直连设备，具体请咨询设备提供商。

## EVO总线问题

{{< warning >}}
总线探测器数量超过20个以上，建议加HUB2总线驱动器模块，这是导致总线模块通信不稳定的因素之一。
{{< /warning >}}

### 总线不通

{{< note >}}
总线接口的表示在不同设备上会有不同，如：（AUX+ AUX- GRN YEL），（RED BLK GRN YEL），（+ - GRN YEL）和（+ - G Y），这几种都是表示总线接口。
{{< /note >}}

总线模块包含总线上的所有设备，总线探测器，操作键盘，防区模块，对接模块，继电器模块，无线信号覆盖模块等这些都是总线模块，如果遇到了搜不到的情况，有以下几种原因：

1. 线路问题，有可能短路，或者断路，请检测线路；
2. 电源问题，线路距离过长或者线材质量问题导致压降太大，设备端的电压衰减太多，已经不足以提供正常工作所需电源，请保证工作所需电源；
3. 设备（主机或总线模块）总线口短路，如果接错线，会直接烧坏总线口，请彻底切断电源，断开接线柱的线，用万用表测试总线口是否有短路新情况，如有短路，请联系设备提供商。有时候线渣掉进接线柱也可导致短路，所以接线的时候务必小心，如果有线渣，务必要清理干净。

排除以上情况后，可以尝试重启主机或进入高级编程搜索模块解决。

进入高级编程搜索命令操作步骤：请在触摸屏键盘上操作步骤：菜单 → 高级设置 → 安装设置 → 系统编程 → 安装者密码（默认：000000） → 输入`4005`  等待即可。

### 总线模块偶尔掉线或搜不到

线路问题和电源问题是导致整个故障的主要原因，请参考上面的解决思路，如果线路没有问题，多数都是电源供应不足导致，请保证电源供应，如何专业的给系统供电，请参考 → [布线指南](../../node1/wiring-method)。

## 探测器

### 无线烟感，气感探测器防区总是开路

针对EVO主机，请选择**标准24小时火警**防区类型来解决，如图：
![无线火警防区开路](images/wireless-zone-normal-open.png)

### NV35MX

#### 显示在线，但一直开路

如果不是电源问题，有可能是防遮挡功能开启导致的，通过Babyware软件关闭防遮挡，防宠物功能可以解决，如图：
![关闭防遮挡](images/nv35mx-disable-antimask.png)

#### 黄灯一直闪烁

黄灯闪烁表示跟主机无法通信，首先请检查线路问题。

#### 主机搜不到

首先要排除是电源问题或者线路问题，可以尝试升级固件解决。

### NV780MX

NV780MX在调试的时候需要注意的几点说明：

{{< note >}}
如果不是总线接线方式，拨码4设为ON，表示探测器两边合并为一路信号输出，此时的接线方式有变化，**特别提示：之前的NC-R变为NC输出，NC-L变为NO输出**。如图：
![作为1个防区输出](images/nv780mx-one-zone.png)

如果不是总线接线方式，拨码4设为OFF，表示探测器两边分别有一路信号输出。如图：
![作为2防区输出](images/nv780mx-two-zone.png)
{{< /note >}}

如果距离不合适，通过下图的方式调节距离解决：
![距离调节](images/nv780mx-distance-adjustment.png)

如果幕帘探测区域有遮挡物，可以通过下面的方法调节解决：
![厚度调节](images/nv780mx-thickness-adjustment.png)

### NV790

#### 灵敏度低

请打开探测器，设置拨码3和4为ON状态。其中拨码3是调节灵敏度，拨码4是防宠物模式。

#### 需要关闭蜂鸣器

请打开探测器，设置拨码5和6为OFF状态。

### 总线探测器DG467

#### 主机搜不到探测器

首先要排除是电源问题或者线路问题，然后看一下DG467的跳线j4，将j4设置为ON，即短接(j4为ON表示总线通讯模式，OFF表示继电器信号输出，默认是OFF)，如图：
![开启总线通讯模式](images/dg467-setting-j4.png)

## 操作键盘

### TM50/TM70

#### 防区分区标签错误

错误如图：
![防区分区标签错误](images/keypad-lable-error.png)

两种解决方法：

方法一：通过键盘菜单命令复位标签。

针对EVO：

|键盘|步骤|
|:------|:------|
| TM70 | 菜单 → 高级设置 → 安装设置 → 安装者密码（默认：000000） → 设置该键盘 → 恢复出厂语言并重新启动 |
| TM50 | 菜单 → 高级设置 → 安装设置 → 安装者密码（默认：000000） → 设置键盘 → 恢复出厂语言并重新启动 |

针对SP/MG：

|键盘|步骤|
|:------|:------|
| TM70 | 菜单 → 系统设置 → 安装者密码（默认：0000） → 高级设置 → 安装者密码（默认：0000） → 键盘设置 → 恢复出厂值 |
| TM50 | 菜单 → 系统设置 → 安装者密码（默认：0000） → 高级设置 → 安装者密码（默认：0000） → 键盘设置 → 恢复出厂值 |

方法二：请使用标签管理工具修改有问题的标签，访问 → [触摸键盘标签工具说明书](../../node2/touchscreen-lable)

（撰稿人：周翔）

#### 键盘上显示分区锁定

一般是输入的密码错误次数太多导致，如果在5分钟之内输入密码错误5次会导致整个情况发生，每次锁定时间是15分钟。如果默认的布撤防密码被修改，请在驱动属性**User Code**上手动设置。

#### 出现花屏

这是由于系统突然断电导致内存卡内的文件损坏，可以尝试格式化内存卡，然后重新拷贝初始化文件到内存卡，如果格式化不成功，可能卡已损坏，请更换。

更新和替换内存卡初始化文件请参考 → [更新或替换内存卡初始文件)](../../node2/touchscreen-lable/#更新或替换内存卡初始文件)，根据操作键盘型号找相应的内存卡文件，**切记请先格式化内存卡**，再拷贝文件到内存卡根目录。

#### 图标显示不全

请通过键盘上的升级固件菜单解决。

#### Memory Read Error

`Memory Read Error！Error #：000029` 这是内存卡读取失败，请检查内存卡，如果损坏请更换。

#### 无法显示中文

请先在触摸键盘上切换语言，EVO系列请参考下面的步骤：
![中文语言切换](images/tm7050-language.gif)

如果没有找到中文，请尝试下面的方法。

情况一：固件版本的问题，请更新固件版本，方法如下：

|主机类型|步骤|
|:------|:------|
|EVO | Menu → Advanced → Upgrade → 选择最新的固件|
|SP | Menu → Settings → Update Firmware → 选择最新的固件|

情况二：内存卡文件问题，请替换文件，方法如下：

有可能是内存卡文件的问题，请下载最新的文件，更新和替换内存卡初始化文件请参考 → [更新或替换内存卡初始文件)](../../node2/touchscreen-lable/#更新或替换内存卡初始文件)，根据操作键盘型号找相应的内存卡文件，**切记请先格式化内存卡**，再拷贝文件到内存卡根目录。

请在触摸操作键盘上切换语言，EVO系列请参考下面的步骤：
![中文语言切换](images/tm7050-language.gif)

#### 如何设置待机黑屏

如果键盘待机的亮度影响到生活或者休息，可以按照下面的步骤将亮度设置到最低，将会黑屏，点击屏幕将会再次唤醒。

步骤一，点击右下角电源图标：
![亮度设置步骤](images/touch-keypad-setting-light-1-1.png)

步骤二，设置屏幕待机亮度到最低即可：
![亮度设置步骤](images/touch-keypad-setting-light-2-2.png)

### K10V/K32

#### 键盘上StayD指示灯常亮，无法撤防

出现这个现象，是由于StayD模式被打开了，请在键盘上依次按下 OFF → 用户密码（默认：1234）1 → OFF即可关闭StayD模式。

为了避免再次进入StayD模式，请使用键盘进入高级编程，禁用所有用户的Stay权限，步骤如下：  

- 在K10V/K32等按键键盘上操作步骤：在撤防状态下，长按0 → 输入安装者密码（默认：0000） → 输入`401`（一共是32个编号，从401-432，系统管理员是401，如果使用了更多的用户，请输入对应的编号，） → 关闭选项`4`。
- 在触摸屏键盘上操作步骤：在撤防状态下，菜单 → 高级设置 → 安装设置 → 系统编程 → 安装者密码（默认：0000） → 输入`401`（一共是32个编号，从401-432，系统管理员是401，如果使用了更多的用户，请输入对应的编号，） → 关闭选项`4`。

下图是用户选项的详细说明：
![中文语言切换](images/user-option.png)

## 警号

### 无线警号SR130编程和维护问题

使用软件无法编程，或者维护的时候打开盖子会突然报警等问题。

#### 通过键盘编程

步骤一 请先进入编程模式，具体方法如下：

针对EVO：

|键盘|步骤|
|:------|:------|
| TM70 | 菜单 → 高级设置 → 安装设置 → 安装者密码（默认：000000） → 系统编程 |
| TM50 | 菜单 → 高级设置 → 安装设置 → 安装者密码（默认：000000） → 系统编程 |
| K656/K641+ | 长按0 → 输入安装者密码（默认：000000） |

针对SP/MG：

|键盘|步骤|
|:------|:------|
| TM70 | 菜单 → 系统设置 → 安装者密码（默认：0000） → 高级设置 → 安装者密码（默认：0000） → 系统编程 |
| TM50 | 菜单 → 系统设置 → 安装者密码（默认：0000） → 高级设置 → 安装者密码（默认：0000） → 系统编程 |
| K10V/K32+ | 长按0 → 输入安装者密码（默认：0000） |

针对MG6250：  
长按0 → 输入安装者密码（默认：0000）

步骤二 在步骤一的基础上进行下面步骤：

| 主机 | 编程方法 |
|---|---|
| EVO192/EVOHD | 输入2851-2858（第一个警号分配到2851中，以此类推，最多支持8个警号） |
| MG/SP | 输入683-686（第一个警号对应683，以此类推，最多支持4个） |
| MG6250 | 输入0801-0804（第一个警号对应0801，以此类推，最多支持4个） |

#### 显示信号强度

步骤一 进入编程模式，请参考 → [通过键盘编程-步骤一](#通过键盘编程)。

步骤二 进入查询信号强度段号

| 主机 | 编程方法 |
|---|---|
| EVO192/EVOHD | 输入2871-2878（第一个警号分配到2871中，以此类推，最多支持8个警号） |
| MG/SP | 输入687-690（第一个警号对应687，以此类推，最多支持4个） |
| MG6250 | 输入0801-0804（第一个警号对应0801，以此类推，最多支持4个） |

步骤三 按下警号的Reset/Training按钮3秒以上再松开，信号强度将会返回到键盘上。

#### 维护模式

在正常工作时一旦打开盖子将会触发防拆报警，为了便于维护，专门提供了维护模式，需要在键盘上通过编程开启此模式，一旦开启后防拆报警功能暂时失效，30分钟后防拆将重新启用。

步骤一 进入编程模式，请参考 → [通过键盘编程-步骤一](#通过键盘编程)。

步骤二 开启维护模式

| 主机 | 编程方法 |
|---|---|
| EVO192/EVOHD | 输入2870 |
| MG/SP | 输入695 |
| MG6250 | 输入0800 |

### 有线警号：待机状态有微弱的声音

请在警号接线端子上并接1K电阻解决。

## 防区模块

### 防区模块ZX1：Babyware软件无法编程双防区

由于ZX1停产，Babyware没有及时更新，请升级Babywrae软件版本(版本要求高于5.1)或者用键盘进入高级编程解决。

## 继电器模块

{{< tip >}}
关于继电器资源按照是否支持枫叶云分为两种，分别对应不同编程方式。请参考下面的表格：

| 设备 | 是否支持枫叶云 | 编程方法 |
|---|---|---|
| 主机 | V7.0以下不支持</br>V7.0及以上支持 | 支持云：进入主机编程</br>不支持云：进入模块编程 |
| PGM4 | V5.00及以下不支持</br>V5.03及以上支持 | 支持云：进入主机编程</br>不支持云：进入模块编程 |
| PGM82 | 所有版本支持 | 进入主机编程 |
{{< /tip >}}

### 继电器模块PGM4：无法进入模块编程

目前PGM4分为两种模式，不支持云和支持云。对照下面的说明使用相应的固件。请访问 → [升降级固件指南](../../node2/infield)；

{{< tip >}}
PGM4升降级操作时仅需供电，不可接入总线，否则会导致升级失败。
{{< /tip >}}

- 不支持云固件版本：V5.00，编程方法：进入模块编程；
- 支持云固件版本：V5.03+，编程方法：进入主机编程。

## 通信模块

### IP100/IP150 网络模块

#### 无法设置IP地址

如果在局域网里并且知道模块的具体地址，请使用枫叶搜索工具（工具下载请访问 → [资料服务器（账户和密码咨询设备提供商）](http://support.senboll.com:8888/)下载）搜索网络模块。

如果能搜到模块，请对照MAC地址是否是目标模块，然后右击手动来设置地址，参考下面的步骤请参考下面的步骤。

如果搜不到，有可能不在一个网段，请使用网线将网络模块和PC直连，提前给PC设置一个默认的IP地址，比如，IP：192.168.1.10，子网掩码：255.255.255.0，网关：192.168.1.1。然后使用搜索工具。搜到了模块后，请对照MAC地址是否是目标模块，然后右击手动来设置地址，请参考下面的步骤。

**修改IP地址步骤：**

第一步：使用搜索工具搜索
![搜索工具](images/ip-exploring-tool.png)
第二步：设置IP地址
![设置ip](images/ip-exploring-tool-setting-ip.png)

（撰稿人：杨帆，凌化文）

### PCS250 GSM/GPRS模块

#### 无法拨号

以下几种情况比较常见：

1. 可能是由于固件版本不兼容，请降低到V2.13，请使用307USB连接电脑至PCS250的update接口。请访问 → [升降级固件指南](../../node2/infield)；
2. 信号质量弱，可以尝试更换其他运营商(目前只支持联通和移动)的SIM卡或者加强信号质量来解决；
3. 无2G信号，目前有些地区联通和移动运营商开始关闭2G网络，请及时联系供应商；

### VDMP3 语音模块

#### 通过有线电话无法拨号

由于光纤改造，光纤猫的品牌太多，质量层次不齐，有些品牌光猫的电话线接口输出电压不符合国际标准（标准是48V-56V），通常表现为电话线电压过低，如果用万用表(直流档)测试电压，低于48v的，可以确定是不符合标准的，遇到这种情况，可以咨询运营商(电信，联通，移动)或者光猫厂家看是否有设置电压的参数选项或者更换光猫，如果还解决不了，可以选择枫叶GSM模块通过电话卡拨号解决。

#### 拨号回控主机不稳定

通常是移动网信号的问题，有区域性，如果是联通手机，可以换移动手机尝试，或者换一个地方尝试。

### PRT3 对接集成模块

#### Babyware设置不生效

设置PRT3可以通过枫叶操作键盘和Babyware软件，推荐用操作键盘，因为有时候Babyware设置会不起作用，这是小概率。

{{< note >}}
设置完毕后请重启枫叶主机和模块生效。
{{< /note >}}

通过键盘设置，在触摸屏键盘上操作步骤：**菜单** → **高级设置** → **安装设置** → **系统编程** → 安装者密码（默认：000000） → 输入`4003` → 输入PRT3八位序列号 → 输入`016` → 将1,2,4选项打开，效果如图：
![PRT3通过键盘设置](images/prt3-keypad-setting.png)