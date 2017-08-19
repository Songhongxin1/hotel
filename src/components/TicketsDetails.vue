<template>
    <div id="ticketsdetails">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <div class="details-bg">
            <div class="details-content">
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
                <ul class="tickets-details noselect">
                    <li class="tickets-ctrl">
                        <p class="ctrl-title">门票详情<span class="arrow-down iconfont noselect">&#xe600;</span></p>
                        <section class="tickets-section">身高不超过100cm儿童（不含4岁）免票，但是在看表演、吃自助餐时均无座位需与家长同座， 如需座位，请购买儿童票，敬请谅解。
身高100cm-140cm（不含140cm，不论岁数）， 按儿童票计算，需要购买幻多奇主题公园儿童票,儿童票不可单独预定，需和成人票一同预定。<br />1、请仔细阅读产的说明。。<br />2、剧场内表演不得进行拍照或录像，敬请遵守园内相关规定。
<br>3、门票一经出票成功，不得退改！</section>
                    </li>
                    <li class="tickets-ctrl">
                        <p class="ctrl-title">使用须知<span class="arrow-down iconfont noselect">&#xe600;</span></p>
                        <section class="tickets-section">身高不超过100cm儿童（不含4岁）免票，但是在看表演、吃自助餐时均无座位需与家长同座， 如需座位，请购买儿童票，敬请谅解。
身高100cm-140cm（不含140cm，不论岁数）， 按儿童票计算，需要购买幻多奇主题公园儿童票,儿童票不可单独预定，需和成人票一同预定。<br />1、请仔细阅读产的说明。。<br />2、剧场内表演不得进行拍照或录像，敬请遵守园内相关规定。
<br>3、门票一经出票成功，不得退改！</section>
                    </li>
                    <li class="tickets-ctrl">
                        <p class="ctrl-title">退票规则<span class="arrow-down iconfont noselect">&#xe600;</span></p>
                        <section class="tickets-section">身高不超过100cm儿童（不含4岁）免票，但是在看表演、吃自助餐时均无座位需与家长同座， 如需座位，请购买儿童票，敬请谅解。
身高100cm-140cm（不含140cm，不论岁数）， 按儿童票计算，需要购买幻多奇主题公园儿童票,儿童票不可单独预定，需和成人票一同预定。<br />1、请仔细阅读产的说明。。<br />2、剧场内表演不得进行拍照或录像，敬请遵守园内相关规定。
<br>3、门票一经出票成功，不得退改！</section>
                    </li>
                </ul>
            </div>
        </div>
        <div class="buy-details">
            <form class="buy-form" action="javascript:;">
                <p class="buy-title">订购信息</p>
                <li class="buy-list"><p>数量</p><div class="list-right"><span @click="reduce" class="jian noselect">-</span><input class="list-num" type="tel" :value="num" v-model="num" name="num"><span @click="add" class="jia noselect">+</span></div></li>
                <li class="buy-list"><p>姓名</p><div class="list-right"><input class="list-name" type="text" placeholder="请输入购票人姓名" name="username"></div></li>
                <li class="buy-list"><p>手机号码</p><div class="list-right"><input class="list-tel" type="tel" placeholder="请填写手机号码" name="usertel"></div></li>
                <li class="buy-list"><p>身份证号</p><div class="list-right"><input class="list-id" type="text" placeholder="请填写身份证号码" name="userid"></div></li>
            </form>
        </div>
        <div class="phonenum">
            <i class="iconfont">&#xe601;</i><span class="phonenum1">咨询热线</span><span class="phonenum2">0856-54848785</span>
        </div>
        <div class="pay-all">
            <span class="pay-1">总额：</span><span class="pay-num">100</span><span class="yuan">元</span><div class="weixin-pay"><i class="iconfont">&#xe6bb;</i><router-link class="router-span" to="/tickets/ticketsdetails/ticketsuccess">微信支付</router-link></div>
        </div>
    </div>
</template>
<script type="text/javascript">
import $ from 'webpack-zepto';
export default{
    data(){
        return{
            num:'0'
        }
    },
    mounted(){
        $('.tickets-ctrl').on('click',function(){
            $('.tickets-section').parent().siblings().children('.tickets-section').css('height','auto');
            var iAutoHeight = $('.tickets-section').height();
            $(this).children('.tickets-section').height(iAutoHeight).addClass('section-active').parent().siblings().children('.tickets-section').height(0).removeClass('section-active');
        })
    },
    methods:{
        add(){
            this.num++
        },
        reduce(){
            this.num--
        }
    }
}
</script>
<style type="text/css" lang="scss">
#ticketsdetails{
    margin-bottom:2.00rem;
    width:100%;
    overflow:hidden;
    margin-top:.80rem;
}
.banner{
    width:100%;
    height:2.10rem;
    img{
        width:100%;
        height:100%;
        vertical-align:middle;
    }
}
.details-bg{
    border-bottom:.01rem solid #a0a0a0;
    background:#fff;
    overflow:hidden;
    margin-bottom:.18rem;
    .details-content{
        background:#fff;
        width:6.70rem;
        margin:.40rem auto .15rem auto;
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
                box-shadow:-.10rem .05rem .08rem .00rem #ccc;
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
        .tickets-details{
            margin:.35rem 0;
            width:100%;
            .tickets-ctrl{
                transition:.4s all ease;
                margin-bottom:.17rem;
                .ctrl-title{
                    height:.62rem;
                    border-bottom:.01rem solid #a0a0a0;
                    color:#565656;
                    font-size:.32rem;
                    line-height:.62rem;
                    .arrow-down{
                        float:right;
                        font-size:.30rem;
                        margin-right:.10rem;
                        transition:all .3s ease;
                    }
                }
                .tickets-section{
                    overflow:hidden;
                    height:0;
                    transition:.4s all ease;
                    margin:.25rem .17rem;
                    font-size:.18rem;
                    color:#737373;
                    line-height:.3rem;
                }
            }
        }
    }
}
.buy-details{
    background:#fff;
    border-top:.01rem solid #a0a0a0;
    width:100%;
    .buy-form{
        display:block;
        width:6.70rem;
        margin:.05rem auto 0rem auto;
        border-bottom:.01rem solid #a0a0a0;
        padding-bottom:.64rem;
        .buy-title{
            text-align:center;
            color:#565656;
            font-size:.36rem;
            line-height:80px;
            margin-bottom:20px;
        }
        .buy-list{
            margin-top:0rem;
            display:flex;
            p{
                margin-top:.10rem;
                text-align-last:justify;
                width:1.53rem;
                color:#565656;
                font-size:.32rem;
            }
            .list-right{
                padding-left:.30rem;
                flex:1;
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
                    margin-top:-.9rem;
                }
                .jian{
                    margin-right:-.09rem;
                }
                .jia{
                    margin-left:-.09rem;
                }
                .list-num{
                    border:.01rem solid #898989;
                    height:.58rem;
                    width:1.04rem;
                    text-align:center;
                    color:#191919;
                    vertical-align:middle;
                    font-size:.32rem;
                    margin-top:-.9rem;
                }
                .list-name,.list-tel,.list-id{
                    vertical-align:middle;
                    width:4.06rem;
                    margin-top:-.9rem;
                    border-radius:.07rem;
                    padding-left:.25rem;
                    height:.60rem;
                    border:none;
                    background:#e9e9e9;
                    font-size:.32rem;
                    color:#191919;
                }
            }
        }
    }
}
.phonenum{
    border-bottom:.01rem solid #a0a0a0;
    background:#fff;
    width:100%;
    padding-bottom:.5rem;
    height:.85rem;
    line-height:.85rem;
    .iconfont{
        color:#82bd8b;
        font-size:.32rem;
        margin-right:.30rem;
        margin-left:.70rem;
    }
    span{
        margin-left:.30rem;
        font-size:.32rem;
    }
}
.pay-all{
    border-top:.01rem solid #a0a0a0;
    height:1.00rem;
    background:#d6d6d6;
    position:fixed;
    bottom:.77rem;
    width:100%;
    line-height:.50rem;
    .pay-1{
        font-size:.44rem;
        color:#060606;
        margin-left:.40rem;
    }
    .pay-num{
        font-size:.44rem;
        color:#e22f2f;
        margin-left:.20rem;
    }
    .yuan{
        font-size:.44rem;
        color:#060606;
        margin-left:.10rem;
    }
    .weixin-pay{
        background:#4ead5b;
        height:1.00rem;
        width:2.73rem;
        line-height:1.00rem;
        float:right;
        .iconfont{
            font-size:.42rem;
            color:#fff;
            margin-left:.27rem;
            line-height:1.00rem;
            height:1.00rem;
            float:left;
            display:block;
        }
        .router-span{
            display:block;
            float:left;
            font-size:.36rem;
            color:#fff;
            height:1.00rem;
            line-height:.90rem;
            margin-left:.15rem;
        }
    }
}
.section-active{

}
</style>