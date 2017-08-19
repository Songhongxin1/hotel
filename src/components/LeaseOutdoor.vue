<template>
    <div id="leaseoutdoor">
        <div class="banner">
            <img src="../../static/images/banner5.jpg" alt="">
        </div>
        <div class="leasecycling-box">
            <p class="box-title">租赁服务</p>
            <ul>
                <li class="leasecycling-list">
                    <img src="../../static/images/zhangpeng.png" alt="">
                    <p class="species">帐篷</p><p class="price">200元/小时</p>
                    <router-link to="/lease/leasecycling/cyclingorder" href="javascript:;">立刻租赁</router-link>
                </li>
                <li class="leasecycling-list">
                    <img src="../../static/images/dianpinche.png" alt="">
                    <p class="species">烧烤架</p><p class="price">50元/小时</p>
                    <router-link to="/lease/leasecycling/cyclingorder" href="javascript:;">立刻租赁</router-link>
                </li>
            </ul>
        </div>
        <div class="instructions">
            <p class="instructions-title">租赁须知</p>
            <section>
                <p>1、租用时必须遵守公园规则；</p>
                <p>2、租借时应对所租的租借物品进行会同检查，注意检查刹车和车胎等重要部件的完好，如发现异常应立即调换；由租借人疏忽造成的自行车损坏，维修费用由租借人支付；</p>
                <p>3、租借结束后请您凭车辆、钥匙及押金回执单取回押金；</p>
                <p>4、租借人如遗失自行车则放弃收回押金以作为赔偿；</p>
            </section>
            <p class="arrow iconfont">&#xe608;</p>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#leaseoutdoor{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    .banner{
        width:100%;
        height:2.10rem;
        img{
            width:100%;
            height:100%;
            vertical-align:middle;
        }
    }
    .leasecycling-box{
        .box-title{
            font-size:.30rem;
            color:#1d1d1d;
            line-height:.80rem;
            padding-left:.26rem;
        }
        ul{
            padding-top:.40rem;
            background:#fff;
            overflow:hidden;
            .leasecycling-list{
                margin-bottom:.40rem;
                color:#1d1d1d;
                font-size:.30rem;
                display:flex;
                img{
                    width:.41rem;
                    height:.36rem;
                    margin-left:.40rem;
                    margin-right:.50rem;
                    margin-top:.12rem;
                }
                p{
                    text-align:center;
                    flex:1;
                    height:.59rem;
                    line-height:.59rem;
                }
                a{
                    float:right;
                    margin-right:.51rem;
                    margin-left:.40rem;
                    display:block;
                    height:.59rem;
                    width:1.73rem;
                    line-height:.59rem;
                    text-align:center;
                    color:#fff;
                    font-size:.30rem;
                    border-radius:.08rem;
                    background:#2cbc5b;
                }
            }
        }
    }
    .instructions{
        .instructions-title{
            font-size:.30rem;
            color:#1d1d1d;
            line-height:.80rem;
            padding-left:.26rem;
        }
        section{
            padding:.37rem;
            background:#fff;
            text-align:justify;
            p{
                font-size:.24rem;
                color:#1d1d1d;
                line-height:.50rem;
            }
        }
        .arrow{
            text-align:center;
            font-size:.30rem;
            background:#fff;
            padding-bottom:.10rem;
        }
    }
}
</style>