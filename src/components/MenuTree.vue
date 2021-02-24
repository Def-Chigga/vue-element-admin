<template>
  <div class="menu-tree">
    <template v-for="item in this.menuList">
      <el-submenu :disabled="item.disabled" :index="item.id+''" :key="item.id+''" v-if="item.children.length>0">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>
        <MenuTree :menuList="item.children"></MenuTree>
      </el-submenu>
      <el-menu-item
        v-else
        :disabled="item.disabled"
        :index="item.url+''"
        :key="item.id"
        @click="saveActivePath(item.url + '')"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.menuName }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuTree',
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    saveActivePath(path) {
      // console.log(path);
      window.sessionStorage.setItem('activePath', path);
    }
  }
};
</script>

<style scoped lang="scss">
  /*实现了一个溢出处理*/
  .el-menu--collapse span,
  .el-menu--collapse i.el-submenu__icon-arrow {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
</style>
