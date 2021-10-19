<template>
	<view class="content">
		<view class="top_bar">
			<!-- 		<view class="top_bar_left">
				<image src="../../static/images/signin/close.png"></image>
			</view> -->
			<view class="top_bar_right" @tap="toSignIn">
				<view class="text">注册</view>
			</view>
		</view>

		<view class="logo">
			<image src="../../static/images/signin/echatlogo.png"></image>
		</view>

		<view class="main">
			<view class="title">登录</view>
			<view class="solgan">欢迎来到Echat!</view>
			<view class="inputs">
				<input class="user" type="text" placeholder="用户名/邮箱" value=""
					placeholder-style="color:#aaa;font-weight:400" @blur="getUser" />
				<input class="password" type="password" placeholder="密码" value=""
					placeholder-style="color:#aaa;font-weight:400" @blur="getPassword" />
			</view>

			<view class="errormessage">
				输入用户或者密码错误!
			</view>

		</view>

		<view class="submit" @tap="login">登录</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				password: ''
			}
		},
		methods: {
			/* 测试请求 */
			testFun: function() {
				uni.request({
					url: "",
					data: {

					},
					method: "GET",
					success: (data) => {
						console.log(data)
					}
				})
			},

			/* 跳转到注册页面 */
			toSignIn: function() {
				uni.navigateTo({
					url: "../register/register"
				})
			},

			/* 获取用户名 */
			getUser: function(e) {
				this.user = e.detail.value
			},

			/* 获取用户密码 */
			getPassword: function(e) {
				this.password = e.detail.value
			},

			/* 登录提交 */
			login: function() {
				if (this.user && this.password) {
					console.log("提交数据给后台")
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/tobar.scss";

	.logo {
		text-align: center;

		image {
			padding-top: 128rpx;
			width: 240rpx;
			height: 240rpx;
			margin: 0 auto;
		}
	}

	.main {
		padding: 0 $uni-spacing-row-lg 120rpx;

		.title {
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
		}

		.solgan {
			font-size: 40rpx;
			color: $uni-text-color-grey;
			line-height: 88rpx;
		}

		.inputs {
			padding-top: 8rpx;

			input {
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: bold;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}

		.errormessage {
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;
		}
	}

	.submit {
		margin: 0 auto;
		text-align: center;
		width: 520rpx;
		height: 96rpx;
		background: $uni-color-primary;
		box-shadow: 0 50rpx 32rpx -36rpx rgba($color: $uni-color-primary, $alpha: 0.4);
		border-radius: 96rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		font-weight: 500;
		line-height: 96rpx;
	}
</style>
