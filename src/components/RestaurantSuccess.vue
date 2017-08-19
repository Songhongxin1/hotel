<template>
    <div id="restaurantsuccess">
        <div class="banner">
            <img src="../../static/images/banner4.jpg" alt="">
        </div>
        <div class="success-top">
            <i class="iconfont">&#xe66e;</i>
            <p>订单状态：已付款</p>
        </div>
        <ul class="success-details">
            <li><span>订单号:</span><p>{{order.identifier}}</p></li>
            <li><span>预约时间:</span><p>{{restaurant_reserve.reserve_time}}</p></li>
            <li><span>就餐人数:</span><p>{{restaurant_reserve.dining_user_num}}人</p></li>
            <li><span>预定桌数:</span><p>{{restaurant_reserve.tables_num}}桌</p></li>
            <li><span>订单价格:</span><p>{{order.value}}</p><span class="yuan">元</span></li>
            <li><span>获得积分:</span><p>{{order.get_score}}积分</p></li>
        </ul>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            order:'',
            restaurant_reserve:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/RestaurantReserve/reserveInfo',
        qs.stringify({
            id:this.$route.params.order_id,
        }),
        {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then((res)=>{
            if(res.data.status == 0){
                this.order = res.data.data.order;
                this.restaurant_reserve = res.data.data.restaurant_reserve
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
#restaurantsuccess{
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
        background:#fff;
        padding:.70rem .70rem 1.50rem .70rem;
        li{
            border-bottom:.01rem solid #e0e0e0;
            font-size:.34rem;
            color:#5e5e5e;
            overflow:hidden;
            line-height:.75rem;
            height:.75rem;
            span{
                float:left;
                margin-left:1.00rem;
            }
            p{
                float:left;
                margin-left:.30rem;
                overflow:hidden;
            }
            .yuan{
                margin-left:.08rem;
            }
        }
    }
}
</style>