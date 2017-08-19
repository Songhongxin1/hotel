<template>
    <div id="cyclingorder">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <div class="order-content">
            <p class="content-title">支付订单</p>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">租赁人：</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="" class="weui-input" name="" placeholder="请输入租赁人姓名">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">联系电话：</label>
                </div>
                <div class="weui-cell__bd">
                    <input type="" class="weui-input" name="" placeholder="请输入租赁人电话">
                </div>
            </div>
        </div>
        <div class="order-details">
            <p>取车地址：<span>九龙山租赁中心</span></p>
            <p>取车联系电话：<span>8516-56451542</span></p>
            <p>租赁押金：<span class="yuan">200</span><span>元</span></p>
        </div>
        <div class="btn-bottom">
            <router-link to="/lease/leasecycling/cyclingorder/cyclingsuccess"><img src="../../static/images/weixin.png" alt="" />立刻支付</router-link>
        </div>
    </div>
</template>
<style>
    @import '../../static/css/weui.min.css';
</style>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#cyclingorder{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    background:#fff;
    .banner{
        width:100%;
        height:2.10rem;
        img{
            width:100%;
            height:100%;
            vertical-align:middle;
        }
    }
    .order-content{
        padding:.10rem .50rem;
        .content-title{
            color:#404040;
            font-size:.36rem;
            text-align:center;
            line-height:.80rem;
        }
        .weui-cell{
            margin-top:.10rem;
            color:#404040;
            font-size:.34rem;
            text-align:justify;
            .weui-cell__hd{
                width:1.80rem;
                .weui-label{
                    width:100%;
                }
            }
        }
    }
    .order-details{
        padding:0 .6rem;
        margin-top:.50rem;
        font-size:.30rem;
        color:#454545;
        line-height:.80rem;
        .yuan{
            color:#c73636;
            font-size:.36rem;
        }
    }
    .btn-bottom{
        padding:.50rem 0 1.00rem 0;
        a{
            width:2.92rem;
            height:.86rem;
            font-size:.36rem;
            color:#fff;
            display:block;
            border-radius:.08rem;
            text-align:center;
            line-height:.86rem;
            background:#2cbc5b;
            margin:0 auto;
            img{
                width:.57rem;
                height:.51rem;
                vertical-align:middle;
                margin-right:.10rem;
            }
        }
    }
}
</style>