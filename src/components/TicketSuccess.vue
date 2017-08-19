<template>
    <div id="ticketsuccess">
        <div class="banner">
            <img src="../../static/images/banner1.png" alt="">
        </div>
        <div class="success-box">
            <img src="../../static/images/chenggong.png" alt="">
            <p class="success-txt">购买成功</p>
        </div>
        <ul class="tickets-details">
            <li class="tickets-list">
                <div class="content-div noselect">
                    <div class="content-div-div">
                        <img src="../../static/images/li1.jpg" alt="">
                        <p class="right-box">
                            <span class="tickets-price">￥50</span>
                            <span class="tickets-txt">全票价</span>
                        </p>
                    </div>
                    <p class="cicle"></p>
                </div>
                <div class="content-txt">
                    <div class="txt-left">
                        <p><span>订单号：</span><span>265154215</span></p>
                        <p><span>金额：</span><span>50元</span></p>
                        <p><span>门票编码：</span><span>15485954</span></p>
                        <p><span>获得积分：</span><span>50积分</span></p>
                    </div>
                    <div class="txt-right">
                        <img src="../../static/images/erweima.png" alt="">
                    </div>
                </div>
            </li>
            <li class="tickets-list">
                <div class="content-div noselect">
                    <div class="content-div-div">
                        <img src="../../static/images/li1.jpg" alt="">
                        <p class="right-box">
                            <span class="tickets-price">￥50</span>
                            <span class="tickets-txt">全票价</span>
                        </p>
                    </div>
                    <p class="cicle"></p>
                </div>
                <div class="content-txt">
                    <div class="txt-left">
                        <p><span>订单号：</span><span>265154215</span></p>
                        <p><span>金额：</span><span>50元</span></p>
                        <p><span>门票编码：</span><span>15485954</span></p>
                        <p><span>获得积分：</span><span>50积分</span></p>
                    </div>
                    <div class="txt-right">
                        <img src="../../static/images/erweima.png" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#ticketsuccess{
    background:#fff;
    margin-bottom:.75rem;
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
    .success-box{
        width:100%;
        background:#fff;
        overflow:hidden;
        img{
            width:1.10rem;
            height:1.09rem;
            vertical-align:middle;
            margin:.35rem auto 0 auto;
            display:block;
        }
        .success-txt{
            color:#359c41;
            font-size:.48rem;
            text-align:center;
            letter-spacing:.06rem;
            margin-top:.22rem;
        }
    }
    .tickets-details{
        background:#fff;
        width:6.70rem;
        margin:.10rem auto .15rem auto;
        .tickets-list{
            .content-div{
                width:100%;
                height:2.15rem;
                position:relative;
                .content-div-div{
                    display:flex;
                    padding-top:.16rem;
                    height:1.99rem;
                    width:100%;
                    background:#6ac977;
                    border:.02rem solid #d4d4d4;
                    box-shadow:-.10rem .05rem .08rem 0rem #ccc;
                    img{
                        width:4.31rem;
                        height:1.79rem;
                        margin-left:.21rem;
                        display:block;
                        vertical-align:middle;
                    }
                    .right-box{
                        flex:1;
                        padding-left:.38rem;
                        height:100%;
                        .tickets-price{
                            color:#fff;
                            font-size:.41rem;
                            line-height:.80rem;
                            display:block;
                        }
                        .tickets-txt{
                            color:#fff;
                            font-size:.41rem;
                            line-height:.80rem;
                            display:block;
                        }
                    }
                }
                .cicle{
                    height:.90rem;
                    width:.90rem;
                    position:absolute;
                    right:-.45rem;
                    top:.58rem;
                    background:#fff;
                    border-left:.02rem solid #d4d4d4;
                    border-radius:50%;
                }
            }
        }
        .content-txt{
            margin-bottom:.50rem;
            display:flex;
            margin-top:.10rem;
            padding-bottom:.20rem;
            border-bottom:.01rem solid #a0a0a0;
            .txt-left{
                flex:1;
                p{
                    line-height:.2rem;
                    span{
                        color:#373737;
                        font-size:.28rem;
                    }
                }
            }
            .txt-right{
                float:right;
                img{
                    margin-top:.3rem;
                    width:1.71rem;
                    height:1.71rem;
                    vertical-align:middle;
                    margin-right:.80rem;
                }
            }
        }
    }
}
</style>