<template>
	<view class="content">
		<view class="top_bar">
			<view class="top_bar_left" @tap="backOne">
				<image src="../../static/images/userhome/arrow-left-bold.png" mode=""></image>
			</view>
			<view class="top_bar_center bar_title">好友请求</view>
			<view class="top_bar_right pice"></view>
		</view>

		<view class="main">
			<view class="apply_list">
				<view class="apply_list_top">
					<view class="reject btn">拒绝</view>
					<view class="apply_user_image">
						<image src="../../static/images/search/女生-欧.png" class="apply_user_image"></image>
					</view>
					<view class="resolve btn">同意</view>
				</view>

				<view class="apply_list_middle">
					<view class="apply_username">我是申请者</view>
					<view class="apply_time">2021-08-15</view>
				</view>

				<view class="apply_list_bottom">
					<view class="apply_content">
						<text>留言：</text>
						{{ applyContent }}
					</view>
				</view>
			</view>

			<view class="apply_list">
				<view class="apply_list_top">
					<view class="reject btn">拒绝</view>
					<view class="apply_user_image">
						<image src="../../static/images/search/女生-欧.png" class="apply_user_image"></image>
					</view>
					<view class="resolve btn">同意</view>
				</view>

				<view class="apply_list_middle">
					<view class="apply_username">我是申请者</view>
					<view class="apply_time">2021-08-15</view>
				</view>

				<view class="apply_list_bottom ">
					<view class="apply_content">
						<text>留言：</text>
						{{ applyContent }}
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
				applyUserName: "我是申请者",
				applyTime: "2020-05-10",
				applyContent: "我是留的消息顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶",
			};
		},
		methods: {
			/* 返回上一页 */
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				});
			},
		},
	};
</script>

<style lang="scss">
	@import "../../commons/css/tobar.scss";

	.top_bar {
		background: rgba(255, 255, 255, 0.95);
		border-bottom: 1px solid $uni-border-color;

		image {
			margin-left: 16rpx;
		}

		.bar_title {
			padding-top: 16rpx;
			font-weight: 500;
			font-size: 40rpx;
		}
	}

	.main {
		padding: 108rpx $uni-spacing-col-base;

		.apply_list {
			box-shadow: 0 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.15);
			border-radius: $uni-border-radius-base;
			margin: 112rpx 0 20rpx;
			padding: $uni-spacing-col-base;
			background: #f9f9f9;

			.apply_list_top {
				display: flex;
				flex-direction: row;

				.btn {
					flex: none;
					text-align: center;
					line-height: 64rpx;
					width: 160rpx;
					height: 64rpx;
					border-radius: 40rpx;
					font-weight: 500;
				}

				.reject {
					background: $uni-button-color-error;
					color: $uni-color-warning;
				}

				.apply_user_image {
					flex: auto;
					text-align: center;
					margin-top: -50rpx;

					image {
						width: 144rpx;
						height: 144rpx;
						border-radius: $uni-border-radius-circle;
					}
				}

				.resolve {
					background: $uni-color-primary;
					color: $uni-text-color-inverse;
				}
			}

			.apply_list_middle {
				text-align: center;
				padding-top: 20rpx;

				.apply_username {
					font-size: 36rpx;
					font-weight: bold;
					color: $uni-text-color;
					line-height: 50rpx;
				}

				.apply_time {
					font-size: 24rpx;
					color: $uni-text-color-disable;
					line-height: 34rpx;
				}
			}

			.apply_list_bottom {

				.apply_content {
					height: 120rpx;
					background: $uni-bg-color-grey;
					border-radius: $uni-border-radius-base;
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					line-height: 40rpx;
					padding: 20rpx $uni-spacing-col-base;
					margin-top: 40rpx;

					text {
						font-weight: 500;
						color: $uni-color-primary;
					}
				}
			}
		}
	}
</style>
