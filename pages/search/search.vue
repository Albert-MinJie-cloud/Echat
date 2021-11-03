<template>
	<view class="content">
		<view class="top_bar">
			<view class="search-div">
				<image src="../../static/images/search/search.png" class="search-image"></image>
				<input type="search" class="search" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-weight:400"
					@input="search" />
			</view>

			<view class="top_bar_right">
				<view class="text" @tap="backOne">取消</view>
			</view>
		</view>

		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userarr.length>0">用户</view>

				<view class="list user" v-for="(item,index) in userarr" :key='index'>
					<navigator url="../userdetail/userdetail?id=aa" hover-class="none">
						<image src="item.imgurl"></image>
					</navigator>
					<view class="userinfo">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
					</view>
					<view class="right-bt add" v-if="item.tip==0">加好友</view>
					<view class="right-bt send" v-if="item.tip==1">发消息</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js"

	export default {
		data() {
			return {
				userarr: []
			}
		},
		methods: {

			/* 搜索的关键词的输入 */
			search: function(e) {
				this.userarr = [];
				let searchval = e.detail.value
				if (searchval.length > 0) {
					this.searchUser(searchval)
				}
			},

			/* 搜索功能，根据name和email搜索，搜索结果高亮 */
			searchUser: function(e) {
				let arr = datas.friends()
				let exp = eval("/" + e + "/" + "g");
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {
						this.isFriend(arr[i]);
						arr[i].name = arr[i].name.replace(exp, "<span style='color:rgba(249,193,46,1)'>" + e +
							"</span>")
						arr[i].email = arr[i].email.replace(exp, "<span style='color:rgba(249,193,46,1)'>" + e +
							"</span>")
						this.userarr.push(arr[i])
					}
				}
			},

			/* 判断是否是好友 */
			isFriend: function(e) {
				let tip = 0;
				let arr = datas.isFriend();
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].friend == e.id) {
						tip = 1
					}
					e.tip = tip
					console.log(e.tip)
				}
			},

			/* 返回上一页 */
			backOne: function() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/tobar.scss";

	.top_bar {
		border-bottom: 1px solid $uni-border-color;

		.search-div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;

			.search {
				padding: 0 60rpx 0 12rpx;
				height: 60rpx;
				background: $uni-bg-color-grey;
				border-radius: 10rpx;
			}

			.search-image {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				right: 130rpx;
				top: 22rpx;
			}
		}

		.top_bar_right {
			.text {
				width: 102rpx;
				text-align: center;
				padding: 0;
			}
		}
	}

	.main {
		padding: 88rpx $uni-spacing-col-base;

		.result {
			padding-top: $uni-spacing-col-base;

			.title {
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}

			.list {
				height: 120rpx;
				padding: 10rpx 0;


				image {
					float: left;
					width: 80rpx;
					height: 80rpx;
					margin-top: 20rpx;
					border-radius: $uni-border-radius-base;
				}
			}

			.userinfo {
				float: left;
				padding-left: $uni-spacing-col-base;
				margin-top: 20rpx;

				.name {
					font-size: 36rpx;
					color: $uni-text-color;
					line-height: 50rpx;
					font-weight: bold;
				}

				.email {
					font-size: $uni-font-size-sm;
					color: $uni-text-color;
					line-height: 30rpx;
				}
			}

			.right-bt {
				float: right;
				width: 120rpx;
				height: 48rpx;
				border-radius: 24rpx;
				font-size: $uni-font-size-sm;
				font-weight: 400;
				line-height: 48rpx;
				text-align: center;
				margin-top: 36rpx;
			}

			.send {
				color: $uni-text-color-inverse;
				background: $uni-button-color-send;
			}

			.add {
				color: $uni-text-color;
				background: $uni-button-color-add;
			}
		}
	}
</style>
