<template>
    <div id="cyclingsuccess">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <div class="success-top">
            <i class="iconfont">&#xe66e;</i>
            <p>订单状态：已付款</p>
        </div>
        <div class="success-details">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-cell__hd">订单号：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>265351542515</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-cell__hd">租车类型：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>观光车</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-cell__hd">租赁押金：</label>
                </div>
                <div class="weui-cell__bd">
                    <p><span class="yuan">200.00</span>元</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label for="" class="weui-cell__hd">获得积分：</label>
                </div>
                <div class="weui-cell__bd">
                    <p>200积分</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#cyclingsuccess{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    background:#fff;
    padding-bottom:1.50rem;
    .banner{
        width:100%;
        height:2.10rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .success-top{
        background:#fff;
        overflow:hidden;
        .iconfont{
            display:block;
            text-align:center;
            font-size:.70rem;
            color:#359c41;
            margin-top:.32rem;
            margin-bottom:0rem;
        }
        p{
            color:#359c41;
            font-size:.48rem;
            text-align:center;
            margin-bottom:.40rem;
        }
    }
    .success-details{
        border-top:.01rem solid #bfbfbf;
        padding:.30rem .60rem;
        font-size:.36rem;
        color:#404040;
        .yuan{
            color:#e03b3b;
        }
    }
}
</style>