<template>
	<view class="content">
		<view class="top_bar">
			<view class="search-div">
				<image src="../../static/images/search/search.png" class="search-image"></image>
				<input type="search" class="search" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-weight:400"
					@input="search" />
			</view>

			<view class="top_bar_right">
				<view class="text">取消</view>
			</view>
		</view>

		<view class="main">
			<view class="search-user result">
				<view class="title">用户</view>

				<view class="list user">
					<image src=""></image>
					<view class="userinfo">
						<view class="name">jack</view>
						<view class="email">369221657@qq.com</view>
					</view>
					<view class="right-bt">发送</view>
				</view>

				<view class="list user">
					<image src=""></image>
					<view class="userinfo">
						<view class="name">jack</view>
						<view class="email">369221657@qq.com</view>
					</view>
					<view class="right-bt">发送</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/tobar.scss";

	.top_bar {
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
		padding-top: 88rpx;

		.result {
			padding-top: $uni-spacing-col-base;

			.title {
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}
		}
	}
</style>
