<template>
    <div id="restaurant">
        <div class="banner">
            <img :src="restaurant_info.cover_img" alt="">
        </div>
        <div class="restaurant-introduce">
            <p class="introduce-title">餐厅介绍</p>
            <p class="introduce-content">{{restaurant_info.introduce}}</p>
        </div>
        <div class="restaurant-features">
            <p class="features-title">餐厅特色</p>
        </div>
        <div class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper">
                <div v-for="item in special" class="swiper-slide">
                    <img :src="item.cover_img" alt="">
                    <p class="swiper-name">{{item.name}}</p>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
        </div>
        <ul class="business-time">
            <img src="../../static/images/time.png" alt="">
            <li><p>餐厅营业时间</p></li>
            <li v-for="item in open_time"><p>{{item.name}}{{item.start_time}}-{{item.over_time}}</p></li>
        </ul>
        <div class="address"><img src="../../static/images/address.png" alt=""><p>地址：{{restaurant_info.address}}</p></div>
        <a :href="restaurant_info.vr_url" class="VR"><img src="../../static/images/vr_2.png" alt=""><p>全景浏览</p></a>
        <div class="meal-btn">
            <router-link :to="'/restaurant/menu/menulist'+restaurant_info.id+dish_class_id">立即订餐</router-link>
        </div>
    </div>
</template>
<style>
</style>
<script type="text/javascript">
import "../../static/css/swiper.css";
import Swiper from 'swiper';
export default{
    data(){
        return{
            open_time:'',
            restaurant_info:'',
            special:'',
            dish_class_id:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/RestaurantReserve/restaurantInfo',
        ).then((res)=>{
            if(res.data.status == 0){
                this.open_time = res.data.data.open_time;
                this.restaurant_info = res.data.data.restaurant_info;
                this.special = res.data.data.special;
                this.dish_class_id = res.data.data.dish_class_id;
                console.log(this.dish_class)
            }else{
                alert(res.data.msg)
            }
            },(error)=>{
            alert('数据请求失败，请刷新页面');
        });
    },
    mounted(){
         var mySwiper = new Swiper('.swiper-container',{
            slidesPerView: 3,
            autoplay: 3000,
            spaceBetween : 10,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            loop:true,
        })
    }
}
</script>
<style type="text/css" lang="scss">
#restaurant{
    margin-bottom:.90rem;
    width:100%;
    overflow:hidden;
    margin-top:.80rem;
    .banner{
        width:100%;
        height:2.480rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .restaurant-introduce{
        margin-top:.13rem;
        background:#fff;
        border:.01rem solid #d2d2d2;
        .introduce-title{
            color:#272727;
            font-size:.34rem;
            padding-left:.42rem;
            line-height:.74rem;
            height:.74rem;
            border-bottom:.01rem solid #d2d2d2;
        }
        .introduce-content{
            padding:.15rem .50rem .20rem .50rem;
            font-size:.24rem;
            color:#272727;
            line-height:.42rem;
            text-align:justify;
        }
    }
    .restaurant-features{
        margin-top:.13rem;
        background:#fff;
        border:.01rem solid #d2d2d2;
        .features-title{
            color:#272727;
            font-size:.34rem;
            padding-left:.42rem;
            line-height:.74rem;
            height:.74rem;
        }
    }
    .swiper-container{
        background:#fff;
        padding:.32rem 0;
        border-left:.01rem solid #d2d2d2;
        border-right:.01rem solid #d2d2d2;
        .swiper-wrapper{
            height:100%;
            .swiper-slide{
                height:1.76rem;
                overflow:hidden;
                position:relative;
                border-radius:5px;
                img{
                    border-radius:.07rem;
                    width:100%;
                    height:1.76rem;
                }
                .swiper-name{
                    position:absolute;
                    bottom:0;
                    font-size:.26rem;
                    color:#fff;
                    height:.43rem;
                    line-height:.43rem;
                    text-align:center;
                    width:100%;
                    background:rgba(50,50,50,.4)
                }
            }
        }
    }
    .business-time{
        padding:.20rem 0;
        border:.01rem solid #d2d2d2;
        background:#fff;
        li{
            padding-left:1.40rem;
            line-height:.40rem;
            margin-bottom:.05rem;
            height:.50rem;
            p{
                color:#272727;
                font-size:.30rem;
            }
        }
        img{
            width:.35rem;
            height:.37rem;
            float:left;
            margin-top:.02rem;
            margin-left:.58rem;
        }
    }
    .address{
        background:#fff;
        border:.01rem solid #d2d2d2;
        border-top:none;
        img{
            margin-left:.58rem;
            margin-top:.25rem;
            width:.42rem;
            height:.42rem;
            vertical-align:middle;
            float:left;
        }
        p{
            padding-left:1.40rem;
            line-height:.40rem;
            margin-bottom:.05rem;
            color:#272727;
            height:.98rem;
            line-height:.92rem;
            font-size:.30rem;
        }
    }
    .VR{
        background:#fff;
        border:.01rem solid #d2d2d2;
        border-top:none;
        display:block;
        img{
            margin-left:.58rem;
            margin-top:.25rem;
            width:.42rem;
            height:.42rem;
            vertical-align:middle;
            float:left;
        }
        p{
            padding-left:1.40rem;
            line-height:.40rem;
            margin-bottom:.05rem;
            color:#272727;
            height:.98rem;
            line-height:.92rem;
            font-size:.30rem;
        }
    }
    .meal-btn{
        background:#fff;
        border:.01rem solid #d2d2d2;
        border-top:none;
        height:1.45rem;
        a{
            width:1.88rem;
            height:.69rem;
            line-height:.69rem;
            text-align:center;
            font-size:.34rem;
            color:#fff;
            border-radius:.08rem;
            background:linear-gradient(#4ccd24,#06862c);
            display:block;
            float:right;
            margin-top:.35rem;
            margin-right:.25rem;
        }
    }
}
.swiper-pagination-bullet{
    width:.15rem;
    height:.15rem;
}
.swiper-pagination-bullets{
    bottom:.15rem!important;
}
</style>