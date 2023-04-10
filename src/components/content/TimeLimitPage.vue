<template>
  <div class="tools-name">限时专区</div>
  <hr color="#f0f0f0" />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="1">
      <a class="tools-hover" href="http://www.itmind.net/15726.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/aliyun.png"
        /></div>
        <div class="content">
          <span class="title">阿里云资源</span>
          <p class="description">电影/电视剧/动漫合集（火热限时）</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="2">
      <a class="tools-hover" href="http://www.itmind.net/13235.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/qq_music.png"
        /></div>
        <div class="content">
          <span class="title">会员免费领</span>
          <p class="description">QQ音乐/酷我/酷狗/全名k歌/懒人听书</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="3">
      <a class="tools-hover" href="http://www.itmind.net/13398.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/typora.png"
        /></div>
        <div class="content">
          <span class="title">Typora免费版</span>
          <p class="description">点击获取Typora免费版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="4">
      <a class="tools-hover" href="http://www.itmind.net/13211.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/beyond_compare.png"
        /></div>
        <div class="content">
          <span class="title">BeyondCompare免费</span>
          <p class="description">点击获取BeyondCompare免费版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="5">
      <a class="tools-hover" href="http://www.itmind.net/17070.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg"
        /></div>
        <div class="content">
          <span class="title">PhotoShop免费版</span>
          <p class="description">PhotoShop免费获取</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="6">
      <a class="tools-hover" href="http://www.itmind.net/12214.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="@/assets/idea.png"
        /></div>
        <div class="content">
          <span class="title">idea破解</span>
          <p class="description">点击获取idea破解教程</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="7">
      <a class="tools-hover" href="http://www.itmind.net/12988.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/pycharm.png"
        /></div>
        <div class="content">
          <span class="title">pycharm免费版</span>
          <p class="description">点击获取pycharm免费版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="8">
      <a class="tools-hover" href="http://www.itmind.net/15207.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="@/assets/webstorm.png"
        /></div>
        <div class="content">
          <span class="title">WebStorm免费版</span>
          <p class="description">WebStorm免费获取</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="9">
      <a class="tools-hover" href="http://www.itmind.net/12766.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/xshell.png"
        /></div>
        <div class="content">
          <span class="title">Xshell免费版</span>
          <p class="description">点击获取Xshell免费版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="10">
      <a class="tools-hover" href="http://www.itmind.net/12557.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/devtool/navicat.png"
        /></div>
        <div class="content">
          <span class="title">Navicat免费版</span>
          <p class="description">点击获取Navicat免费版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="11">
      <a class="tools-hover" href="http://www.itmind.net/12592.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/python.png"
        /></div>
        <div class="content">
          <span class="title">python进阶100天</span>
          <p class="description">python从入门、进阶学习资料</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="12">
      <a class="tools-hover" href="http://www.itmind.net/13268.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/likou.png"
        /></div>
        <div class="content">
          <span class="title">力扣刷题宝典</span>
          <p class="description">点击免费LeetCode刷题资料</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="13">
      <a class="tools-hover" href="http://www.itmind.net/16068.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/jl.png"
        /></div>
        <div class="content">
          <span class="title">100套程序员简历模板</span>
          <p class="description">海量程序员简历模板</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="14">
      <a class="tools-hover" href="http://www.itmind.net/16027.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/git.jpg"
        /></div>
        <div class="content">
          <span class="title">Git学习宝典</span>
          <p class="description">免费获取Git经典学习宝典</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="15">
      <a class="tools-hover" href="http://www.itmind.net/12846.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/limit/network-pdf.png"
        /></div>
        <div class="content">
          <span class="title">图解网络pdf</span>
          <p class="description">点击获取图解网络pdf,全网高赞pdf</p>
        </div>
      </a>
    </a-col>
  </a-row>
</template>
<script>
  export default {};
</script>
<style></style>
