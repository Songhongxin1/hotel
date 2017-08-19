<template>
    <div id="lease">
        <div class="banner">
            <img src="../../static/images/banner.png" alt="">
        </div>
        <div class="content">
            <p class="content-title">租赁服务</p>
            <ul class="content-box">
                <li class="content-list">
                    <router-link to="/lease/leasecycling">
                        <img src="../../static/images/list1.jpg" alt="">
                        <div class="list-right">
                            <p>骑行工具<br />租赁服务</p>
                        </div>
                    </router-link>
                    <ul class="list-bottom">
                        <li>景区骑行工具服务</li>
                    </ul>
                </li>
                <li class="content-list">
                    <router-link to="/lease/LeaseOutdoor">
                        <img src="../../static/images/list1.jpg" alt="">
                        <div class="list-right">
                            <p>户外工具<br />租赁服务</p>
                        </div>
                    </router-link>
                    <ul class="list-bottom">
                        <li>景区骑行工具服务</li>
                    </ul>
                </li>
                <li class="content-list">
                    <a href="javascript:;">
                        <img src="../../static/images/list1.jpg" alt="">
                        <div class="list-right">
                            <p>其他服务</p>
                        </div>
                    </a>
                    <ul class="list-bottom">
                        <li>景区骑行工具服务</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css" lang="scss">
#lease{
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
    .content{
        padding:.40rem .50rem;
        .content-title{
            text-align:center;
            color:#1d1d1d;
            font-size:.30rem;
        }
        .content-box{
            .content-list{
                margin-top:.40rem;
                a{
                    position:relative;
                    width:6.55rem;
                    display:block;
                    img{
                        width:6.55rem;
                        height:1.54rem;
                    }
                    .list-right{
                        right:.17rem;
                        top:.19rem;
                        position:absolute;
                        width:1.35rem;
                        opacity:.8;
                        height:1.15rem;
                        border-radius:.09rem;
                        background:#363636;
                        overflow:hidden;
                        p{
                            line-height:.45rem;
                            border:.04rem solid #919191;
                            width:1.19rem;
                            height:1.00rem;
                            margin-top:.04rem;
                            margin-left:.04rem;
                            border-radius:.07rem;
                            color:#fff;
                            font-size:.28rem;
                            text-align:center;
                        }
                    }
                }
                .list-bottom{
                    li{
                        list-style:disc;
                        margin-left:.20rem;
                        color:#5e5e5e;
                        font-size:.26rem;
                    }
                }
            }
        }
    }
}
</style>