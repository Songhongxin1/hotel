<template>
    <div id="restauranttransition">
        <div class="banner">
            <img src="../../static/images/banner4.jpg" alt="">
        </div>
        <div class="chosen">
            <div class="chosen-title"><p><span class="iconfont">&#xe65c;</span>已选菜品</p></div>
            <ul class="chosen-box">
                <li class="chosen-list" v-for="item in buy_list">
                    <div class="list-left">
                        <img :src="item.cover_img" alt="">
                    </div>
                    <div class="list-right">
                        <p>{{item.name}}</p>
                        <p>X{{item.num}}</p>
                        <span>￥{{item.price}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="all-price"><p>总额<span>￥{{value}}</span></p></div>
        <div class="btn-box">
            <a class="change-menu" @click="$router.go(-1)" href="javascript:;">修改菜品</a>
            <router-link class="sure-menu" :to="'/restaurant/menu/RestaurantTransition/RestaurantOrder'+$route.params.restaurant_id">确认订单</router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            reserve_info:'',
            buy_list:'',
            value:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/RestaurantReserve/reserve',
        qs.stringify({
            restaurant_id:this.$route.params.restaurant_id,
        }),
        {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then((res)=>{
            if(res.data.status == 0){
                this.user_score = res.data.data.user_score;
                this.reserve_info = res.data.data.reserve_info
                this.buy_list = res.data.data.reserve_info.buy_list
                this.value = res.data.data.value
            }else{
                alert(res.data.msg)
            }
        },(error=>{
            alert('请求失败，请刷新页面')
        }))
    }
}
</script>
<style type="text/css" lang="scss">
#restauranttransition{
    margin-bottom:.90rem;
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
    .chosen{
        padding:.20rem .17rem 0rem .17rem;
        .chosen-title{
            background:#fff;
            height:.69rem;
            p{
                font-size:#585858;
                font-size:.24rem;
                line-height:.69rem;
                .iconfont{
                    margin-right:.15rem;
                    color:#3ab243;
                    line-height:.69rem;
                    margin-left:.19rem;
                    vertical-align:middle;
                    font-size:.50rem;
                }
            }
        }
        .chosen-box{
            background:#fff;
            overflow:hidden;
            .chosen-list{
                padding:.11rem .21rem;
                background:#e2e9ec;
                margin-bottom:.06rem;
                overflow:hidden;
                .list-left{
                    float:left;
                    img{
                        height:1.11rem;
                        width:1.11rem;
                    }
                }
                .list-right{
                    position:relative;
                    overflow:hidden;
                    padding-left:.13rem;
                    p{
                        color:#585858;
                        font-size:.24rem;
                        margin-top:.03rem;
                    }
                    span{
                        position:absolute;
                        right:0rem;
                        top:0rem;
                        color:#c43030;
                        font-size:.30rem;
                    }
                }
            }
        }
        .more{
            background:#fff;
            border-bottom:.01rem dashed #838886;
            overflow:hidden;
            padding-bottom:.20rem;
            .more-btn{
                border-radius:.04rem;
                border:.01rem solid #838886;
                width:1.71rem;
                height:.41rem;
                line-height:.41rem;
                text-align:center;
                display:block;
                color:#2a2a2a;
                font-size:.26rem;
                margin:.20rem auto;
            }
        }
    }
    .all-price{
        margin:0 .17rem;
        background:#fff;
        overflow:hidden;
        p{
            color:#585858;
            font-size:.40rem;
            line-height:.80rem;
            float:right;
            margin-right:.20rem;
            span{
                color:#db3434;
            }
        }
    }
    .btn-box{
        background:#fff;
        margin:0 .17rem;
        display:flex;
        padding:.40rem .90rem;
        a{
            display:block;
            flex:1;
            height:.76rem;
            border-radius:.08rem;
            line-height:.76rem;
            text-align:center;
            font-size:.40rem;
            color:#fff;
        }
        .change-menu{
            background:linear-gradient(#f0e07d,#e9b143);
        }
        .sure-menu{
            margin-left:.60rem;
            background:linear-gradient(#3eb03b,#2ab95f)
        }
    }
}
</style>