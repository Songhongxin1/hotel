<template>
    <div id="newsdetails">
        <div class="details-header">
            <p class="details-title">{{info.title}}</p>
            <div class="details-header-bottom">
                <p>发布者：<span class="author">{{info.agency}}</span></p><p>时间：<span class="date">{{info.create_time}}</span></p>
            </div>
        </div>
        <p class="details-list" v-html="info.content"></p>
        <div class="space-wirte"></div>
        <div class="container">
            <p class="container-title">精彩评论</p>
            <ul class="container-box">
                <li class="container-list" v-for="(item,$index) in comment_lists">
                    <div class="container-left">
                        <img src="../../static/images/head.jpg" alt="">
                    </div>
                    <div class="container-middle">
                        <p>{{item.user}}</p>
                        <p>{{item.content}}</p>
                        <p>{{item.add_time}}</p>
                        <ul class="container-ctrl">
                            <li>
                                <i class="iconfont" @click="zan($index)">&#xe606;</i>
                                <span>{{item.zan_count}}</span>
                            </li>
                            <li>
                                <i class="iconfont">&#xe642;</i>
                                <span>回复</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="release">
            <div class="release-left release-left-bottom">
                <img src="../../static/images/head.jpg" alt="">
            </div>
            <div class="release-middle">
                <textarea type="text" name="" v-model="comment"></textarea>
            </div>
            <div class="release-right">
                <a @click="postData" href="javascript:;">发表</a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
var qs = require('qs');
export default{
    data(){
        return{
            info:'',
            count:'',
            comment_lists:'',
            is_zan:'',
            zan_count:'',

            comment:''
        }
    },
    created(){
        this.$http.post('http://m.dev.hotel.com/news/newsInfo',
        qs.stringify({
            news_id:this.$route.params.news_list_id,
        }),
        {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then((res)=>{
            if(res.data.status == 0){
                this.info = res.data.data.info;
                this.count = res.data.data.count;
                this.comment_lists = res.data.data.comment_lists;
                this.is_zan = res.data.data.is_zan;
            }else{
                alert(res.data.msg)
            }
        },(error=>{
            alert('请求失败，请刷新页面')
        }))
    },
    methods:{
        zan(index){
            this.$http.post('http://m.dev.hotel.com/news/commentZan',
            qs.stringify({
                comment_id:this.comment_lists[index].id
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                this.comment_lists[index].zan_count++
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        },
        postData(){
            this.$http.post('http://m.dev.hotel.com/news/comment',
            qs.stringify({
                news_id:this.$route.params.news_list_id,
                comment:this.comment
            }),
            {
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                if(res.data.status == 0){
                    this.info = res.data.data.info;
                    this.count = res.data.data.count;
                    this.comment_lists = res.data.data.comment_lists;
                    this.is_zan = res.data.data.is_zan;
                }else{
                    alert(res.data.msg)
                }
            },(error=>{
                alert('请求失败，请刷新页面')
            }))
        }
    }
}
</script>
<style type="text/css" lang="scss">
#newsdetails{
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
    .details-header{
        background:#fff;
        padding:0 .20rem;
        .details-title{
            color:#212121;
            font-size:.36rem;
            line-height:.80rem;
        }
        .details-header-bottom{
            padding:.20rem 0;
            color:#b2b2b2;
            font-size:.16rem;
            overflow:hidden;
            p:first-child{
                float:left;
            }
            p:last-child{
                float:right;
                .date{
                    margin-right:.10rem;
                }
            }
        }
    }
    .details-list{
        background:#fff;
        padding:.20rem .20rem 1.00rem .20rem;
        border-bottom:.01rem solid #b5b5b5;
        position:relative;
        color:#212121;
        font-size:.24rem;
        text-indent: .60rem;
        text-align:justify;
        img{
            width:100%;
            vertical-align:middle;
            margin-bottom:.10rem;
            display:block;
        }
        .good{
            position:absolute;
            background:#fff;
            bottom:-.1rem;
            left:45%;
            height:.9rem;
            color:#2cbc5b;
            font-size:1.00rem;
            text-align:center;
        }
    }
    .space-wirte{
        height:.68rem;
        background:#fff;
    }
    .container{
        margin-top:.30rem;
        background:#fff;
        padding:0 .20rem 1.00rem .20rem;
        .container-title{
            font-size:.36rem;
            color:#212121;
            line-height:.80rem;
        }
        .container-box{
            .container-list{
                border-bottom:.01rem solid #bfbfbf;
                overflow:hidden;
                display:flex;
                padding-bottom:.66rem;
                .container-left{
                    float:left;
                    img{
                        vertical-align:middle;
                        display:block;
                        margin-top:.50rem;
                        border-radius:50%;
                        width:.78rem;
                        height:.78rem;
                        margin-right:.25rem;
                    }
                }
                .container-middle{
                    flex:1;
                    position:relative;
                    p:first-child{
                        margin-top:.40rem;
                        line-height:.36rem;
                        font-size:.24rem;
                        color:#23a04c;
                    }
                    p:nth-child(2){
                        color:#525252;
                        line-height:.36rem;
                        font-size:.24rem;
                    }
                    p:nth-child(3){
                        color:#b6b6b6;
                        font-size:.18rem;
                        line-height:.36rem;
                    }
                    .container-ctrl{
                        position:absolute;
                        bottom:-.41rem;
                        right:0;
                        li{
                            color:#757575;
                            font-size:.24rem;
                            float:left;
                            margin-right:.20rem;
                        }
                        .iconfont{
                            font-size:.22rem;
                            margin-right:.5rem;
                        }
                    }
                }
            }
        }
    }
    .release{
        background:#f3f3f3;
        height:.99rem;
        border:.01rem solid #bfbfbf;
        padding:0 .20rem;
        .release-left{
            float:left;
            padding-right:.18rem;
            img{
                width:.78rem;
                height:.78rem;
                border-radius:50%;
                margin-top:.10rem;
            }
        }
        .release-middle{
            width:4.94rem;
            height:100%;
            float:left;
            textarea{
                height:.65rem;
                line-height:.35rem;
                display:block;
                width:96%;
                padding:0 2%;
                border-radius:.08rem;
                margin-top:.13rem;
                border:.01rem solid #c0c0c0;
                background:#fff;
                font-size:.24rem;
            }
        }
        .release-right{
            overflow:hidden;
            a{
                height:.65rem;
                margin-top:.13rem;
                border:.01rem solid #c0c0c0;
                color:#525252;
                font-size:.24rem;
                text-align:center;
                line-height:.65rem;
                border-radius:.08rem;
                background:#fff;
                display:block;
                margin-left:.07rem;
            }
        }
    }
}
.release-left-bottom{
    img{
        vertical-align:middle;
        display:block;
    }
}
</style>