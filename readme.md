# 使用hbuilder创建项目
## 1.0新建项目选择项目类型以及项目模板
* 选择uni-app

## 2.0使hbuilder创建的项目包含以下这些文件目录
```tree
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
```text
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
```
## 4.0取消默认导航栏
* 	"navigationStyle":"custom"
* 	在packages.json里面配置这个设置
## 5.0默认静态资源
*  在static文件夹下新建images文件存放图片资源
*  在images文件夹下根据不同组件名称，设置不同的文件名称放置对应组件的静态资源
```tree
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

```markdown
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
```markdown
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

## 9.0 App的调试
* 使用Hbuilder自带的运行到手机之前需要使用usb数据线与手机进行连接
* 在手机上面需要打开开发者选项里面的usb调试选项
* 第一次使用的时候还需要安装调试基座，设置里面需要打开选项

## 10.0 适配不同大小的手机头部
* var(--status-bar-height)

## 10.0 App的跳转
* uni.navigatarTo()

## 11.0 App的class的条件渲染
```vue
<view :class="[{submit:isok},{submit1:!isok}]">注册</view>
```

## 12.0 公共样式的制定与使用
```text
├─.hbuilderx
├─commons
│  ├─css
│  └─js
├─components
├─pages
│  ├─index
│  ├─register
│  └─signin
├─static
│  └─images
│      ├─friendslist
│      ├─register
│      ├─search
│      ├─signin
│      └─topbar
        └─dev
            ├─.automator
            │  └─app-plus
            └─app-plus
                └─static
                    └─images
                        └─topbar
```
* 使用公共样式import "../../commons/css/xxx.scss"

## 13.0在做调试的时候需要一些模拟的数据，这时候就需要建表来存对应的数据
## 表结构如下
```
用户表
id、用户名、邮箱、性别、生日、电话、密码、注册时间、签名、头像连接

好友表
id、用户id、好友id、生成时间、好友状态（0表示已经是好友，1表示申请中，2表示申请发送方，对方未同意）

一对一消息表
id、发送者id、接收者id、发送内容、内容类型（0文字，1图片连接，2音频连接），发送时间，消息状态（0已读，1未读）

群表
id，群主id，群名、群封面连接、群公告、群建立时间

群成员表
id，群id，用户id，群内名，加入时间，未读消息数，是否屏蔽群消息（0不屏蔽，1屏蔽）

群消息表
id，群id、发送者id、发送内容、内容类型（0文字，1图片连接，2音频连接），发送时间

```

## 14.0 搜索匹配
```javascript
let arr = datas.friends()
for (let i = 0; i < arr.length; i++) {
	if (arr[i].name.search(e) != -1 || arr[i].name.search(e) != -1) {
		this.userarr.push(arr[i])
	}
}
console.log(this.userarr)
```

## 15.0 高亮显示
```javascript
arr[i].name = arr[i].name.replace(exp, "<span style='color:rgba(249,193,46,1)'>" + e + "</span>")
arr[i].email = arr[i].email.replace(exp, "<span style='color:rgba(249,193,46,1)'>" + e + "</span>")
```

## 16.0 vue 渲染html文本
在标签属性上面加v-html
<view class="name" v-html="item.name"></view>

## 17.0 好友搜索业务流程
1.0 输入关键词、调接口搜索拿到user列表(变换搜索词的时候还访问)
2.0 再次调用接口判断对方是否是我的好友

## 18.0 获取元素动态高度
* 1.0 uni.createSelectorQuery()
```javascript
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
  console.log("得到布局位置信息" + JSON.stringify(data));
  console.log("节点离页面顶部的距离为" + data.top);
}).exec();
```
* 在元素的style绑定这个高度
```
<view class="add-msg" :style="{height:addHeight+'px'}">
```
## 19.0 动画的制作
* 1.0 使用uni的动画api实现
* 使用一个状态来控制同一个动画的开启和关闭
```javascript
addFriendAnima() {
	this.isAdd = !this.isAdd;
	var animation = uni.createAnimation({
		duration: 500,
		timingFunction: "ease",
	})

	if (this.isAdd) {
		animation.bottom(0).step()
	} else {
		animation.bottom(-this.addHeight).step()
	}
	this.animationData = animation.export()
}
```

## 20.0 使用图片裁剪的库完成了头像可选择，可以裁剪的功能
* 1.0 使用vue官网的插件实现了图片裁剪的功能

## 21.0 聊天界面
* 1.0 页面高度占满手机高度
```css
page{
	/* 设置页面窗口高度为100% */
	height:100%;
}
```
* 2.0 主要是页面的消息左右布局，使用row-reverse
```css
display:flex;
flex:row;
flex:row-reverse;
```
* 3.0 图片查看，收藏和分享，使用uni-ap自带的api
* uni.previewImage(OBJECT) 预览图片。

