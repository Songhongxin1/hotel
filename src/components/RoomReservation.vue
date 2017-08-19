<template>
    <div id="roomreservation">
        <div class="reservation-title">
            <div class="weui-cell list1">
                <div class="weui-cell__hd">
                    <p>{{hotel_info.name}}</p>
                </div>
            </div>
            <div class="weui-cell list2">
                <div class="weui-cell__hd">
                    <img src="../../static/images/bed.png" alt="" />
                </div>
                <div class="weui-cell__bd">
                    <p>{{house_class_info.name}}</p>
                </div>
                <div class="weui-cell__ft">
                    <p>房型详情</p>
                </div>
            </div>
        </div>
        <div class="reservation-details">
            <p class="details-title">填写信息</p>
            <div class="in-time weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">入住:</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="date" class="weui-input" name="enter_time" v-model="enter_time" placeholder="请填写入住时间">
                </div>
            </div>
            <div class="weui-cell out-time">
                <div class="weui-cell__hd">
                    <label class="weui-label">离店:</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="date" class="weui-input" v-model="leave_time" name="leave_time" placeholder="请填写离店时间">
                </div>
            </div>
            <div class="weui-cell room-num">
                <div class="weui-cell__hd">
                    <label class="weui-label">房间数:</label>
                </div>
                <div class="weui-cell__bd">
                    <div class="list-right"><p class="list-num" type="tel" :value="house_num" v-model="house_num" name="house_num">{{house_num}}</p></div>
                </div>
            </div>
            <div class="weui-cell user-name">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">入住人:</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="text" class="weui-input" name="enter_user" v-model="enter_user" placeholder="入住人姓名，每间只需填写一人">
                </div>
            </div>
            <div class="weui-cell user-tel">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">手机号:</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="tel" class="weui-input" name="user_tel" v-model="user_tel" placeholder="用于接收通知">
                </div>
            </div>
            <div class="weui-cell coupons">
                <div class="weui-cell__hd">
                    <label class="weui-label" name="" for="">优惠券:</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="text" class="weui-input" placeholder="不使用">
                </div>
            </div>
            <p class="list-footer">如需发票，可向酒店索取</p>
        </div>
        <div class="weui-cell pay-all-room">
            <div class="weui-cell__hd">
                <label class="weui-label">订单价格:</label>
            </div>
            <div class="weui-cell__bd">
                <p><span>{{house_class_info.price}}</span>元</p>
            </div>
        </div>
        <div class="weui-cell pay-btn">
            <div class="face-pay">
                <a href="javascript:;" @click="onSubmit">提交订单到店付</a>
            </div>
            <div class="wx-pay">
                <a href="javascript:;" @click="onSubmit"><img src="../../static/images/weixin.png" alt="">微信支付</a>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../static/css/weui.min.css';
</style>
<script type="text/javascript">
import $ from 'webpack-zepto';
var qs = require('qs');
export default{
    data(){
        return{
            house_id:'',
            house_class_info:'',
            hotel_info:'',

            enter_time:'',
            leave_time:'',
            house_num:'1',
            enter_user:'',
            user_tel:'',
            coupon_id:'',

            hotel_order_id:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/HotelReserve/reserve',
            qs.stringify({
                house_id:this.$route.params.house_id,
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    // console.log(res.data.data);
                    this.house_class_info = res.data.data.house_class_info;
                    this.hotel_info = res.data.data.hotel_info;
                }else{
                    alert(res.data.msg)
                }
                },(error)=>{
                alert('home.vue'+error.status);
            });
    },
    methods:{
        onSubmit(){
                if(this.enter_time == ''){
                    alert('请输入入住时间')
                }else if(this.leave_time == ''){
                    alert('请输入离店时间')
                }else if(this.enter_user == ''){
                    alert('请输入入住人姓名')
                }else if(this.user_tel == ''){
                    alert('请输入入住人电话')
                }
                else{
                this.$http.post('http://m.dev.hotel.com/HotelReserve/doReserve',
                qs.stringify({
                    house_id:this.$route.params.house_id,
                    enter_time:this.enter_time,
                    leave_time:this.leave_time,
                    house_num:this.house_num,
                    enter_user:this.enter_user,
                    user_tel:this.user_tel,
                }),
                {
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}
                })
                .then((res)=>{
                    if(res.data.status == 0){
                        this.hotel_order_id = res.data.data
                        this.$router.push('/hotel/room/RoomReservation/ShopToPay'+this.hotel_order_id)
                    }else{
                        alert(res.data.msg)
                    }
                    },(error)=>{
                    alert('home.vue'+error.status);
                });
            }
        }
    }
}
</script>
<style type="text/css" lang="scss">
#roomreservation{
    margin-bottom:.90rem;
    width:100%;
    overflow:hidden;
    margin-top:.80rem;
    .reservation-title{
        margin-top:.12rem;
        border:0.01rem solid #d2d2d2;
        .weui-cell{
            font-size:.36rem;
            color:#3e3e3e;
            .weui-cell__hd{
                img{
                    width:.35rem;
                    margin-left:.15rem;
                    height:.27rem;
                    vertical-align:middle;
                    margin-right:.20rem;
                }
                p{
                    margin-left:.15rem;
                }
            }
            .weui-cell__ft{
                p{
                    color:#56d89c;
                }
            }
        }
    }
    .reservation-details{
        border:0.01rem solid #d2d2d2;
        font-size:.30rem;
        color:#3e3e3e;
        background:#fff;
        margin-top:.13rem;
        .weui-cell{
            margin-left:.20rem;
            .weui-cell__bd{
                margin-left:.20rem;
                .jian,.jia{
                    background:#898989;
                    display:inline-block;
                    vertical-align:middle;
                    width:.69rem;
                    height:.60rem;
                    border-radius:.08rem;
                    position:relative;
                    color:#fff;
                    font-size:.50rem;
                    line-height:.60rem;
                    text-align:center;
                }
                .jian{
                    margin-right:-.09rem;
                }
                .jia{
                    margin-left:-.09rem;
                }
                .list-num{
                    height:.58rem;
                    width:1.04rem;
                    line-height:.6rem;
                    padding-left:.1rem;
                    color:#191919;
                    vertical-align:middle;
                    font-size:.32rem;
                }
            }
        }
        .details-title{
            color:#3e3e3e;
            font-size:.36rem;
            border:none;
            margin-left:.20rem;
            line-height:.70rem;
        }
        .list-footer{
            margin-left:.35rem;
            border-top:.01rem solid #e5e5e5;
            line-height:.70rem;
        }
    }
    .pay-all-room{
        font-size:.30rem;
        color:#3e3e3e;
        margin-top:.09rem;
        border:.01rem solid #d2d2d2;
        margin-bottom:0rem;
        .weui-cell__hd{
            margin-left:.20rem;
            width:1.60rem;
            .weui-label{
                width:100%;
            }
        }
        .weui-cell__bd{
            p{
                span{
                    color:#a30303;
                    font-size:.42rem;
                    margin-right:.10rem;
                }
            }
        }
    }
    .pay-btn{
        display:flex;
        background:none;
        .face-pay{
            flex:1;
            height:1.00rem;
            display:block;
        }
        .wx-pay{
            margin-left:.15rem;
            flex:1;
            height:1.00rem;
        }
        a{
            line-height:1.00rem;
            text-align:center;
            display:block;
            width:100%;
            height:100%;
            border:none;
            border-radius:.09rem;
            background:linear-gradient(#4ccd24,#06852c);
            font-size:.36rem;
            color:#fff;
            text-align:middle;
            cursor: pointer;
            img{
                vertical-align:middle;
                width:.57rem;
                height:.51rem;
                margin-right:.20rem;
            }
        }
    }
}
.weui-cell{
    background:#fff;
    display:flex;
}
</style>