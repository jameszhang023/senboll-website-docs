---
weight: 20
title : "软件问题"
---

**目录**

- [Babyware软件](#j10)
  - [无效的登录名和密码](#j11)
- [PA2000软件](#j20)
  - [运行时错误'3159'](#j21)
  - [路径/文件访问错误](#j22)
  - [PA2000.ini配置设置文件修改后保存不了](#j23)
  - [运行时错误'339'](#j24)
  - [找不到对应的硬件狗](#j25)
  - [运行时错误'3075'](#j26)
  - [导出文件发生错误](#j27)

<h2 id="j10">Babyware软件</h2>

---

<h3 id="j11">无效的登录名和密码</h3>

当建立账户的时候没有选主机型号的时候，会出现这个错误，为了避免，请建立账户后先选择主机型号再连接。

![无效的登录名和密码](/help/node3/software/images/babyware-invalid-account-password.png)

连接EVO主机的时候，可能会出现上面图示的情况，请输入正确的帐户名`0000`和密码`0000`。如图：

![正确的登录名和密码](/help/node3/software/images/babyware-valid-account-password.png)

<h2 id="j20">PA2000软件</h2>

---

<h3 id="j21">运行时错误'3159'</h3>

一般都是非正常退出软件导致数据库损坏，请用PA2000安装根目录的数据库修复工具压缩修复数据库解决。

<h3 id="j22">路径/文件访问错误</h3>

![文件访问错误](/help/node3/software/images/pa2000-file-accesss-error.png)

当操作系统是Windows 7 或者Windows 8，用户安装PA2000到系统盘路径下，双击启动PA2000时（普通用户权限）出现的错误，原因就是用户的权限不够，解决方法：在PA2000快捷方式右键单击**属性**，选择兼容性，将以**管理员身份运行**此程序的选项打勾即可。请参考：

![文件访问错误](/help/node3/software/images/pa2000-start-admin.png)

<h3 id="j23">PA2000.ini配置设置文件修改后保存不了</h3>

当操作系统是Windows 7 或者Windows 8，用户权限不够才会出现。解决方法：右键单击PA2000.ini属性，点击安全标签，将当前用户的权限分配为完全控制，权限修改后，如图：

![配置文件权限](/help/node3/software/images/pa2000-ini-permission.png)

<h3 id="j24">运行时错误'339'</h3>

![运行错误339](/help/node3/software/images/pa2000-error-339.png)

错误原因：Windows 7或者Windows 8系统当前用户权限不够，PA2000安装出错所导致。解决方法：

步骤1：打开控制面板找到管理工具，如图：

![运行错误339](/help/node3/software/images/pa2000-error-339-1.png)

步骤2：打开管理工具，点击本地安全策略，如图：

![运行错误339](/help/node3/software/images/pa2000-error-339-2.png)

步骤3：打开本地安全策略，点击本地策略-〉安全选项，找到用户账户控制：以管理员批准模式运行所有管理员，将其禁用。

![运行错误339](/help/node3/software/images/pa2000-error-339-3.png)

<h3 id="j25">找不到对应的硬件狗</h3>

找不到硬件狗，是未插USB加密狗或者加密狗驱动安装失败，请重新安装，如何安装加密狗驱动，请参考说明书。

<h3 id="j26">运行时错误'3075'</h3>

![运行错误3075](/help/node3/software/images/pa2000-error-3075.png)

此问题的原因是系统的时间和日期格式不对导致的。如果是ghost系统或者非微软官方系统才会出现此错误,所以建议安装官方原版系统。解决方法：

步骤1：打开控制面板，点击区域或区域与语言设置选项。如图：

![运行错误3075](/help/node3/software/images/pa2000-error-3075-1.png)

步骤2：点击[自定义]，然后把时间和日期格式改成如下图所示的格式：

![运行错误3075](/help/node3/software/images/pa2000-error-3075-2.png)

![运行错误3075](/help/node3/software/images/pa2000-error-3075-3.png)

<h3 id="j27">导出文件发生错误</h3>

资料导出为Office文件时，弹出保存文件错误，这种现象的原因是Office软件安装问题。请安装原版Microsoft Office办公软件。如果安装的是WPS，或经过二次开发的Office版本，导出用户资料或者事件的时候会出错。

![导出文件出错](/help/node3/software/images/pa2000-export-error.png)