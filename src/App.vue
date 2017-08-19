<template>
    <div id="app">
        <headbar></headbar>
        <router-view></router-view>
        <footbar></footbar>
    </div>
</template>

<script>
import headbar from './components/HeadBar.vue'
import footbar from './components/FootBar.vue'
import '../static/js/rem.js'
export default {
    name: 'app',
    components:{
        footbar,headbar
    }
}
</script>

<style lang="scss" type="text/css">
@font-face {
  font-family: 'iconfont';  /* project id 378531 */
  src: url('https://at.alicdn.com/t/font_378531_zf68wy38jhjv2t9.eot');
  src: url('https://at.alicdn.com/t/font_378531_zf68wy38jhjv2t9.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_378531_zf68wy38jhjv2t9.woff') format('woff'),
  url('https://at.alicdn.com/t/font_378531_zf68wy38jhjv2t9.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_378531_zf68wy38jhjv2t9.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
*{
    margin:0;
    padding:0;
    outline:none;
}
.weui-cell{
    z-index:1!important;
}
a{
    text-decoration:none;
    color:#4d4d4d;
}
body,html{
    position:relative;
    background:#ebebeb;
    width:100%;
}
ul {
    list-style-type: none;
    padding: 0;
}
li{
    list-style:none;
}
#app {
    font-family:"Microsoft YaHei", 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.noselect{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.noborder{
    border:none !important;
}
</style>
