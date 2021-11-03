<template>
	<view class="content">

		<view class="top_bar">
			<view class="top_bar_left" @tap="backOne">
				<image src="../../static/images/userhome/arrow-left-bold.png"></image>
			</view>
			<view class="top_bar_center bar_title">好友昵称</view>
			<view class="top_bar_right">
				<image src="../../static/images/search/男生-紫.png" mode=""></image>
			</view>
		</view>

		<scroll-view scroll-y="true" class="chat" scroll-with-animation="true" :scroll-into-view="scollToBottom">
			<view class="chat_main">
				<view class="chat_message" v-for="(item,index) in messageArr" :key="index" :id="'message'+ index">
					<view class="chat_message_time">{{item.time}}</view>
					<view class="chat_message_content"
						:class="item.id !== userid ? 'chat_message_content_right' :'chat_message_content_left'">
						<image class="chat_image" :src="item.imageUrl" mode=""></image>
						<!-- 文字消息 -->
						<view class="chat_messages" v-if="item.types === 0">
							<view class="messages_text">{{item.message}}</view>
						</view>
						<!-- 图片消息 -->
						<view class="chat_messages" v-if="item.types === 1">
							<image class="messages_img" :src="item.message" mode="widthFix"
								@tap="previewImage(item.message)">
							</image>
						</view>
						<!-- 视频消息 -->
						<!-- 			<view class="chat_messages" v-if="item.types === 2">
							<image class="messages_img" :src="item.message" mode=""></image>
						</view> -->
					</view>
				</view>
			</view>

			<view class="placeholder_btn"></view>
		</scroll-view>
		<submit></submit>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js"

	import submit from "../../components/submit/submit.vue"

	export default {
		data() {
			return {
				userid: 1,
				messageArr: [],
				imageMessage: [], //图片信息数组，用作图片预览
				scollToBottom: '', //显示的内容自动定位到最后一条
			}
		},

		onReady() {
			this.getMessage()
		},

		components: {
			submit
		},

		methods: {
			/* 返回上一页 */
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				});
			},

			/* 获取聊天数据 */
			getMessage: function() {
				let messages = datas.message()
				console.log('messages', messages)
				for (let i = 0; i < messages.length; i++) {
					if (messages[i].types === 1) {
						this.imageMessage.push(messages[i].message)
					}
					/* 颠倒消息列表 */
					// this.messageArr.unshift(messages[i])
					/* 正序 */
					this.messageArr.push(messages[i])
				}
				// console.log("this.messageArr", this.messageArr)
				this.$nextTick(function() {
					let index = messages.length - 1
					this.scollToBottom = 'message' + index
				})

			},

			/* 处理时间 */
			// changeTime: function(data) {
			// 	return transformtime.dateTime(data);
			// }

			/* 预览图片 */
			previewImage: function(item) {
				let index = 0
				for (let i = 0; i < this.imageMessage.length; i++) {
					if (item === this.imageMessage[i]) {
						index = i
					}
				}
				// console.log("图片的索引", index)
				uni.previewImage({
					current: index,
					urls: this.imageMessage,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/tobar.scss";

	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background: rgba(255, 255, 255, 1);
	}

	.top_bar {
		background: rgba(249, 249, 252, 0.95);
		border-bottom: 1px solid $uni-border-color;

		image {
			margin-left: 16rpx;
		}

		.bar_title {
			padding-top: 16rpx;
			font-weight: 500;
			font-size: 40rpx;
		}

		.top_bar_right {
			width: 88rpx;
			height: 88rpx;
			padding-right: $uni-spacing-col-base;

			image {
				margin-top: 10rpx;
				width: 68rpx;
				height: 68rpx;
				border-radius: $uni-border-radius-base;
			}
		}
	}

	.chat {
		height: 100%;

		.placeholder_btn {
			height: var(--status-bar-height);
			width: 100%;
		}

		.chat_main {
			padding: 100rpx $uni-spacing-col-base 120rpx $uni-spacing-col-base;
			display: flex;
			flex-direction: column;

			.chat_message {

				.chat_message_time {
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 36rpx;
					padding: 20rpx 0;
					text-align: center;
				}

				.chat_message_content {
					display: flex;
					padding: 20rpx 0;

					.chat_messages {
						flex: none;
						max-width: 480rpx;

						.messages_text {
							font-size: $uni-font-size-base;
							line-height: 44rpx;
							padding: 18rpx 24rpx;
							font-weight: 500;
						}

						.messages_img {
							max-width: 400rpx;
							border-radius: $uni-border-radius-base;
						}
					}

					.chat_image {
						flex: none;
						width: $uni-img-size-sm;
						height: $uni-img-size-sm;
						border-radius: $uni-border-radius-base;
					}

				}

				.chat_message_content_left {
					flex-direction: row;

					.messages_text {
						margin-left: 16rpx;
						background-color: $uni-chat-message-left-bg;
						color: $uni-chat-message-left-text;
						border-radius: 0 20rpx 20rpx 20rpx;
					}

					.messages_img {
						margin-left: 16rpx;
					}
				}

				.chat_message_content_right {
					flex-direction: row-reverse;

					.messages_text {
						margin-right: 16rpx;
						background-color: $uni-chat-message-right-bg;
						color: $uni-chat-message-right-text;
						border-radius: 20rpx 0 20rpx 20rpx;
					}

					.chat_messages {
						display: flex;
						justify-content: flex-end;

						.messages_img {
							margin-right: 16rpx;
						}
					}
				}
			}
		}
	}
</style>
