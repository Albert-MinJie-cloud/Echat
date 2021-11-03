<template>
	<view class="content">
		<view class="top_bar">

			<view class="top_bar_left" @tap="backOne">
				<image class="back-img" src="../../static/images/register/arrow-left-bold.png"></image>
			</view>

		</view>

		<view class="logo">
			<image src="../../static/images/register/echatlogo.png"></image>
		</view>

		<view class="main">
			<view class="title">注册</view>

			<view class="inputs">

				<view class="inputs-view">
					<input class="username" type="text" placeholder="请输入名字" value=""
						placeholder-style="color:#aaa;font-weight:400" @input="getUser" />
					<text class="employ" v-if="useremploy">已占用</text>
					<image src="../../static/images/register/select-bold.png" class="ok" v-if="isuser"></image>
				</view>

				<view class="inputs-view">
					<input class="email" type="text" placeholder="请输入邮箱" value=""
						placeholder-style="color:#aaa;font-weight:400" @input="isEmail" />
					<text class="employ" v-if="emailemploy">已占用</text>
					<text class="invalid" v-if="invalid">邮箱无效</text>
					<image src="../../static/images/register/select-bold.png" class="ok" v-if="isemail"></image>
				</view>

				<view class="inputs-view">
					<input class="password" :type="type" placeholder="请输入密码" value=""
						placeholder-style="color:#aaa;font-weight:400" @input="getPassword" />
					<image :src="lookUrl" @tap="passwordVisiable"></image>
				</view>
			</view>

		</view>

		<view :class="[{submit:isok},{submit1:!isok}]" @tap="clickSubmit">注册</view>


	</view>
</template>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				email: '',
				password: '',
				isuser: false, //用户名是否合法
				isemail: false, //邮箱是否合法
				invalid: false, //邮箱是否符合
				useremploy: false, //是否占用
				emailemploy: false, //是否占用
				look: false, //是显示密码
				type: 'password', //密码输入框的类型
				lookUrl: '../../static/images/register/hide(1).png',
				isok: false
			}
		},
		methods: {

			/* 密码的显示与隐藏 */
			passwordVisiable: function() {
				if (this.look) {
					this.type = "password"
					this.look = !this.look
					this.lookUrl = '../../static/images/register/hide(1).png'
				} else {
					this.type = "text"
					this.look = !this.look
					this.lookUrl = '../../static/images/register/browse(1).png'
				}
			},

			/* 判断是否为邮箱 */
			isEmail: function(e) {
				this.email = e.detail.value;
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if (this.email.length > 0) {
					if (reg.test(this.email)) {
						this.invalid = false
					} else {
						this.invalid = true
					}
				} else {

				}
			},

			/* 获取用户信息 */
			getUser: function(e) {
				this.user = e.detail.value;
				this.isOk()
			},

			/* 获取用户密码 */
			getPassword: function(e) {
				this.password = e.detail.value;
				this.isOk()
			},

			/* 注册按钮可点击 */
			isOk: function() {
				if (this.isuser && this.isemail) {
					this.isok = true
				} else {
					this.isok = false
				}
			},

			/* 返回登录页 */
			backOne: function() {
				uni.navigateBack({
					delta: 1
				})
			},

			/* 点击提交用户信息 */
			clickSubmit: function() {
				// if(this.isok){
				// 	uni.request({

				// 	})
				// }
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

		.inputs {
			padding-top: 8rpx;

			.inputs-view {
				position: relative;

				input {
					padding-top: 40rpx;
					height: 88rpx;
					font-size: $uni-font-size-lg;
					font-weight: bold;
					color: $uni-text-color;
					line-height: 88rpx;
					border-bottom: 1px solid $uni-border-color;
				}

				image {
					width: 42rpx;
					height: 42rpx;
					position: absolute;
					right: 0;
					top: 66rpx;
				}

				.employ,
				.invalid {
					position: absolute;
					right: 0;
					top: 40rpx;
					font-size: $uni-font-size-base;
					font-weight: bold;
					color: $uni-color-warning;
					line-height: 88rpx;
				}
			}
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

	.submit1 {
		margin: 0 auto;
		text-align: center;
		width: 520rpx;
		height: 96rpx;
		background: $uni-bg-color-hover;
		border-radius: 96rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color-inverse;
		font-weight: 500;
		line-height: 96rpx;
	}
</style>
