<template>
    <div id="singleroom">
        <ul class="room-list">
            <li class="weui-cell" v-for="item in house_list">
                <div class="weui-cell__hd">
                    <img :src="house_class_info.cover_img" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p class="room-name">{{item.name}}</p>
                    <a href="item in vr_url"><i class="iconfont">&#xe634;</i>全景看房</a>
                    <p>{{house_class_info.size}}平方米</p>
                    <p>{{breakfast}}</p>
                    <p>{{mahjong}}</p>
                </div>
                <div class="weui-cell__ft">
                    <p class="price">{{house_class_info.price}}元起</p>
                    <router-link class="reservation-btn" href="javascript:;" :to="'/hotel/room/RoomReservation'+item.id">立即预定</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            house_list:'',
            house_class_info:'',
            breakfast:'',
            mahjong:''
        }
    },
    created(){
        this.getData()
    },
    watch:{
       '$route':'getData'
    },
    mounted(){
        if(this.house_class_info.breakfast == 1){
            this.breakfast = '含早餐'
        }else{
            this.breakfast = '无早餐'
        };
        if(this.house_class_info.mahjong == 1){
            this.mahjong = '内设麻将机'
        }else{
            this.mahjong = '无麻将机'
        }
    },
    methods:{
        getData(){
            this.$http.post('http://m.dev.hotel.com/HotelReserve/houseList',
            qs.stringify({
                house_class_id:this.$route.params.id,
                hotel_id:this.$route.params.hotel_id
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.house_list = res.data.data.house_list,
                    this.house_class_info = res.data.data.house_class_info
                    // console.log( res.data.data);
                }else{
                    alert(res.data.msg)
                }
                },(error)=>{
                alert('home.vue'+error.status);
            });
        }
    }
}
</script>
<style type="text/css">
@import '../../static/css/weui.min.css';
</style>
<style type="text/css" scoped="" lang="scss">
#singleroom{
    .room-list{
        background:#fff;
        border:.01rem solid #d2d2d2;
        .weui-cell{
            padding:.23rem .29rem;
            border-bottom:.01rem solid #dcdcdc;
            .weui-cell__hd{
                img{
                    width:2.09rem;
                    height:2.09rem;
                    vertical-align:middle;
                    display:block;
                }
            }
            .weui-cell__bd{
                .room-name{
                    color:#3b3b3b;
                    font-size:.30rem;
                    margin-left:.30rem;
                    margin-top:.10rem;
                }
                a{
                    margin-top:.20rem;
                    border:.01rem solid #24b23b;
                    color:#24b23b;
                    text-align:center;
                    font-size:.20rem;
                    padding-right:.10rem;
                    border-radius:.20rem;
                    margin-left:.19rem;
                    width:1.65rem;
                    line-height:.32rem;
                    height:.32rem;
                    display:block;
                    margin-bottom:.10rem;
                    i{
                        color:#24b23b;
                        font-size:.26rem;
                        vertical-align:middle;
                    }
                }
                p{
                    margin-left:.30rem;
                    color:#838383;
                    font-size:.22rem;
                    line-height:.35rem;
                }
            }
            .weui-cell__ft{
                .price{
                    color:#c91f1f;
                    font-size:.40rem;
                }
                .reservation-btn{
                    font-size:.33rem;
                    color:#fff;
                    background:linear-gradient(#3eb03b,#2ab95f);
                    display:block;
                    width:1.67rem;
                    height:.54rem;
                    line-height:.54rem;
                    text-align:center;
                    border-radius:.09rem;
                    margin-top:.90rem;
                }
            }
        }
    }
}
</style>