<template>
    <div id="tickets">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <div class="content-box">
            <p class="content-title">
                <img class="yun-1" src="../../static/images/yun-1.png" alt="">九龙山票务<img class="yun-2" src="../../static/images/yun-2.png" alt="">
            </p>
            <ul class="content-list noselect">
                <li class="content-li" v-for="item in ticket_list">
                    <router-link href="javascript:;" :to="'/tickets/ticketsdetails'+item.id" class="content-li-a">
                        <img :src="item.cover_img">
                        <p class="right-box">
                            <span class="tickets-price">￥{{item.price}}</span>
                            <span class="tickets-txt">{{item.name}}</span>
                        </p>
                    </router-link>
                    <p class="cicle"></p>
                <p class="space-txt">{{item.remark}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
export default{
    data(){
        return{
            ticket_list:''
        }
    },
    created(){

        this.$http.get('http://m.dev.hotel.com/AdmissionTicketReserve/admissionTicketList').then((res)=>{
            // console.log(JSON.stringify(res.data.data,null,4))
            if(res.data.status == 0){
                // console.log(res.data)
                this.ticket_list = res.data.data.ticket_list
                console.log( res.data.data);
            }else{
                alert(res.data.msg)
            }
            // this.arr=res.data;
            // this.arr = JSON.parse(res.data);
            // console.log(this.arr)
            },(error)=>{
            alert('home.vue'+error.status);
            });
    }
}
</script>
<style type="text/css" lang="scss">
#tickets{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
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
.content-box{
    .content-title{
        color:#387a41;
        font-size:.40rem;
        width:100%;
        text-align:center;
        line-height:.40rem;
        margin-top:.25rem;
        img{
            width:.84rem;
            height:.44rem;
            vertical-align:bottom;
        }
    }
    .content-list{
        padding:0 .4rem;
        margin:.40rem 0 .15rem 0;
        .content-li{
            width:100%;
            margin-bottom:.64rem;
            height:2.15rem;
            position:relative;
            .content-li-a{
                display:flex;
                padding-top:.16rem;
                height:1.99rem;
                width:100%;
                background:#6ac977;
                border:.02rem solid #d4d4d4;
                box-shadow:-.10rem .05rem .08rem 0rem #ccc;
                img{
                    width:60%;
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
                        font-size:.30rem;
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
                background:#ebebeb;
                border-left:.02rem solid #d4d4d4;
                border-radius:50%;
            }
        }
        .space-txt{
            min-height:.54rem;
            line-height:.54rem;
            color:#585858;
            font-size:.29rem;
        }
    }
}
</style>