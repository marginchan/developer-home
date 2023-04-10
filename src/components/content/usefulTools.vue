<template>
  <div class="tools-name">常用工具</div>
  <hr color="#f0f0f0" />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="1">
      <div class="tools-width">
        <a class="tools-link" href="https://www.linuxcool.com/" target="blank"
          ><img
            class="tools-img"
            src="https://www.linuxcool.com/wp-content/uploads/2019/03/cropped-redhat-32x32.png"
          />&nbsp;Linux命令大全</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="2">
      <div class="tools-width">
        <a class="tools-link" href="https://www.lingdaima.com/" target="blank"
          ><img
            class="tools-img"
            src="https://cxy521.com/static/img/index/tool/lingdaima.ico"
          />&nbsp;零代码 网页布局设计</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="3">
      <div class="tools-width">
        <a class="tools-link" href="http://hemin.cn/jq/" target="blank">
          <img class="tools-img" src="http://hemin.cn/jq/img/favicon.ico" />&nbsp;jQuery速查表
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="4">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/hexconvert/" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/hexconvert.png"
          />&nbsp;进制转换
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="5">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/ip/" target="blank">
          <img class="tools-img" src="http://cxysite.com/static/img/cygj/ip.png" />&nbsp;IP地址查询
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="6">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/base64image/" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/base64.png"
          />&nbsp;图片base64编码</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="7">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/coderunner/" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/code.png"
          />&nbsp;在线代码测试</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="8">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.oschina.net/regex/" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/oschina.ico"
          />&nbsp;正则表达式测试
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="9">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/urlconvert/" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/down.png"
          />&nbsp;下载链接转换工具
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="10">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/timestamp/" target="blank"
          ><img
            class="tools-img"
            src="https://cxy521.com/static/img/index/tool/timestamp.png"
          />&nbsp;时间戳转换</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="11">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/curl/" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/curl.png"
          />&nbsp;curl命令转代码</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="12">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/zhconvert" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/zf.png"
          />&nbsp;中文简繁体转换</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="13">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.gaodun.com/rmb.html" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/dx.png"
          />&nbsp;数字大写转换器
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="14">
      <div class="tools-width">
        <a class="tools-link" href="https://cli.im/" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/er.png"
          />&nbsp;二维码制作工具
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="15">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/encdec/" target="blank">
          <img class="tools-img" src="http://cxysite.com/static/img/cygj/jj.png" />&nbsp;加密解密
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="16">
      <div class="tools-width">
        <a class="tools-link" href="https://tool.lu/crontab" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/cron.png"
          />&nbsp;Cron表达式</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="17">
      <div class="tools-width">
        <a class="tools-link" href="https://www.photopea.com/" target="blank"
          ><img class="tools-img" src="http://cxysite.com/static/img/cygj/ps.png" />&nbsp;在线PS</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="18">
      <div class="tools-width">
        <a class="tools-link" href="http://favorites.ren/" target="blank">
          <img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/favorites.ico"
          />&nbsp;在线收藏网址
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="19">
      <div class="tools-width">
        <a class="tools-link" href="https://fanyi.baidu.com/translate" target="blank">
          <img class="tools-img" src="http://cxysite.com/static/img/cygj/bf.ico" />&nbsp;百度翻译
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="20">
      <div class="tools-width">
        <a class="tools-link" href="https://translate.google.cn/" target="blank">
          <img class="tools-img" src="http://cxysite.com/static/img/cygj/gf.ico" />&nbsp;谷歌翻译
        </a>
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="21">
      <div class="tools-width">
        <a class="tools-link" href="https://convertio.co/zh/" target="blank"
          ><img
            class="tools-img"
            src="http://cxysite.com/static/img/cygj/convertio.ico"
          />&nbsp;文件格式转换</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="22">
      <div class="tools-width">
        <a class="tools-link" href="https://mvnrepository.com/" target="blank"
          ><img class="tools-img" src="@/assets/mvnrepository.png" />&nbsp;maven仓库</a
        >
      </div>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="23">
      <div class="tools-width">
        <a class="tools-link" href="https://mp.weixin.qq.com/" target="blank"
          ><img
            class="tools-img"
            src="https://cxy521.com/static/img/index/media/wx.ico"
          />&nbsp;微信公众号</a
        >
      </div>
    </a-col>
  </a-row>
</template>
<script>
  export default {};
</script>
<style>
  .tools-name {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }

  .tools-width {
    text-align: left;
    margin-top: 20px;
    margin-left: 10px;
    width: 100%;
  }

  .tools-link {
    color: black;
  }

  .tools-img {
    width: 16px;
  }
</style>
