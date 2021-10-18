<template>
	<view class="content">
		<view class="top_bar">
			<view class="top_bar_left">
				<image src="../../static/images/topbar/userAvatar.jpg" mode=""></image>
			</view>
			<view class="top_bar_center">
				<image src="../../static/images/topbar/appIcon.jpg" mode=""></image>
			</view>
			<view class="top_bar_right">
				<view class="search">
					<image src="../../static/images/topbar/search.png" mode=""></image>
				</view>
				<view class="add">
					<image src="../../static/images/topbar/add.png" mode=""></image>
				</view>
			</view>
		</view>

		<!-- 回复列表的数据 -->
		<view class="main">
			<view class="apply"></view>
			<view class="friends">
				<view class="friend_list">
					<view class="friend_list_item">
						<text class="tip">1</text>
						<image src="../../static/images/topbar/userAvatar.jpg" mode=""></image>
					</view>
					<view class="friend_list_r">
						<view class="top">
							<view class="name">我是菜鸟</view>
							<view class="name">11：34</view>
						</view>
						<view class="content">
							大苏打实打实2dsadass
						</view>
					</view>
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
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.top_bar {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		background: $uni-bg-color;
		border-bottom: 1px solid $uni-border-color;

		.top_bar_left {
			float: left;

			image {
				margin-left: $uni-spacing-col-base;
				margin-top: 10rpx;
				width: 68rpx;
				height: 68rpx;
				border-radius: $uni-border-radius-sm;
			}
		}

		.top_bar_center {
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;

			image {
				padding-top: 21rpx;
				width: 88rpx;
				height: 42rpx;
			}
		}

		.top_bar_right {
			float: right;
			padding-right: 14rpx;

			.search {
				width: 88rpx;
				height: 88rpx;
				display: inline-block;
			}

			.add {
				width: 88rpx;
				height: 88rpx;
				display: inline-block;
			}

			image {
				width: 52rpx;
				height: 52rpx;
				padding-top: 18rpx;
				padding-left: 18rpx;
			}
		}
	}

	.main {
		padding: 88rpx $uni-spacing-col-base 0;
		border: 1px solid red;
		width: 100%
	}

	.friend_list {
		height: 96rpx;
		padding: 16rpx 0;

		.friend_list_item {
			float: left;
			position: relative;

			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
			}

			.tip {
				position: absolute;
				z-index: 10;
				top: -6rpx;
				left: 68rpx;
				height: 36rpx;
				min-width: 36rpx;
				background: $uni-color-warning;
				background: red;
				border-radius: $uni-border-radius-circle;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend_list_r{
			
		}
	}
</style>
