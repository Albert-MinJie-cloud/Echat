# 使用hbuilder创建项目
## 1.0新建项目选择项目类型以及项目模板
* 选择uni-app

## 2.0使hbuilder创建的项目包含以下这些文件目录
```
┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                App端存放本地html文件的目录
├─platforms             存放各平台专用页面的目录
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)规范的插件。
├─wxcomponents          存放小程序组件的目录
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
└─pages.json            配置页面路由、导航条、选项卡等页面类信息
```
## 3.0配置公共资源的初始值（uni.scss）
* 行为色：默认颜色、警告颜色、成功颜色、失败颜色
* 文字色：基本颜色、反色、
* 背景颜色：背景色、点击色、遮罩颜色
* 边框颜色：边框色
* 尺寸变量：一般是ddr
* 文字尺寸：24rpx，28rpx，32rpx
* 图片尺寸：80px，96px，104px
* 圆角大小：10rpx，20rpx，40rpx，50%(全圆角)
* 水平间距：
* 垂直间距：
```
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
```
## 4.0取消默认导航栏
* 	"navigationStyle":"custom"
* 	在packages.json里面配置这个设置
## 5.0默认静态资源
*  在static文件夹下新建images文件存放图片资源
*  在images文件夹下根据不同组件名称，设置不同的文件名称放置对应组件的静态资源
```
|-- static							业务页面文件存放的目录
|   |-- images
|   |   `-- topbar				topbar组件静态资源
|   |       |-- add.png
|   |       |-- appIcon.jpg
|   |       |-- search.png
|   |       `-- userAvatar.jpg
|   `-- logo.png
```
## 6.0在git bash下安装tree
[bash下tree安装](https://www.jianshu.com/p/32ba82d84680)

```
在 WIndow 平台下，系统自带的命令行工具 CMD 可以使用 dir 命令来以树结构打印目录文件，
Powershell 工具可以使用 tree 命令。
但是，一般为了开发方便，通常会使用更接近 Linux 命令的 Git-Bash 作为常用的命令行工具，然而 Git-Bash 却不支持 tree 命令。
以下为给 Window 平台下 Git-Bash 添加 tree 命令的方法。
下载 tree 命令的 二进制包，安装 tree 命令工具
打开进入 Tree for Windows 页面，选择下载 Binaries zip 文件。
解压压缩包，找到压缩包内的 bin 目录，将 bin 目录下的 tree.exe 复制
找到 C:\\Program Files\Git\usr\bin 目录，将 tree.exe 粘贴到该目录下，安装即完成
测试 tree 命令
进入 Git-Bash，输入 tree 命令，如果安装成功，命令可以正常执行。
```
## 7.0 tree的命令大全
```
-a 显示所有文件和目录。
-A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
-C 在文件和目录清单加上色彩，便于区分各种类型。
-d 显示目录名称而非内容。
-D 列出文件或目录的更改时间。
-f 在每个文件或目录之前，显示完整的相对路径名称。
-F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*","/","=","@","|"号。
-g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
-i 不以阶梯状列出文件或目录名称。
-L level 限制目录显示层级。
-l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
-n 不在文件和目录清单加上色彩。
-N 直接列出文件和目录名称，包括控制字符。
-p 列出权限标示。
-P<范本样式> 只显示符合范本样式的文件或目录名称。
-q 用"?"号取代控制字符，列出文件和目录名称。
-s 列出文件或目录大小。
-t 用文件和目录的更改时间排序。
-u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
-x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。
```
## 8.0 使用Easy-git来进行git代码管理
* 删除分支、合并分支
* 