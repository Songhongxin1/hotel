<template>
    <div id="menulist">
        <ul class="menu-box">
            <li class="menu-list" v-for="(item,$index) in dish_list">
                <div class="list-left">
                    <img :src="item.cover_img" alt="">
                </div>
                <div class="list-right">
                    <p class="menu-name">{{item.name}}</p>
                    <span class="new">{{item.is_recommend}}</span>
                    <div class="bottom-box">
                        <p class="menu-price">￥{{item.price}}/份</p>
                        <div class="menu-num">
                            <span @click="reduce($index)" :class="reduce_class">-</span>
                            <span class="num-txt">{{item.num}}</span>
                            <span @click="add($index)" class="add">+</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="menu-footer">
            <span class="iconfont">&#xe603;</span>
            <p class="pay-num">￥{{value}}</p>
            <router-link :to="'/restaurant/menu/RestaurantTransition'+$route.params.restaurant_id">提交结算</router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
// import $ from 'webpack-zepto'
export default{
    data(){
        return{
            index:'',
            num:'',
            reduce_class:'',
            restaurant_id:'',
            dish_id:'',
            dish_list:'',
            is_recommend:'',
            new_class:'',

            value:''
        }
    },
    methods:{
        reduce(index){
            this.$http.post('http://m.dev.hotel.com/RestaurantReserve/delDish',
            qs.stringify({
                restaurant_id:this.$route.params.restaurant_id,
                dish_id:this.dish_list[index].id,
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.value = res.data.data.value
                    console.log(this.value)
                    var num = this.dish_list[index].num;
                    this.dish_list[index].num--;
                    this.index = index
                }else{
                    alert(res.data.msg)
                }
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        },
        add(index){
            this.$http.post('http://m.dev.hotel.com/RestaurantReserve/addDish',
            qs.stringify({
                restaurant_id:this.$route.params.restaurant_id,
                dish_id:this.dish_list[index].id
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.value = res.data.data.value
                    var num = this.dish_list[index].num;
                    this.dish_list[index].num++;
                    this.index = index
                }else{
                    alert(res.data.msg)
                }
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        },
        getData(){
            this.$http.post('http://m.dev.hotel.com/RestaurantReserve/dishList',
            qs.stringify({
                restaurant_id:this.$route.params.restaurant_id,
                class_id:this.$route.params.dish_id
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.value = res.data.data.value
                    this.dish_list = res.data.data.dish_list;
                    this.reduce_class = 'reduce'
                    // if(this.dish_list.is_recommend == "1"){
                    //     this.is_recommend = '推荐'
                    //     this.new_class = 'new'
                    // }else{
                    //     this.new_class = 'new_class'
                    // }
                }else{
                    alert(res.data.msg)
                }
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        },
    },
    watch:{
       '$route':'getData'
    },
    created(){
        this.getData()
    },
}
</script>
<style type="text/css" lang="scss">
html{
    height:100%;
    body{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        height:100%;
        #app{
            #menu{
                .menu-content{
                    #menulist{
                        overflow:hidden;
                        height:100%;
                        .menu-box{
                            margin-bottom:.5rem;
                            overflow-y:auto;
                            height:100%;
                        }
                    }
                }
            }
        }
    }
}
.btn-hidden{
    display:none;
}
.new_class{
    width:.72rem;
    height:.27rem;
    display:none;
    border:.01rem dashed #626262;
    color:#63d388;
    font-size:.18rem;
    text-align:center;
    font-weight:bolder;
    margin-bottom:.12rem;
}
</style>