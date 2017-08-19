<template>
    <div id="hotel">
        <div class="banner">
            <img :src="this.hotel_info.cover_img" alt="">
        </div>
        <div class="hotel-introduce">
            <p class="introduce-title">酒店介绍</p>
            <p class="introduce-txt">{{hotel_info.introduce}}</p>
        </div>
        <div class="hotel-features">
            <p class="features-title">酒店特色<span class="title-right">{{hotel_info.special}}</span></p>
            <ul class="features-box">
                <li class="features-list" v-for="item in house_class">
                    <router-link :to="'/hotel/room/singleroom'+item.id+hotel_info.id">
                        <div class="img-box">
                            <img :src="item.cover_img" alt="" />
                        </div>
                        <p>{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
            <ul class="hotel-data">
                <li class="data-list">
                    <img src="../../static/images/icon1.png"alt="">
                    <p>地址：{{this.hotel_info.address}}</p>
                </li>
                <li class="data-list">
                    <img src="../../static/images/icon2.png"alt="">
                    <p>全景看房</p>
                    <span class="iconfont">&#xe605;</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
export default{
    data(){
        return{
            hotel_info:'',
            house_class:''
        }
    },
    created(){
        this.$http.get('http://m.dev.hotel.com/HotelReserve/hotelInfo').then((res)=>{
            if(res.data.status == 0){
                this.hotel_info = res.data.data.hotel_info
                this.house_class = res.data.data.house_class
            }else{
                alert(res.data.msg)
            }
        },(error=>{
            alert('请求失败，请刷新页面')
        }))
    },
}
</script>
<style type="text/css" lang="scss">
#hotel{
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
    .hotel-introduce{
        background:#fff;
        margin-top:.16rem;
        border:.01rem solid #d2d2d2;
        .introduce-title{
            padding-left:.43rem;
            padding-right:.43rem;
            height:.74rem;
            color:#272727;
            font-size:.34rem;
            line-height:.74rem;
            border-bottom:.01rem solid #d2d2d2;
        }
        .introduce-txt{
            padding-left:.47rem;
            padding-right:.47rem;
            font-size:.24rem;
            color:#272727;
            line-height:.40rem;
            margin:.20rem 0;
            text-align:justify;
        }
    }
    .hotel-features{
        background:#fff;
        margin-top:.16rem;
        border:.01rem solid #d2d2d2;
        .features-title{
            padding-left:.43rem;
            padding-right:.43rem;
            height:.74rem;
            color:#272727;
            font-size:.34rem;
            line-height:.74rem;
            border-bottom:.01rem solid #d2d2d2;
            display:flex;
            span{
                white-space:nowrap;
                text-overflow:ellipsis;
                -o-text-overflow:ellipsis;
                overflow:hidden;
                flex:1;
                margin-left:.5rem;
                float:right;
                color:#272727;
                font-size:.24rem;
            }
        }
        .features-box{
            overflow:hidden;
            padding-left:.57rem;
            margin:.17rem 0;
            width:90%;
            .features-list{
                margin-left:.18rem;
                margin-right:.5rem;
                float:left;
                width:2.67rem;
                .img-box{
                    width:2.61rem;
                    height:2.61rem;
                    padding:.02rem;
                    border:.01rem dashed #2cbc5b;
                    img{
                        width:2.59rem;
                        height:2.59rem;
                        vertical-align:middle;
                        border:.01rem solid #edd5cb;
                    }
                }
                p{
                    text-align:center;
                    height:.61rem;
                    line-height:.61rem;
                    font-size:.32rem;
                    color:#272727;
                }
            }
        }
        .hotel-data{
            .data-list{
                display:flex;
                border-top:.01rem solid #d2d2d2;
                img{
                    width:.42rem;
                    height:.42rem;
                    vertical-align:middle;
                    margin:0.3rem .30rem 0 .50rem;
                    float:left;
                }
                p{
                    display:block;
                    flex:1;
                    line-height:.99rem;
                    font-size:.30rem;
                    color:#272727;
                    overflow:hidden;
                }
                .iconfont{
                    font-size:.30rem;
                    color:#c6c6c6;
                    float:right;
                    display:inline-block;
                    line-height:.99rem;
                    margin-right:.50rem;
                }
            }
        }
    }
}
</style>