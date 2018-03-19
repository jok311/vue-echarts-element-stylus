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

          <router-link  to="/goodlist/index" tag="span">
            <el-menu-item index="/goodlist/index">
              <template slot="title">
                <span>表格组件</span>
              </template>
            </el-menu-item>
          </router-link>


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