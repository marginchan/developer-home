<template>
  <div class="tools-name">技术社区</div>
  <hr color="#f0f0f0" />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="1">
      <a class="tools-hover" href="https://www.cnblogs.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/cnblogs.png"
        /></div>
        <div class="content">
          <span class="title">博客园</span>
          <p class="description">开发者的网上家园</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="2">
      <a class="tools-hover" href="https://www.csdn.net/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/csdn.png"
        /></div>
        <div class="content">
          <span class="title">CSDN</span>
          <p class="description">最大的中文技术社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="3">
      <a class="tools-hover" href="https://www.oschina.net/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/oschina(1).ico"
        /></div>
        <div class="content">
          <span class="title">开源中国</span>
          <p class="description">国内最大的开源技术社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="4">
      <a class="tools-hover" href="https://segmentfault.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/sf.ico"
        /></div>
        <div class="content">
          <span class="title">SF思否</span>
          <p class="description">思否是中国领先的开发者技术社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="5">
      <a class="tools-hover" href="https://juejin.im/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/juejin.png"
        /></div>
        <div class="content">
          <span class="title">掘金</span>
          <p class="description">一个帮助开发者成长的社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="6">
      <a class="tools-hover" href="https://www.51cto.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/51.ico"
        /></div>
        <div class="content">
          <span class="title">51CTO</span>
          <p class="description">中国领先的IT技术网站</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="7">
      <a class="tools-hover" href="https://toutiao.io/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/toutiao.png"
        /></div>
        <div class="content">
          <span class="title">开发者头条</span>
          <p class="description">程序员分享平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="8">
      <a class="tools-hover" href="https://xie.infoq.cn/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/InfoQ.jpg"
        /></div>
        <div class="content">
          <span class="title">InfoQ</span>
          <p class="description">一个实践驱动的技术社区资讯站点</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="9">
      <a class="tools-hover" href="https://stackoverflow.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/stackoverflow.svg"
        /></div>
        <div class="content">
          <span class="title">StackOverflow</span>
          <p class="description">全球最大的技术问答社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="10">
      <a class="tools-hover" href="http://www.chinaunix.net/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/cu.png"
        /></div>
        <div class="content">
          <span class="title">ChinaUnix</span>
          <p class="description">中国最大的Linux/Unix技术社区网站</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="11">
      <a class="tools-hover" href="https://studygolang.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/golang.ico"
        /></div>
        <div class="content">
          <span class="title">Golang中文社区</span>
          <p class="description">Go语言爱好者的学习家园</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="12">
      <a class="tools-hover" href="https://ruby-china.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/ruby.png"
        /></div>
        <div class="content">
          <span class="title">Ruby china</span>
          <p class="description">国内最权威的 Ruby 社区</p>
        </div>
      </a>
    </a-col>
  </a-row>
</template>
<script>
  export default {};
</script>
<style>
  .tools-hover {
    display: flex;
    text-align: left;
    margin: 10px 0px;
    width: 100%;
    min-height: 80px;
    
  }

  .tools-hover:hover {
    display: flex;
    background: #fa8c16;
    border-radius: 10px;
    width: 100%;
  }

  .tools-hover .icon .tools-img {
    margin-left: 10px;
    margin-top: 15px;
    width: 26px;
  }

  .tools-hover .content {
    margin-left: 8px;
    margin-top: 15px;
    
  }

  .tools-hover .content .title {
    color: black;
    font-weight: bold;
  }

  .tools-hover .content .description {
    font-size: 12px;
    color: #8c8c8c;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
</style>
