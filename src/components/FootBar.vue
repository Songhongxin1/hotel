<template>
    <div id="footbar">
        <ul class="footnav">
            <li class="nav-list">
                <a class="nav-btn" href="javascript:;">
                    <span class="iconfont nav-txt">&#xe607;旅游服务</span>
                </a>
                <ul class="link-list">
                    <li><router-link class="footlink" to="/tickets">购买门票</router-link></li>
                    <li><router-link class="footlink" to="/hotel">酒店预定</router-link></li>
                    <li><router-link class="footlink" to="/restaurant">餐厅预定</router-link></li>
                    <li><router-link class="footlink" to="/lease">租赁服务</router-link></li>
                    <li><router-link class="footlink noborder" to="/news">新闻咨询</router-link></li>
                    <img class="sanjiao" src="../../static/images/sanjiao.png" alt="">
                </ul>
            </li>
            <li class="nav-list">
                <a class="nav-btn" href="javascript:;">
                    <span class="iconfont nav-txt">&#xe607;全景VR</span>
                </a>
                <ul class="link-list" style="top:-2.43rem;">
                    <li><router-link class="footlink" to="/VR">智能导航</router-link></li>
                    <li><router-link class="footlink" to="/VR">全景酒店</router-link></li>
                    <li><router-link class="footlink noborder" to="/VR">全景餐厅</router-link></li>
                    <img class="sanjiao" src="../../static/images/sanjiao.png" alt="">
                </ul>
            </li>
            <li class="nav-list">
                <a class="nav-btn" href="javascript:;">
                    <span class="iconfont nav-txt">&#xe607;个人中心</span>
                </a>
                <ul class="link-list" style="top:-1.72rem;">
                    <li><router-link class="footlink" to="/WIFI">免费WIFi</router-link></li>
                    <li><router-link class="footlink noborder" to="/user">我的订单</router-link></li>
                    <img class="sanjiao" src="../../static/images/sanjiao.png" alt="">
                </ul>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import $ from 'webpack-zepto'
export default{
    data(){
        return{
        }
    },
    mounted(){
        var $oNavList  = $('.nav-list'),
            $oLinkList = $('.link-list')
            $oNavList.on('click',function(){
            if(!$(this).children('.link-list').hasClass('isshow')){
                $(this).children('.link-list').addClass('isshow').parent().siblings().children('.link-list').removeClass('isshow');
            }else{
                $oLinkList.removeClass('isshow');
            }
            $('#footbar').siblings().on('click',function(){
                $oLinkList.removeClass('isshow');
            })
        })
    }
}
</script>
<style lang="scss"type="text/css">
#footbar{
    z-index:2;
    background:#fafafa;
    width:100%;
    height:.77rem;
    position:fixed;
    bottom:0;
    border-top:0.01rem solid #e1e1e1;
    .footnav{
        width:100%;
        height:0.77rem;
        display:flex;
        bottom:0;
        .nav-list{
            flex:1;
            border:0.01rem solid #cecece;
            position:relative;
            .nav-btn{
                width:100%;
                height:100%;
                display:block;
                .nav-txt{
                    line-height:0.77rem;
                    color:#4d4d4d;
                    display:block;
                    text-align:center;
                    font-size:0.30rem;
                }
            }
            .link-list{
                display:none;
                position:absolute;
                top:-3.85rem;
                left:0.45rem;
                width:1.57rem;
                background:#fafafa;
                border:0.02rem solid #e5e5e5;
                border-radius:0.07rem;
                li{
                    padding:0 0.17rem 0 0.17rem;
                    .footlink{
                        border-bottom:0.01rem solid #bfbebe;
                        display:block;
                        line-height:0.70rem;
                        height:0.70rem;
                        font-size:0.25rem;
                        color:#3d3d3d;
                        text-align:center;
                    }
                }
                .sanjiao{
                    width:0.14rem;
                    height:0.21rem;
                    position:absolute;
                    bottom:-0.20rem;
                    z-index:2;
                    left:0.71rem;
                }
            }
        }
    }
}
.isshow{
    display:block!important;
}
</style>