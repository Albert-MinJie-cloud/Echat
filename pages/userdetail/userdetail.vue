<template>
    <view class="content">
        <view class="top_bar">
            <view class="top_bar_left">
                <view class="back-img">
                    <image
                        src="../../static/images/userdetail/arrow-left-bold.png"
                        @tap="backOne"
                    ></image>
                </view>
            </view>
            <view class="top_bar_right">
                <view class="more-img">
                    <image
                        src="../../static/images/userdetail/elipsis.png"
                        @tap="backOne"
                    ></image>
                </view>
            </view>
        </view>

        <view class="bg">
            <view class="bg-bai" :animation="animationData4"></view>
            <image
                class="bg-img"
                src="../../static/images/userdetail/949abd0877319fe239299f876bf2f133.jpg"
                mode="aspectFill"
            ></image>
        </view>

        <view class="main">
            <view class="user-header" :animation="animationData2">
                <view class="avatar-bg">
                    <image
                        class="avatar-img"
                        src="../../static/images/userdetail/949abd0877319fe239299f876bf2f133.jpg"
                        mode="aspectFill"
                    >
                    </image>
                    <view class="gender" :animation="animationData3">
                        <image
                            class="gender-img"
                            src="../../static/images/userdetail/woman(2).png"
                            mode=""
                        ></image>
                    </view>
                </view>
            </view>

            <view class="user-info">
                <view class="name">{{ user.name }}</view>
                <view class="nickname">昵称：{{ user.nickname }}</view>
                <view class="solgan">{{ user.solgan }}</view>
            </view>
        </view>

        <view class="bottom-bar">
            <view class="bottom-btn btn1" @tap="addFriendAnima">
                加为好友
            </view>
        </view>

        <view
            class="add-msg"
            :style="{
                height: addHeight + 'px',
                bottom: '-' + addHeight + 'px',
            }"
            :animation="animationData"
        >
            <view class="name">{{ user.name }}</view>
            <textarea
                :value="username + '请求添加好友~'"
                maxlength="120"
                class="add-main"
            ></textarea>
        </view>

        <view class="add-bt bottom-bar" :animation="animationData1">
            <view class="close btn1" @tap="addFriendAnima">取消</view>
            <view class="send btn1">发送</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            addHeight: "",
            animationData: {},
            animationData1: {},
            animationData2: {},
            animationData3: {},
            animationData4: {},
            isAdd: false,
            genderBg: "rgba(249,89,91,1)",
            username: "闵杰",
            user: {
                name: "mary",
                nickname: "dasdasd",
                solgan: "JavaScript 是 Web 的编程语言。所有现代的 HTML 页面都使用 JavaScript。JavaScript 非常容易学。本教程将教你学习初级到高级 JavaScript 知识。 ",
            },
        };
    },

    /* 页面渲染完毕的生命周期 */
    onReady: function () {
        this.getElementStyle();
    },

    methods: {
        /* 返回上一页 */
        backOne: function () {
            uni.navigateBack({
                delta: 1,
            });
        },

        /* 获取到元素高度 */
        getElementStyle: function () {
            const query = uni.createSelectorQuery().in(this);
            query
                .select(".bg")
                .boundingClientRect((data) => {
                    this.addHeight = data.height - 186;
                })
                .exec();
        },

        /* 添加好友动画 */
        addFriendAnima() {
            this.isAdd = !this.isAdd;
            var animation = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });
            var animation1 = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });
            var animation2 = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });
            var animation3 = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });
            var animation4 = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });

            if (this.isAdd) {
                animation.bottom(0).step();
                animation1.bottom(0).step();
                animation2.width(120).height(120).left(100).step();
                animation3.opacity(0).step();
                animation4.backgroundColor("rgba(72,73,161,0.6)").step();
            } else {
                animation.bottom(-this.addHeight).step();
                animation1.bottom(-104).step();
                animation2.width(186).height(186).left(0).step();
                animation3.opacity(1).step();
                animation4.backgroundColor("rgba(72,73,161,0)").step();
            }
            this.animationData = animation.export();
            this.animationData1 = animation1.export();
            this.animationData2 = animation2.export();
            this.animationData3 = animation3.export();
            this.animationData4 = animation4.export();
        },
    },
};
</script>

<style lang="scss">
@import "../../commons/css/tobar.scss";

.bg {
    position: fixed;
    z-index: -4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .bg-bai {
        width: 100%;
        height: 100%;
    }

    .bg-img {
        z-index: -3;
        opacity: 0.4;
        position: absolute;
        left: -32rpx;
        top: -32rpx;
        width: 110%;
        height: 110%;
        filter: blur(16px);
    }
}

.main {
    width: 100%;
    overflow: hidden;

    .user-header {
        overflow: hidden;
        margin: 160rpx auto 0;
        width: 372rpx;
        height: 372rpx;
        border-radius: 36rpx;
        border: 6rpx solid rgba(255, 255, 255, 1);

        .avatar-bg {
            z-index: 10;
            position: relative;
            width: 100%;
            height: 100%;

            .gender {
                opacity: 1;
                width: 64rpx;
                height: 64rpx;
                border-radius: $uni-border-radius-circle;
                background: $uni-color-error;
                position: absolute;
                bottom: 0;
                right: 0;
                text-align: center;

                .gender-img {
                    padding-top: 12rpx;
                    width: 40rpx;
                    height: 40rpx;
                }
            }

            .avatar-img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .user-info {
        padding-top: 42rpx;
        text-align: center;

        .name {
            font-size: 52rpx;
            color: $uni-text-color;
            line-height: 74rpx;
        }

        .nickname {
            font-size: $uni-font-size-base;
            color: $uni-text-color;
            line-height: 40rpx;
        }

        .solgan {
            font-size: $uni-font-size-base;
            color: $uni-text-color;
            line-height: 40rpx;
            padding: 20rpx 120rpx;
        }
    }
}

.bottom-bar {
    .bottom-btn {
        margin: 0 $uni-spacing-col-base;
        background: $uni-color-primary;
        color: $uni-text-color-inverse;
    }
}

.add-msg {
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    background: $uni-bg-color;
    border-radius: 40rpx 40rpx 0 0;
    padding: 0 56rpx;
    z-index: 0;

    .name {
        padding-top: 168rpx;
        line-height: 74rpx;
        color: $uni-text-color;
        font-size: 52rpx;
    }

    .add-main {
        box-sizing: border-box;
        width: 100%;
        height: 420rpx;
        padding: 18rpx 22rpx;
        border-radius: $uni-border-radius-base;
        background: $uni-border-color;
        color: $uni-text-color;
        font-size: $uni-font-size-lg;
        line-height: 48rpx;
    }
}

.add-bt {
    position: fixed;
    z-index: 100;
    bottom: -104rpx;
    width: 100%;
    height: 104rpx;
    display: flex;
    box-sizing: border-box;
    padding: 12rpx $uni-spacing-col-base;

    .close {
        width: 172rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 32rpx;
        border-radius: $uni-border-radius-sm;
        background: $uni-bg-color-hover;
        color: $uni-text-color;
    }

    .send {
        margin-left: 24rpx;
        flex: auto;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 32rpx;
        border-radius: $uni-border-radius-sm;
        background: $uni-color-primary;
        color: $uni-text-color-inverse;
    }
}
</style>
