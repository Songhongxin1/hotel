<template>
    <div id="headbar">
        <ul class="headbar-box">
            <li><a @click="$router.go(-1)" class="back-box iconfont">&#xe614;返回</a></li>
            <li class="title">九龙山国家森林公园度假区</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
export default{

}
</script>
<style type="text/css" lang="scss">
#headbar{
    z-index:2;
    height:.80rem;
    line-height:.80rem;
    position:fixed;
    top:0;
    width:100%;
    z-index:2;
    border-left:0.01rem solid #333236;
    border-right:0.01rem solid #333236;
    background:linear-gradient(#313035,#3c3c3f);
    overflow:hidden;
    .headbar-box{
        height:0.80rem;
        width:100%;
        display:flex;
        position:relative;
        li{
            height:0.80rem;
            line-height:0.80rem;
            color:#fff;
            font-size:0.29rem;
            .back-box{
                line-height:0.85rem;
                position:absolute;
                font-size:0.29rem;
                color:#fff;
                left:0.24rem;
            }
        }
        .title{
            text-align:center;
            flex:1;
        }
    }
}
</style>