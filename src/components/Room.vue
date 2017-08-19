<template>
    <div id="room">
        <div class="banner">
            <img src="../../static/images/li2.jpg" alt="">
        </div>
        <ul class="room-select">
            <li class="room-select-list" v-for="item in house_Class"><router-link :to="'/hotel/room/singleroom'+$route.params.hotel_id+item.id">{{item.name}}</router-link></li>
        </ul>
            <!-- {{$route.params.id}} -->
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            house_Class:'',
            house_list:'',
            house_class_info:'',
            breakfast:'',
            mahjong:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/HotelReserve/houseClass',
            ).then((res)=>{
            if(res.data.status == 0){
                this.house_Class = res.data.data.house_class
            }else{
                alert(res.data.msg)
            }
            },(error)=>{
            alert('请求失败，请刷新页面');
        });

    }
}
</script>
<style type="text/css" lang="scss">
#room{
    margin-bottom:.90rem;
    width:100%;
    overflow:hidden;
    margin-top:.80rem;
    .banner{
        width:100%;
        height:2.49rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .room-select{
        background:#f4f4f4;
        border:.01rem solid #bfbfbf;
        display:flex;
        height:.80rem;
        .room-select-list{
            width:100%;
            height:.80rem;
            float:left;
            flex:1;
            text-align:center;
            a{
                display:block;
                height:.50rem;
                line-height:.50rem;
                border-right:.01rem solid #a0a0a0;
                width:100%;
                margin-top:.18rem;
                color:#5e5e5e;
                font-size:.28rem;
            }
        }
    }
}
</style>