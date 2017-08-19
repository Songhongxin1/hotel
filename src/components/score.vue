<template>
    <div id="score">
        <div class="banner">
            <img src="../../static/images/userbanner.jpg"alt="">
        </div>
        <div class="user-head">
            <div class="my-score">
                <p class="iconfont">&#xe6a6;</p>
                <p>我的积分：<span>1000</span></p>
            </div>
            <div class="head-radius">
                <img src="../../static/images/head.jpg" alt="">
                <span>+</span>
            </div>
            <p class="username">用户名:<span>BGH542</span></p>
        </div>
        <div class="score-details">
            <p class="score-title">积分明细<span class="iconfont"></span></p>
            <ul class="score-ul">
                <li class="score-li">
                    <div class="li-left">
                        <p class="line1">关注微信</p>
                        <p class="line2">2017/07/07/12:12</p>
                    </div>
                    <div class="li-right">
                        <p class="line1">+200</p>
                        <p class="line2">当前积分：<span>200</span></p>
                    </div>
                </li>
                <li class="score-li">
                    <div class="li-left">
                        <p class="line1">关注微信</p>
                        <p class="line2">2017/07/07/12:12</p>
                    </div>
                    <div class="li-right">
                        <p class="line1">+200</p>
                        <p class="line2">当前积分：<span>200</span></p>
                    </div>
                </li>
                <li class="score-li">
                    <div class="li-left">
                        <p class="line1">关注微信</p>
                        <p class="line2">2017/07/07/12:12</p>
                    </div>
                    <div class="li-right">
                        <p class="line1">+200</p>
                        <p class="line2">当前积分：<span>200</span></p>
                    </div>
                </li>
                <p class="ul-bottom">更多</p>
            </ul>
        </div>
        <div class="score-rules">
            <p class="rules-title">积分规则</p>
            <ul class="rules-ul">
                <li class="rules-li">①关注九龙山微信公众平台获得200积分；</li>
                <li class="rules-li">②酒店预订、餐厅预订、租赁服务等支付金额可获得相应积分；<br />获得积分=支付金额*2（保留整数）；</li>
                <li class="rules-li">③商家营销活动额外赠送积分（视商家活动规则而定）；</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#score{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    background:#fff;
    .banner{
        width:100%;
        height:3.08rem;
        img{
            width:100%;
            height:100%;
            vertical-align:middle;
        }
    }
    .user-head{
        border-bottom:.01rem solid #434343;
        margin:0 .42rem;
        position:relative;
        .my-score{
            position:absolute;
            bottom:.30rem;
            padding-left:.10rem;
            .iconfont{
                width:100%;
                text-align:center;
                font-size:.60rem;
                color:#49d7e8;
                margin-bottom:.10rem;
            }
            p{
                font-size:.25rem;
                color:#3d3d3d;
            }
        }
        .head-radius{
            width:2.83rem;
            height:2.83rem;
            margin:0 auto;
            border-radius:50%;
            background:#fff;
            position:relative;
            margin-top:-1.50rem;
            img{
                border-radius:50%;
                position:absolute;
                width:2.69rem;
                height:2.69rem;
                top:.07rem;
                left:.07rem;
            }
            span{
                width:.58rem;
                height:.58rem;
                text-align:center;
                border-radius:50%;
                line-height:.48rem;
                background:#43ab3e;
                position:absolute;
                bottom:.12rem;
                right:.25rem;
                color:#fff;
                font-size:.50rem;
            }
        }
        .username{
            color:#3d3d3d;
            font-size:.25rem;
            text-align:center;
            line-height:.90rem;
        }
    }
    .score-details{
        padding:0 .41rem;
        .score-title{
            padding-left:.10rem;
            color:#3d3d3d;
            font-size:.30rem;
            line-height:.98rem;
            height:.98rem;
            border-bottom:.01rem solid #434343;
        }
        .score-ul{
            margin-bottom:.20rem;
            .score-li{
                border-bottom:.01rem solid #434343;
                p{
                    color:#3d3d3d;
                    font-size:.25rem;
                    margin-top:.20rem;
                }
                .line2{
                    margin-top:.30rem;
                    display:block;
                    color:#979696;
                    font-size:.20rem;
                    margin-bottom:.10rem;
                }
                .li-left{
                    padding-left:.10rem;
                    float:left;
                }
                .li-right{
                    padding-right:.20rem;
                    overflow:hidden;
                    text-align:right;
                }
            }
            .ul-bottom{
                color:#636363;
                font-size:.30rem;
                text-align:center;
                line-height:.90rem;
            }
        }
    }
    .score-rules{
        padding:.41rem;
        .rules-title{
            color:#3d3d3d;
            font-size:.30rem;
        }
        .rules-ul{
            margin-top:.20rem;
            color:#3d3d3d;
            font-size:.24rem;
            .rules-li{
                line-height:.40rem;
            }
        }
    }
}
</style>