<template>
    <view class="content">
        <view class="top_bar">
            <view class="top_bar_left" @tap="backOne">
                <image
                    src="../../static/images/userhome/arrow-left-bold.png"
                    mode=""
                ></image>
            </view>
            <view class="top_bar_center bar_title">详情</view>
            <view class="top_bar_right pice"></view>
        </view>

        <view class="main">
            <view class="column heads">
                <view class="row head">
                    <view class="title">头像</view>
                    <view class="cont">
                        <image-cropper
                            :src="tempFilePath"
                            @confirm="confirm"
                            @cancel="cancel"
                        ></image-cropper>
                        <image
                            :src="cropFilePath"
                            @tap="upload"
                            class="user-image"
                        ></image>
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view
                    class="row headtext"
                    @tap="modalAnimation('签名', userinfo.solgan, false)"
                >
                    <view class="title">签名</view>
                    <view class="cont">
                        {{ userinfo.solgan }}
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view class="row headtext register">
                    <view class="title">注册</view>
                    <view class="cont">
                        {{ userinfo.registertime }}
                    </view>
                </view>

                <view
                    class="row headtext nickname"
                    @tap="modalAnimation('昵称', userinfo.nickname, false)"
                >
                    <view class="title">昵称</view>
                    <view class="cont">
                        {{ userinfo.nickname }}
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view class="row headtext">
                    <view class="title">性别</view>
                    <view class="cont">
                        <picker
                            @change="bindPickerChange"
                            :value="index"
                            :range="array"
                        >
                            <view class="uni-input">{{ array[index] }}</view>
                        </picker>
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view class="row headtext">
                    <view class="title">生日</view>
                    <view class="cont">
                        <picker
                            mode="date"
                            :value="date"
                            :start="startDate"
                            :end="endDate"
                            @change="bindDateChange"
                        >
                            <view class="uni-input">{{ date }}</view>
                        </picker>
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view
                    class="row headtext"
                    @tap="modalAnimation('电话', userinfo.phone, false)"
                >
                    <view class="title">电话</view>
                    <view class="cont">
                        {{ userinfo.phone }}
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view
                    class="row headtext email"
                    @tap="modalAnimation('邮箱', userinfo.email, true)"
                >
                    <view class="title">邮箱</view>
                    <view class="cont">
                        {{ userinfo.email }}
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view class="row headtext password">
                    <view class="title">密码</view>
                    <view class="cont">
                        {{ userinfo.password }}
                    </view>
                    <view class="more">
                        <image
                            src="../../static/images/userhome/arrow-right.png"
                            mode=""
                        ></image>
                    </view>
                </view>

                <view class="exit-btn">退出登录</view>
            </view>
        </view>

        <view
            class="modal"
            :style="{ bottom: -modalHeight + 'px' }"
            :animation="animationData"
        >
            <view class="modal-header">
                <view class="close" @tap="modalAnimation()">取消</view>
                <view class="title">{{ modalTitle }}</view>
                <view class="define" @tap="modalConfirm()">确认</view>
            </view>

            <view class="modal-main">
                <input
                    type="password"
                    v-model="modalpassword"
                    class="modal-password"
                    placeholder="新密码"
                    placeholder-style="color:rgba(72,73,161,1)"
                    :style="{ display: ispassword }"
                />
                <textarea v-model="modalChangeContent" class="modal-content" />
            </view>
        </view>
    </view>
</template>

<script>
import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";

export default {
    data() {
        const currentDate = this.getDate({
            format: true,
        });
        return {
            userinfo: {
                imageurl: "",
                solgan: "我是签名11111111111111",
                registertime: "2019-12-22 13:32:45",
                nickname: "测试1",
                gender: 1,
                birthday: "2019-12-22 13:32:45",
                phone: "18839116808",
                email: "369221657@qq.com",
                password: "123123",
            },
            array: ["男", "女", "未知"],
            index: 0,
            date: currentDate,
            tempFilePath: "",
            cropFilePath: "../../static/images/userhome/useravatar.jpg",
            ispassword: false,
            modalpassword: "",
            modalHeight: "",
            modalTitle: "", //修改的标题
            modalChangeContent: "", //修改的内容
            isModal: false, //modal的开关
            animationData: {},
        };
    },

    computed: {
        startDate() {
            return this.getDate("start");
        },
        endDate() {
            return this.getDate("end");
        },
    },

    components: {
        ImageCropper,
    },

    /* 页面渲染完毕的生命周期 */
    onReady: function () {
        this.getElementHeight();
    },

    methods: {
        /* 返回上一页 */
        backOne: function () {
            uni.navigateBack({
                delta: 1,
            });
        },

        /* 选择性别 */
        bindPickerChange: function (e) {
            console.log("picker发送选择改变，携带值为", e.target.value);
            this.index = e.target.value;
        },

        /* 时间选择器 */
        bindDateChange: function (e) {
            this.date = e.target.value;
        },

        /* 获取时间 */
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === "start") {
                year = year - 60;
            } else if (type === "end") {
                year = year + 2;
            }
            month = month > 9 ? month : "0" + month;
            day = day > 9 ? day : "0" + day;
            return `${year}-${month}-${day}`;
        },

        /* 图片裁剪 */
        upload() {
            uni.chooseImage({
                count: 1, //默认9
                sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ["album", "camera "], //从相册选择，
                success: (res) => {
                    this.tempFilePath = res.tempFilePaths.shift();
                },
            });
        },
        confirm(e) {
            this.tempFilePath = "";
            this.cropFilePath = e.detail.tempFilePath;
        },
        cancel() {
            console.log("canceled");
        },

        /* 获取页面高度 */
        getElementHeight: function () {
            const query = uni.createSelectorQuery().in(this);
            query
                .select(".modal")
                .boundingClientRect((data) => {
                    this.modalHeight = data.height;
                })
                .exec();
        },

        /* modal弹窗变化 */
        modalAnimation: function (type, date, ispwd) {
            if (ispwd) {
                this.ispassword = "hidden";
            } else {
                this.ispassword = "none";
            }
            this.ispassword = ispwd;
            this.modalTitle = type;
            this.modalChangeContent = date;
            this.isModal = !this.isModal;
            var animation = uni.createAnimation({
                duration: 500,
                timingFunction: "ease",
            });
            if (this.isModal) {
                animation.bottom(0).step();
            } else {
                animation.bottom(-this.modalHeight).step();
            }
            this.animationData = animation.export();
        },

        /* modal弹窗修改确定 */
        modalConfirm: function () {
            this.modalAnimation();
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
    position: absolute;
    padding-top: 118rpx;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .column {
        display: flex;
        flex-direction: column;

        .row {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .head {
            display: flex;
            align-items: center;
            height: 148rpx;
        }

        .headtext {
            height: 124rpx;
        }

        .register,
        .email,
        .password {
            border-bottom: 1px solid $uni-border-color;
        }

        .user-image {
            width: $uni-img-size-lg;
            height: $uni-img-size-lg;
            border-radius: $uni-border-radius-base;
            background: aliceblue;
        }

        .title {
            flex: none;
            padding: 0 $uni-spacing-col-base;
            font-size: $uni-font-size-lg;
            font-weight: 500;
            color: $uni-text-color;
            line-height: 124rpx;
        }

        .cont {
            flex: auto;
            font-size: $uni-font-size-lg;
            color: $uni-text-color-grey;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 124rpx;
            display: flex;
        }

        .more {
            flex: none;
            display: flex;
            align-items: center;
            height: 112rpx;
            margin-right: 24rpx;

            image {
                width: 40rpx;
                height: 40rpx;
            }
        }
    }

    .exit-btn {
        text-align: center;
        font-size: 32rpx;
        color: $uni-color-warning;
        line-height: 88rpx;
        margin-top: 240rpx;
    }
}

.modal {
    position: fixed;
    z-index: 1003;
    background: #fff;
    width: 100%;
    height: 100%;

    .modal-header {
        width: 100%;
        height: 88rpx;
        padding-top: var(--status-bar-height);
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid $uni-border-color;

        .close {
            padding-left: $uni-spacing-col-base;
            font-size: $uni-font-size-lg;
            color: $uni-text-color;
            line-height: 44rpx;
        }

        .title {
            flex: auto;
            font-size: 40rpx;
            text-align: center;
            color: $uni-text-color;
            font-weight: 500;
            line-height: 88rpx;
        }

        .define {
            padding-right: $uni-spacing-col-base;
            font-size: $uni-font-size-lg;
            color: $uni-color-primary;
            line-height: 44rpx;
        }
    }

    .modal-main {
        display: flex;
        padding: $uni-spacing-col-base;
        flex-direction: column;

        .modal-password {
            margin-bottom: 24rpx;
            flex: auto;
            padding: 16rpx 22rpx;
            background-color: $uni-border-color;
            border-radius: $uni-border-radius-sm;
            font-size: $uni-font-size-lg;
            color: $uni-text-color;
            line-height: 88rpx;
        }

        .modal-content {
            flex: auto;
            box-sizing: border-box;
            width: 100%;
            padding: 16rpx 22rpx;
            height: 386rpx;
            background-color: $uni-border-color;
            border-radius: $uni-border-radius-sm;
            font-size: $uni-font-size-lg;
            color: $uni-text-color;
            line-height: 44rpx;
        }
    }
}
</style>
