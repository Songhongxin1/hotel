<template>
    <div id="ticketsorder">
        <div class="banner">
            <img src="../../static/images/my1.jpg" height="249" width="750" alt="">
        </div>
        <ul class="tickets-box">
            <li class="content-li">
                <a href="javascript:;" class="content-li-a">
                    <div class="right-box">
                        <p class="tickets-status">状态：<span class="status">已使用</span></p>
                        <p class="tickets-num">门票编码：<span>1251565</span></p>
                        <p class="tickets-order">订单号：<span>232515423</span></p>
                        <p class="buy-date">购买时间：<span>2017年6月25日</span></p>
                        <span class="tickets-price">￥50</span>
                        <span class="tickets-txt">全票价</span>
                    </div>
                    <img src="../../static/images/erweima2.png"alt="">
                </a>
                <p class="cicle"></p>
            </li>
            <li class="content-li">
                <a href="javascript:;" class="content-li-a">
                    <div class="right-box">
                        <p class="tickets-status">状态：<span class="status">已使用</span></p>
                        <p class="tickets-num">门票编码：<span>1251565</span></p>
                        <p class="tickets-order">订单号：<span>232515423</span></p>
                        <p class="buy-date">购买时间：<span>2017年6月25日</span></p>
                        <span class="tickets-price">￥50</span>
                        <span class="tickets-txt">全票价</span>
                    </div>
                    <img src="../../static/images/erweima2.png"alt="">
                </a>
                <p class="cicle"></p>
            </li>
            <li class="content-li">
                <a href="javascript:;" class="content-li-a">
                    <div class="right-box">
                        <p class="tickets-status">状态：<span class="status">已使用</span></p>
                        <p class="tickets-num">门票编码：<span>1251565</span></p>
                        <p class="tickets-order">订单号：<span>232515423</span></p>
                        <p class="buy-date">购买时间：<span>2017年6月25日</span></p>
                        <span class="tickets-price">￥50</span>
                        <span class="tickets-txt">全票价</span>
                    </div>
                    <img src="../../static/images/erweima2.png"alt="">
                </a>
                <p class="cicle"></p>
            </li>
            <li class="content-li">
                <a href="javascript:;" class="content-li-a">
                    <div class="right-box">
                        <p class="tickets-status">状态：<span class="status">已使用</span></p>
                        <p class="tickets-num">门票编码：<span>1251565</span></p>
                        <p class="tickets-order">订单号：<span>232515423</span></p>
                        <p class="buy-date">购买时间：<span>2017年6月25日</span></p>
                        <span class="tickets-price">￥50</span>
                        <span class="tickets-txt">全票价</span>
                    </div>
                    <img src="../../static/images/erweima2.png"alt="">
                </a>
                <p class="cicle"></p>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#ticketsorder{
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
    .tickets-box{
        overflow:hidden;
        width:6.70rem;
        margin:.40rem auto .15rem auto;
        .content-li{
            margin-bottom:.54rem;
            width:100%;
            height:2.89rem;
            position:relative;
            .content-li-a{
                display:flex;
                padding-top:.16rem;
                height:2.73rem;
                width:100%;
                background:#6ac977;
                border:.02rem solid #d4d4d4;
                box-shadow:-.10rem .05rem .08rem 0rem #ccc;
                img{
                    width:1.53rem;
                    height:1.52rem;
                    margin-right:.65rem;
                    margin-top:.50rem;
                    display:block;
                    vertical-align:middle;
                }
                .right-box{
                    border-right:.01rem dashed #cde3d0;
                    margin-right:.26rem;
                    flex:1;
                    padding-left:.38rem;
                    height:100%;
                    p{
                        color:#1d1d1d;
                        font-size:.28rem;
                        line-height:.44rem;
                        .status{
                            color:#fff;
                        }
                    }
                    .tickets-price{
                        float:left;
                        color:#fff;
                        font-size:.36rem;
                        line-height:.70rem;
                        display:block;
                        margin-right:.20rem;
                    }
                    .tickets-txt{
                        float:left;
                        color:#fff;
                        font-size:.36rem;
                        line-height:.70rem;
                        display:block;
                    }
                }
            }
            .cicle{
                height:1.22rem;
                width:1.22rem;
                position:absolute;
                right:-.75rem;
                top:.80rem;
                background:#fff;
                border-left:.02rem solid #d4d4d4;
                border-radius:50%;
            }
        }
    }
}
</style>