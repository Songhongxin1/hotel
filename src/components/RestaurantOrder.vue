<template>
    <div id="restaurantorder">
        <div class="banner">
            <img src="../../static/images/banner4.jpg" alt="">
        </div>
        <div class="content">
            <form action="javascript:;">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">就餐方式</label>
                    </div>
                    <div class="weui-cell__bd">
                        <select name="dining_type" v-model="dining_type" class="weui-select no-radius">
                            <option value="1"  selected>大厅</option>
                        </select>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">姓名</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input type="text" class="weui-input" v-model="user_name" name="user_name" placeholder="请填写联系人">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">电话</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input type="tel" class="weui-input" v-model="user_tel" name="user_tel" placeholder="联系电话">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">预约时间</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input type="date" class="weui-input" v-model="reserve_time" name="reserve_time" value="12月08号12:45:00">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">就餐人数</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input type="text" class="weui-input" v-model="dining_user_num" name="dining_user_num" value="8人" />
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="">预定桌数</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input type="text" class="weui-input" v-model="tables_num" name="tables_num" value="1桌">
                    </div>
                </div>
            </form>
            <div class="order-details">
                <p class="details-title">订单明细</p>
                <ul class="details-box">
                    <li class="details-list" v-for="item in buy_list"><span>{{item.name}}</span>/<span>￥{{item.price}}</span><p>(X{{item.num}})</p></li>
                </ul>
            </div>
            <ul class="conclusion">
                <li><p>总额：<span class="red">￥{{value}}</span></p><p class="conclusion-right">当前积分抵扣：<span>{{user_score}}元</span></p></li>
                <li><p>结算金额：<span class="red">￥{{value_all}}</span></p><p class="conclusion-right"><input type="checkbox" name="">确认抵扣</p></li>
            </ul>
            <div class="content-bottom">
                <a @click="onSubmit" href="javascript:;"><img src="../../static/images/weixin.png" alt="">立即支付</a>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
    @import '../../static/css/weui.min.css';
</style>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            user_score:'',
            value:'',
            buy_list:'',
            value_all:'',

            dining_type:'',
            user_name:'',
            user_tel:'',
            reserve_time:'',
            dining_user_num:'',
            tables_num:'',

            order_id:''
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
                this.user_score = (res.data.data.user_score)/100;
                this.buy_list = res.data.data.reserve_info.buy_list
                this.value = res.data.data.value
                this.value_all = this.value - this.user_score
            }else{
                alert(res.data.msg)
            }
        },(error=>{
            alert('请求失败，请刷新页面')
        }))
    },
    methods:{
        onSubmit(){
            if(this.enter_time == ''){
                alert('请输入入住时间')
            }else if(this.leave_time == ''){
                alert('请输入离店时间')
            }else if(this.enter_user == ''){
                alert('请输入入住人姓名')
            }else if(this.user_tel == ''){
                alert('请输入入住人电话')
            }
            else{
                this.$http.post('http://m.dev.hotel.com/RestaurantReserve/doReserve',
                qs.stringify({
                    restaurant_id:this.$route.params.restaurant_id,
                    dining_type:this.dining_type,
                    user_tel:this.user_tel,
                    user_name:this.user_name,
                    reserve_time:this.reserve_time,
                    dining_user_num:this.dining_user_num,
                    tables_num:this.tables_num,
                    lose_score:this.user_score*100
                }),
                {
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}
                })
                .then((res)=>{
                    if(res.data.status == 0){
                        this.order_id = res.data.data;
                        this.$router.push('/restaurant/menu/RestaurantTransition/RestaurantOrder/RestaurantSuccess'+this.order_id)
                    }else{
                        alert(res.data.msg)
                    }
                    },(error)=>{
                    alert('请求失败，请刷新页面');
                });
            }
        }
    }
}
</script>
<style type="text/css" lang="scss">
#restaurantorder{
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
    .content{
        margin:.17rem .17rem;
        background:#fff;
        form{
            border-bottom:.01rem solid #838886;
            padding-bottom:.10rem;
            .weui-cell{
                .weui-cell__hd{
                    width:1.40rem;
                    color:#585858;
                    font-size:.30rem;
                    text-align:right;
                    .weui-label{
                        width:100%;
                        height:100%;
                    }
                }
                .weui-cell__bd{
                    color:#585858;
                    font-size:.30rem;
                    margin-left:.30rem;
                    padding-right:.20rem;
                    .weui-input,.weui-select{
                        background:#f4f4f4;
                        border-radius:.08rem;
                        height:.51rem;
                        padding-left:.15rem;
                    }
                    .no-radius{
                        line-height:.45rem;
                        border-top-right-radius:0;
                        border-bottom-right-radius:0;
                    }
                }
            }
        }
        .order-details{
            padding:0 .30rem;
            border-bottom:.01rem solid #838886;
            .details-title{
                font-size:.30rem;
                color:#585858;
                line-height:.70rem;
            }
            .details-box{
                margin-top:.10rem;
                margin-bottom:.50rem;
                .details-list{
                    color:#38b244;
                    font-size:.25rem;
                    border-bottom:.01rem solid #a0a0a0;
                    p{
                        float:right;
                    }
                }
            }
        }
        .conclusion{
            padding:.20rem .30rem;
            border-bottom:.01rem solid #838886;
            li{
                line-height:.50rem;
                overflow:hidden;
                font-size:.30rem;
                color:#585858;
                .red{
                    color:#db3434;
                }
                .conclusion-right{
                    float:right;
                    input{
                        margin-right:.10rem;
                    }
                }
                p{
                    float:left;
                }
            }
        }
        .content-bottom{
            padding:.40rem .30rem .60rem .30rem;
            overflow:hidden;
            a{
                border-radius:.08rem;
                width:2.48rem;
                height:.76rem;
                color:#fff;
                font-size:.36rem;
                text-align:center;
                line-height:.76rem;
                float:right;
                background:#38b245;
                img{
                    margin-right:.10rem;
                    width:.57rem;
                    height:.51rem;
                    vertical-align:middle;
                }
            }
        }
    }
}
</style>