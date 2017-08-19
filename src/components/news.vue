<template>
    <div id="news">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <ul class="news-nav">
            <li class="nav-list" v-for="item in news_class"><router-link :to="'/news/dynamic'+item.id" href="javascript:;"><p>{{item.name}}</p></router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
export default{
    data(){
        return{
            news_class:'',
            news_class_id:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/news/newsClassList'
            ).then((res)=>{
            if(res.data.status == 0){
                this.news_class = res.data.data.news_class;
                this.news_class_id = res.data.data.news_class_id
                console.log(this.news_list);
                this.$router.push('/news/dynamic'+this.news_class_id)
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
#news{
    margin-top:.80rem;
    margin-bottom:1.00rem;
    width:100%;
    overflow:hidden;
    .banner{
        width:100%;
        height:2.10rem;
        img{
            width:100%;
            height:100%;
            vertical-align:middle;
        }
    }
    .news-nav{
        border:.01rem solid #efefef;
        overflow:hidden;
        background:#fff;
        color:#3e3e3e;
        font-size:.36rem;
        display:flex;
        .nav-list{
            height:.83rem;
            text-align:center;
            flex:1;
            float:left;
            a{
                overflow:hidden;
                display:block;
                width:100%;
                height:100%;
                p{
                    border-right:.01rem solid #7d7d7d;
                    margin-top:.23rem;
                    line-height:.30rem;
                    height:.37rem;
                }
            }
        }
    }
}
</style>