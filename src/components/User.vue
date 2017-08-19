<template>
    <div id="user">
        <div class="banner">
            <img src="../../static/images/userbanner.jpg"alt="">
        </div>
        <div class="user-head">
            <div class="head-radius">
                <img src="../../static/images/head.jpg" alt="">
                <span>+</span>
            </div>
            <p class="username">用户名:<span>BGH542</span></p>
        </div>
        <ul class="user-box">
            <li class="user-list">
                <router-link to="/user/TicketsOrder" href="javascript:;">
                    <img src="../../static/images/ticket.png" alt="">
                    <p>我的门票</p>
                </router-link>
            </li>
            <li class="user-list">
                <router-link to="/user/HotelOrder" href="javascript:;">
                    <img src="../../static/images/hotel.png" alt="">
                    <p>酒店订单</p>
                </router-link>
            </li>
            <li class="user-list">
                <router-link to="/user/UserRestaurantOrder" href="javascript:;">
                    <img src="../../static/images/hotel.png" alt="">
                    <p>餐厅订单</p>
                </router-link>
            </li>
            <li class="user-list">
                <router-link to="/user/LeaseOrder" href="javascript:;">
                    <img src="../../static/images/lease.png" alt="">
                    <p>租赁订单</p>
                </router-link>
            </li>
            <li class="user-list">
                <router-link to="/user/score" href="javascript:;">
                    <img src="../../static/images/score.png" alt="">
                    <p>我的积分</p>
                </router-link>
            </li>
            <li class="user-list">
                <a href="javascript:;">
                    <img src="../../static/images/jianshezhong.png" alt="">
                    <p>建设中...</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
export default{

}
</script>
<style type="text/css" lang="scss">
#user{
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
        border-bottom:.01rem solid #bfbfbf;
        margin:0 .42rem;
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
    .user-box{
        padding-left:.40rem;
        padding-bottom:.80rem;
        overflow:hidden;
        .user-list{
            margin-right:.60rem;
            width:1.72rem;
            height:1.72rem;
            border-radius:.10rem;
            background:#58c152;
            float:left;
            margin-top:.35rem;
            a{
                display:block;
                img{
                    vertical-align:middle;
                    width:.70rem;
                    height:.70rem;
                    display:block;
                    margin:.35rem auto .20rem auto;
                }
                p{
                    color:#fff;
                    text-align:center;
                    font-size:.25rem;
                }
            }
        }
    }
}
</style>