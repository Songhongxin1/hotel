<template>
    <div id="shoptopay">
        <div class="banner">
            <img src="../../static/images/banner2.png" alt="">
        </div>
        <div class="shoptopay-title">
            <div class="weui-cell list1">
                <div class="weui-cell__hd">
                    <p>{{hotel_reserve.hotel_name}}</p>
                </div>
            </div>
            <div class="weui-cell list2">
                <div class="weui-cell__hd">
                <p>预定完成：</p>
                </div>
                <div class="weui-cell__bd">
                <p v-bind:class="pay_status_class">{{pay_status}}</p>
                </div>
            </div>
        </div>
        <div class="shoptopay-details">
            <div class="weui-cell order-num">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">订单号：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>{{order.identifier}}</p>
                </div>
            </div>
            <div class="weui-cell in-room">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">入住：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>{{hotel_reserve.enter_time}}</p>
                </div>
            </div>
            <div class="weui-cell out-room">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">离店：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>{{hotel_reserve.leave_time}}</p>
                </div>
            </div>
            <div class="weui-cell room-num">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">房间数：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>{{hotel_reserve.house_num}}</p>
                </div>
            </div>
            <div class="weui-cell username">
                <div class="weui-cell__hd">
                    <label class="weui-label" for="">入住人：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>{{hotel_reserve.enter_user}}</p>
                </div>
            </div>
            <div class="shoptopay-price">
                <div class="shoptopay-price-list price-num"><p>订单价格：</p><p><span style="font-size:.36rem;">{{hotel_reserve.house_price}}</span>元</p></div>
                <div class="shoptopay-price-list integral"><p>获得积分：</p><p><span>{{order.get_score}}</span>积分</p></div>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../static/css/weui.min.css';
</style>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            id:'',
            order:'',
            hotel_reserve:'',
            pay_status:'',
            pay_status_class:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/HotelReserve/reserveInfo',
        qs.stringify({
            id:this.$route.params.aid,
        }),
        {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then((res)=>{
            if(res.data.status == 0){
                this.order = res.data.data.order;
                this.hotel_reserve = res.data.data.hotel_reserve;
            }else{
                alert(res.data.msg)
            }
            },(error)=>{
            alert('数据请求失败，请刷新页面');
        });

    },
    mounted(){
        if(this.order.pay_status == 1){
            this.pay_status = '已支付';
            this.pay_status_class = 'has_pay'
        }else{
            this.pay_status = '等待付款'
            this.pay_status_class = 'not_yet_pay'
        };
    }
}
</script>
<style type="text/css" lang="scss">
#shoptopay{
    margin-bottom:.90rem;
    width:100%;
    overflow:hidden;
    margin-top:.80rem;
    .banner{
        width:100%;
        height:2.10rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .shoptopay-title{
        margin-top:.12rem;
        border:.01rem solid #d2d2d2;
        .weui-cell{
            font-size:.36rem;
            color:#3e3e3e;
        }
        .list2{
            font-size:.30rem;
        }
    }
    .shoptopay-details{
        border:.01rem solid #d2d2d2;
        margin-top:.13rem;
        font-size:.30rem;
        .weui-cell{
            .weui-cell__bd{
                width:1.50rem;
            }
            .weui-cell__hd{
                width:1.50rem;
                .weui-label{
                    width:100%;
                }
            }
        }
    }
    .shoptopay-price{
        background:#fff;
        padding-top:.30rem;
        padding-bottom:.3rem;
        .shoptopay-price-list{
            font-size:.30rem;
            color:#3e3e3e;
            padding-top:.10rem;
            p:nth-child(1){
                float:left;
                margin-left:.35rem;
            }
            p:nth-child(2){
                span{
                    color:#c03c3c;
                    margin-right:.10rem;
                    margin-left:.10rem;
                    font-weight:bolder;
                }
            }
        }
    }
}
.weui-cell{
    background:#fff;
    display:flex;
    .weui-cell__hd{
        margin-left:.20rem;
    }
}
.not_yet_pay{
    color:#e34242;
}
.has_pay{
    color:#2fbd64;
}
</style>