export default {
	friends: function() {
		let friendarr = [{
				id: 1,
				imgurl: 'https://img2.baidu.com/it/u=1945464906,1635022113&fm=26&fmt=auto',
				tip: 12313,
				name: 'jacks',
				email: '36154@qq.com',
				time: new Date(),
				news: '使用您自己的高质量徽标看起来很专业。获取为社交媒体、您自己的高级网站等预设的数十个徽标文件。'
			},
			{
				id: 2,
				imgurl: 'https://img2.baidu.com/it/u=1125846082,633382727&fm=26&fmt=auto',
				tip: 12313,
				name: 'balda',
				email: '大苏打@qq.com',
				time: new Date(),
				news: '如何在网页上显示一个钟表。'
			},
			{
				id: 3,
				imgurl: 'https://img1.baidu.com/it/u=3819577878,1506430096&fm=26&fmt=auto',
				tip: 12313,
				name: 'marry',
				email: '345645dasdas4@qq.com',
				time: new Date(),
				news: '可以通过 new 关键词来定义 Date 对象。以下代码定义了名为 myDate 的 Date 对象：。'
			},
			{
				id: 4,
				imgurl: 'https://img1.baidu.com/it/u=3517298377,686568239&fm=26&fmt=auto',
				tip: 12313,
				name: 'cookew',
				email: '36154@qq.com',
				time: new Date(),
				news: '可以通过 new 关键词来定义 Date 对象。以下代码定义了名为 myDate 的 Date 对象：。'
			}
		]
		return friendarr;
	},
	isFriend: function() {
		let isfriend = [{
				userid: 1,
				friend: 2
			},
			{
				userid: 1,
				friend: 3
			},
			{
				userid: 1,
				friend: 1
			}
		]
		return isfriend;
	},
	message: function() {
		let messageArr = [{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '在做调试的时候需要一些模拟的数据',
				types: 0,
				time: '2020-08-12',
				tip: 0,
			},
			{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '这时候就需要建表来存对应的数据😂😂😒',
				types: 0,
				time: '2020-08-13',
				tip: 1,
			},
			{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '这时候就需要建',
				types: 0,
				time: '2020-08-13',
				tip: 0,
			},
			{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '../../static/images/useravatar/man-blue.png',
				types: 1,
				time: '2020-08-13',
				tip: 1,
			},
			{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '../../static/images/chatimages/001.jpg',
				types: 1,
				time: '2020-08-13',
				tip: 1,
			},
			{
				id: 1,
				imageUrl: '../../static/images/useravatar/man-blue.png',
				message: '../../static/images/chatimages/002.jpg',
				types: 1,
				time: '2020-08-13',
				tip: 1,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: 'id、发送者id、接收者id、发送内容、内容类型（0文字，1图片连接，2音频连接），发送时间，消息状态（0已读，1未读）',
				types: 0,
				time: '2020-08-15',
				tip: 2,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '频连接），发送时',
				types: 0,
				time: '2020-08-15',
				tip: 2,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '发送时间，消息状态（0已读，1未读）',
				types: 0,
				time: '2020-08-16',
				tip: 3,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '../../static/images/useravatar/girl-blue.png',
				types: 1,
				time: '2020-08-16',
				tip: 3,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '../../static/images/chatimages/003.jpg',
				types: 1,
				time: '2020-08-16',
				tip: 3,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '../../static/images/useravatar/girl-blue.png',
				types: 2,
				time: '2020-08-16',
				tip: 3,
			},
			{
				id: 2,
				imageUrl: '../../static/images/useravatar/girl-blue.png',
				message: '../../static/images/chatimages/004.jpg',
				types: 1,
				time: '2020-08-16',
				tip: 3,
			},
		]
		return messageArr
	}
}
