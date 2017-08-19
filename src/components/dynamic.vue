<template>
    <div id="dynamic">
        <ul class="news-ul">
            <li class="news-li" v-for="item in news_list">
                <router-link :to="'/news/NewsDetails'+item.id" href="javascript:;">
                    <div class="li-left"><img :src="item.cover_img" alt=""></div>
                    <div class="li-right">
                        <p class="right-title">{{item.title}}</p>
                        <p class="right-txt">{{item.summary}}</p>
                        <ul class="container-ctrl">
                            <li>
                                <i class="iconfont">&#xe914;</i>
                                <span>{{item.read}}</span>
                            </li>
                            <i class="space"></i>
                            <li>
                                <i class="iconfont">&#xe606;</i>
                                <span>{{item.zan_number}}</span>
                            </li>
                            <i class="space"></i>
                            <li>
                                <i class="iconfont">&#xe642;</i>
                            </li>
                        </ul>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            news_list:''
        }
    },
    watch:{
        '$route':'getData'
    },
    methods:{
        getData(){
            this.$http.post('http://m.dev.hotel.com/news/newsList',
            qs.stringify({
                news_class_id:this.$route.params.news_class_id,
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.news_list = res.data.data.news_list;
                    console.log(this.news_list)
                }else{
                    alert(res.data.msg)
                }
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        }
    },
    created(){
        this.getData()
    }
}
</script>
<style type="text/css" lang="scss">
#dynamic{
    margin-top:.16rem;
    border:.01rem solid #efefef;
    .news-ul{
        overflow:hidden;
        .news-li{
            padding:.15rem .16rem;
            background:#fff;
            border:.01rem solid #ededed;
            margin-bottom:.01rem;
            overflow:hidden;
            .li-left{
                float:left;
                img{
                    width:1.41rem;
                    height:1.41rem;
                    vertical-align:middle;
                }
            }
            .li-right{
                display:block;
                padding-bottom:.41rem;
                position:relative;
                overflow:hidden;
                padding-left:.50rem;
                .right-title{
                    color:#212121;
                    font-size:.30rem;
                }
                .right-txt{
                    color:#757575;
                    font-size:.22rem;
                }
                .container-ctrl{
                    position:absolute;
                    bottom:0;
                    right:0;
                    li{
                        color:#757575;
                        font-size:.24rem;
                        float:left;
                    }
                    .space{
                        float:left;
                        width:.01rem;
                        height:.19rem;
                        background:#757575;
                        margin:.10rem .30rem 0 .30rem;
                    }
                    .iconfont{
                        font-size:.22rem;
                        margin-right:.10rem;
                    }
                }
            }
        }
    }
}
</style>