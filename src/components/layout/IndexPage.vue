<template>
  <a-layout>
    <a-layout-header
      class="header"
      style="background: #434343; width: 100%; height: 60px; z-index: 10"
      :style="{ overflow: 'auto', position: 'fixed' }"
    >
      <img src="favicon.ico" class="a-icon" style="width: 32px" />
      <a-typography-title :level="3" class="a-title" style="color: #fff" v-if="tag"
        >程序员导航</a-typography-title
      >
      <a-dropdown v-if="!show">
        <a class="ant-dropdown-link" @click.prevent style="color: #fff">
          <appstore-filled />
          导航标签
        </a>
        <template #overlay>
          <a-menu style="border-radius: 5px; width: 125px">
            <a-anchor :affix="false" :getContainer="container" :target-offset="targetOffset">
              <a-menu-item key="tag1" class="hidden-menu-item">
                <a-anchor-link href="#d1" title="常用工具" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag2" class="hidden-menu-item">
                <a-anchor-link href="#d2" title="技术社区" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag3" class="hidden-menu-item">
                <a-anchor-link href="#d3" title="限时专区" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag4" class="hidden-menu-item">
                <a-anchor-link href="#d4" title="摸鱼专区" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag5" class="hidden-menu-item">
                <a-anchor-link href="#d5" title="视频专区" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag6" class="hidden-menu-item">
                <a-anchor-link href="#d6" title="学习平台" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag7" class="hidden-menu-item">
                <a-anchor-link href="#d7" title="协同工作" style="font-size: 1rem" />
              </a-menu-item>
              <a-menu-item key="tag8" class="hidden-menu-item">
                <a-anchor-link href="#d8" title="头部社区" style="font-size: 1rem" />
              </a-menu-item>
            </a-anchor>
          </a-menu>
        </template>
      </a-dropdown>

      <span
        v-if="show"
        style="
          font-size: 20px;
          color: #fff;
          float: right;
          right: 30px;
          margin: 5px 0px;
          line-height: 45px;
        "
        >{{ nowTime }}</span
      >
    </a-layout-header>
    <a-layout has-sider v-if="show">
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        width="150px"
        style="border-radius: 20px; background: #f0f2f5; margin: 95px 50px; padding: 10px 0px"
        :style="{ overflow: 'auto', position: 'fixed' }"
      >
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          style="height: 100%; background: #f0f2f5"
        >
          <div ref="containerRef">
            <a-affix :target="() => containerRef">
              <a-anchor :affix="false" :getContainer="container" :target-offset="targetOffset">
                <a-menu-item key="1">
                  <a-anchor-link href="#d1" title="常用工具" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="2">
                  <a-anchor-link href="#d2" title="技术社区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="3">
                  <a-anchor-link href="#d3" title="限时专区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="4">
                  <a-anchor-link href="#d4" title="摸鱼专区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="5">
                  <a-anchor-link href="#d5" title="视频专区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="6">
                  <a-anchor-link href="#d6" title="学习平台" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="7">
                  <a-anchor-link href="#d7" title="协同工作" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="8">
                  <a-anchor-link href="#d8" title="头部社区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="9">
                  <a-anchor-link href="#d9" title="资源推荐" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="10">
                  <a-anchor-link href="#d10" title="图片专区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="11">
                  <a-anchor-link href="#d11" title="视频专区" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="12">
                  <a-anchor-link href="#d12" title="站长工具" style="font-size: 1rem" />
                </a-menu-item>
                <a-menu-item key="13">
                  <a-anchor-link href="#d13" title="其他工具" style="font-size: 1rem" />
                </a-menu-item>
              </a-anchor>
            </a-affix>
          </div>
        </a-menu>
      </a-layout-sider>
    </a-layout>

    <a-layout-content class="a-layout-content">
      <a-layout>
        <a-layout-content class="content" :style="{ padding: '0 24px', minHeight: '280px' }">
          <div id="d1">
            <UsefulTools />
          </div>
          <div id="d2" style="margin-top: 30px">
            <TechnologyPage />
          </div>
          <div id="d3" style="margin-top: 30px">
            <TimeLimitPage />
          </div>
          <div id="d4" style="margin-top: 30px">
            <LeisurePage />
          </div>
          <div id="d5" style="margin-top: 30px">
            <VedioPage />
          </div>
          <div id="d6" style="margin-top: 30px">
            <StudyPage />
          </div>
          <div id="d7" style="margin-top: 30px">
            <DevtoolsPage />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Alexander
    </a-layout-footer>
  </a-layout>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon back-to-top-icon"
          viewBox="0 0 1024 1024"
          ariaLabelledby="back-to-top"
        >
          <title id="back-to-top" lang="en">back-to-top icon</title>
          <g fill="currentColor">
            <path
              d="M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"
            ></path>
            <path
              d="m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"
            ></path>
          </g>
        </svg>
      </div>
      TOP
    </a-back-top>
  </div>
</template>
<script>
  import { defineComponent, onMounted, ref } from 'vue';
  import { AppstoreFilled } from '@ant-design/icons-vue';
  import { formateDate } from '@/components/date/nowDate';
  import UsefulTools from '@/components/content/UsefulTools.vue';
  import TechnologyPage from '@/components/content/TechnologyPage.vue';
  import TimeLimitPage from '@/components/content/TimeLimitPage.vue';
  import LeisurePage from '@/components/content/LeisurePage.vue';
  import VedioPage from '@/components/content/VedioPage.vue';
  import StudyPage from '@/components/content/StudyPage.vue';
  import DevtoolsPage from '@/components/content/DevtoolsPage.vue'

  export default defineComponent({
    components: {
      AppstoreFilled,
      UsefulTools,
      TechnologyPage,
      TimeLimitPage,
      LeisurePage,
      VedioPage,
      StudyPage,
      DevtoolsPage,
    },

    setup() {
      const containerRef = ref();
      const nowTime = ref('');
      const show = ref();
      const tag = ref();
      const getContainer = () => {
        return document.querySelector('#content');
      };
      const targetOffset = ref(undefined);

      onMounted(() => {
        setInterval(() => {
          nowTime.value = formateDate(new Date());
        });

        window.onresize = () => {
          window.screenWidth = document.body.clientWidth;
          if (window.screenWidth > 992) {
            show.value = true;
            tag.value = true;
          } else if (window.screenWidth > 576 && window.screenWidth <= 992) {
            show.value = false;
            tag.value = true;
          } else {
            show.value = false;
            tag.value = false;
          }
        };
        window.onresize();

        targetOffset.value = window.innerHeight / 10;
      });

      return {
        containerRef,
        selectedKeys1: ref(['2']),
        selectedKeys2: ref(['1']),
        openKeys: ref(['sub1']),
        collapsed: ref(false),
        nowTime,
        show,
        tag,
        getContainer,
        targetOffset,
      };
    },
  });
</script>
<style>
  .site-layout-background {
    background: #f0f2f5;
  }

  #components-back-top-demo-custom .ant-back-top {
    right: 25px;
    top: 85%;
    position: fixed;
  }

  #components-back-top-demo-custom .ant-back-top:hover {
    background: #fa8c16;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 992px) {
    .a-layout-content {
      margin: 65px 2px;
      /* padding: 0 50px; */
    }
  }

  @media screen and (min-width: 992px) {
    .a-layout-content {
      margin: 65px 30px 0px 200px;
      padding: 0 50px;
    }
  }

  @media screen and (max-width: 576px) {
    .a-icon {
      float: left;
      margin: 14px 10px 10px 0px;
    }
    .ant-dropdown-link {
      float: right;
      font-size: 20px;
      margin-right: 0px;
    }
  }

  @media screen and (min-width: 576px) {
    .a-icon {
      float: left;
      margin: 10px 10px;
    }
    .a-title {
      float: left;
      margin: 10px 0px;
      line-height: 45px;
    }
    .ant-dropdown-link {
      float: right;
      font-size: 20px;
      margin-right: 0px;
    }
  }

  .a-layout-content .ant-layout {
    border-radius: 20px;
    padding: 24px 0;
    margin: 30px 10px;
    background: #fff;
    overflow: initial;
  }

  .ant-anchor-link {
    margin: 10px 0px;
  }

  .ant-anchor-link:hover {
    background: #fa8c16;
    border-radius: 5px;
    width: 100px;
  }

  .ant-anchor-link-active {
    font-weight: 600;
    border-bottom: 3px solid RGB(0, 179, 167);
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .hidden-menu-item {
    height: 42px;
  }
</style>
