<template>
    <div id="userrestaurantorder">
        <div class="banner">
            <img src="../../static/images/my2.jpg" alt="">
        </div>
        <div class="restaurant-content">
            <ul class="restaurant-box">
                <li class="restaurant-list">
                    <div class="li-left">
                        <p>订单号：<span>265154215</span></p>
                        <p>订单详情：<span>XX生态餐厅大厅</span></p>
                        <p>订单日期：<span>2017年7月5日</span></p>
                    </div>
                    <div class="li-right">
                        <p class="price">￥288</p>
                        <p class="pay-off">未支付</p>
                        <a href="javascript:;"><img src="../../static/images/weixin.png" alt="" />立刻支付</a>
                    </div>
                </li>
                <li class="restaurant-list">
                    <div class="li-left">
                        <p>订单号：<span>265154215</span></p>
                        <p>订单详情：<span>XX生态餐厅包房</span></p>
                        <p>订单日期：<span>2017年7月5日</span></p>
                    </div>
                    <div class="li-right">
                        <p class="price">￥288</p>
                        <p class="pay-on">已支付</p>
                    </div>
                </li>
                <li class="restaurant-list">
                    <div class="li-left">
                        <p>订单号：<span>265154215</span></p>
                        <p>订单详情：<span>XX生态餐厅景区外送</span></p>
                        <p>订单日期：<span>2017年7月5日</span></p>
                    </div>
                    <div class="li-right">
                        <p class="price">￥288</p>
                        <p class="pay-off">未支付</p>
                        <a href="javascript:;"><img src="../../static/images/weixin.png" alt="" />立刻支付</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#userrestaurantorder{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    background:#fff;
    .banner{
        width:100%;
        height:2.49rem;
        img{
            width:100%;
            height:100%;
            vertical-align:middle;
        }
    }
    .restaurant-content{
        padding:0 .48rem;
        border-left:.02rem solid #ebebeb;
        border-right:.02rem solid #ebebeb;
        .restaurant-box{
            padding-bottom:2.00rem;
            .restaurant-list{
                overflow:hidden;
                padding-bottom:.20rem;
                padding-top:.20rem;
                border-bottom:.01rem solid #a0a0a0;
                .li-left{
                    float:left;
                    color:#373737;
                    font-size:.28rem;
                    p{
                        line-height:.70rem;
                    }
                }
                .li-right{
                    overflow:hidden;
                    p{
                        font-size:.36rem;
                        text-align:right;
                        line-height:.50rem;
                        margin-top:.20rem;
                    }
                    .price{
                        color:#373737;
                    }
                    .pay-off{
                        color:#e05454;
                    }
                    .pay-on{
                        color:#3ca967;
                    }
                    a{
                        margin-top:.20rem;
                        width:1.73rem;
                        height:.53rem;
                        float:right;
                        background:#2cbc5b;
                        border-radius:.08rem;
                        font-size:.25rem;
                        color:#fff;
                        line-height:.53rem;
                        img{
                            margin-left:.10rem;
                            margin-right:.10rem;
                            vertical-align:middle;
                            width:.42rem;
                            height:.37rem;
                        }
                    }
                }
            }
        }
    }
}
</style>