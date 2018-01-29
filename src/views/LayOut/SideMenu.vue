<template>
  <div class="SideMenu" @wheel.prevent="handleScroll" :style="{top:`${SideMenuTop}px`}">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :collapse="isCollapse"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409EFF">

<!--           <router-link  to="/querymultiple/index" tag="span">
            <el-menu-item index="/querymultiple/index">
              <template slot="title">
                <span>统计查询系统</span>
              </template>
            </el-menu-item>
          </router-link> -->

          <el-submenu index="1">
            <template slot="title">
              <span>统计查询系统</span>
            </template>
            <template>
              <router-link to="/querymultiple/index" tag="span">
                <el-menu-item index="/querymultiple/index">多选查询系统</el-menu-item>
              </router-link>
              <router-link to="/querysystem/index" tag="span">
                <el-menu-item index="/querysystem/index">单选查询系统</el-menu-item>
              </router-link>
            </template>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <span>发现</span>
            </template>

            <template>
              <router-link to="/kachaindex/index" tag="span">
                <el-menu-item index="/kachaindex/index">发现&酒款数据汇总</el-menu-item>
              </router-link>

              <router-link to="/winedetail/index" tag="span">
                <el-menu-item index="/winedetail/index">推荐酒款总数据</el-menu-item>
              </router-link>

              <router-link to="/winedetaildaily/index" tag="span">
                <el-menu-item index="/winedetaildaily/index">推荐酒款某日数据</el-menu-item>
              </router-link>

              <router-link to="/freeneed/index" tag="span">
                <el-menu-item index="/freeneed/index">白菜&大牌</el-menu-item>
              </router-link>

            </template>
          </el-submenu>

          <router-link  to="/square/index" tag="span">
            <el-menu-item index="/square/index">
              <template slot="title">
                <span>淘醉</span>
              </template>
            </el-menu-item>
          </router-link>

          <el-submenu index="6">
            <template slot="title">
              <span>CPS成交数据</span>
            </template>
            <template>
              <router-link to="/tmcpsdaily/index" tag="span">
                <el-menu-item index="/tmcpsdaily/index">淘宝成交日数据</el-menu-item>
              </router-link>

              <router-link to="/uploadexcel/index" tag="span">
                <el-menu-item index="/uploadexcel/index">导入成交明细</el-menu-item>
              </router-link>

            </template>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <span>H5酒款信息</span>
            </template>
            <template>
              <router-link to="/wineinfo/index" tag="span">
                <el-menu-item index="/wineinfo/index">二级页面浏览</el-menu-item>
              </router-link>
              <router-link to="/wineinfocount/index" tag="span">
                <el-menu-item index="/wineinfocount/index">二级页面类型总浏览</el-menu-item>
              </router-link>
<!--               <router-link to="/wineinfofirstlevel/index" tag="span">
                <el-menu-item index="/wineinfofirstlevel/index">一级页面渠道浏览量</el-menu-item>
              </router-link> -->
            </template>
          </el-submenu>


<!--           <el-submenu index="7">
            <template slot="title">
              <span>爬虫</span>
            </template>
            <template>
              <router-link to="/querysystem/index" tag="span">
                <el-menu-item index="/querysystem/index">爬虫库酒款标签</el-menu-item>
              </router-link>
            </template>
          </el-submenu> -->

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        SideMenuTop: '0',
      };
    },
    methods: {

      // 鼠标滚轮滚动菜单栏
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 3
        const AfterWheelTop = Math.floor(this.SideMenuTop) + eventDelta

        const bodyH = document.body.offsetHeight
        const ElmentMenuul = document.querySelector(".el-menu")
        const MenuulH = ElmentMenuul.offsetHeight

        const minSideMenuTop = bodyH < MenuulH ? (bodyH - MenuulH) : 0
        let lastTop = AfterWheelTop < minSideMenuTop ? minSideMenuTop : AfterWheelTop

        this.SideMenuTop = lastTop < 0 ? lastTop : 0
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="stylus">
.SideMenu
  width 180px
  position fixed
  left 0
  bottom 0
  z-index 999
  background-color rgb(48, 65, 86)
.el-col-12
  width 180px
  height 100vh
  background-color rgb(48, 65, 86)
.el-submenu
  .el-menu-item
    min-width 180px !important
    background-color #1f2d3d !important
    &:hover
      background-color #001528 !important
.el-menu li
  width 180px
.submenu-iconfont
  display inline-block
  width 24px
  padding-left 6px
  color rgb(255, 255, 255) !important
.el-submenu__title i
  // color rgb(255, 255, 255) !important
.el-submenu__icon-arrow
  color #878d99 !important
// .router-link-active
//   .iconfont
//     color rgb(64, 158, 255) !important
</style>