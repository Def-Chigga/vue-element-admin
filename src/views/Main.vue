<template>
    <!--主要内容区域-->
    <div class="main">
      <!--内容容器-->
      <el-container>
        <!--内容头部-->
        <el-header>
          <div class="header-left">
            <img src="./../assets/images/timg.gif" alt="">
            <h1>新冠物资管理系统</h1>
          </div>
          <div class="header-right">
            <el-dropdown @command="handleCommand">
              <img src="./../assets/images/timg.gif" alt="">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="sys" icon="el-icon-house">系统首页</el-dropdown-item>
                <el-dropdown-item command="talk" icon="el-icon-ship">交流讨论</el-dropdown-item>
                <el-dropdown-item command="logout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <!--内容区域-->
        <el-container>
          <!--内容侧边导航栏-->
          <el-aside :class="isCollapse ? 'active' : ''">
            <div class="toggle-collapse" @click="toggleCollapse">|||</div>
            <el-menu
              :default-active="activePath"
              background-color="#001529"
              text-color="#fff"
              :collapse="isCollapse"
              unique-opened
              router
              active-text-color="#ffd04b">
              <MenuTree :menuList="menuList"></MenuTree>
            </el-menu>
          </el-aside>
          <!--内容显示区域-->
          <el-main>
            <div v-if="rootPath" class="main">默认main内容</div>
            <router-view v-else/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import MenuTree from '../components/MenuTree';
export default {
  name: 'Main',
  components: {
    MenuTree
  },
  data() {
    return {
      isCollapse: false,
      activePath: '' || sessionStorage.getItem('activePath'),
      list: [
        {
          menuName: '系统管理', // 菜单名
          icon: 'el-icon-setting', // 菜单图标
          path: '/user', // 路由
          name: 'User', // 路由名 一般去掉下划线首字母大写
          component: 'users/User', // 路由路径 上级文件夹/组件的方式
          // 子数组
          children: []
        }
      ],
      menuList: [
        {
          id: 1,
          parentId: 0,
          menuName: '系统管理',
          url: '',
          icon: 'el-icon-setting',
          orderNum: 1,
          open: 1,
          disabled: false,
          perms: null,
          type: 0,
          children: [
            {
              id: 253,
              parentId: 1,
              menuName: '欢迎页面',
              url: '/welcome',
              icon: 'el-icon-star-off',
              orderNum: 1,
              open: 0,
              disabled: false,
              perms: 'welcome:view',
              type: 0,
              children: []
            },
            {
              id: 226,
              parentId: 1,
              menuName: '用户管理',
              url: '/users',
              icon: 'el-icon-user',
              orderNum: 2,
              open: 0,
              disabled: false,
              perms: 'users',
              type: 0,
              children: []
            },
            {
              id: 321,
              parentId: 1,
              menuName: '附件管理',
              url: '/attachments',
              icon: 'el-icon-picture-outline',
              orderNum: 2,
              open: 1,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            },
            {
              id: 4,
              parentId: 1,
              menuName: '菜单权限',
              url: '/menus',
              icon: 'el-icon-help',
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: null,
              type: 0,
              children: []
            },
            {
              id: 235,
              parentId: 1,
              menuName: '角色管理',
              url: '/roles',
              icon: 'el-icon-postcard',
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            },
            {
              id: 261,
              parentId: 1,
              menuName: '部门管理',
              url: '/departments',
              icon: 'el-icon-s-home',
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            },
            {
              id: 319,
              parentId: 1,
              menuName: '公告管理',
              url: '/notices',
              icon: 'el-icon-s-flag',
              orderNum: 4,
              open: 0,
              disabled: true,
              perms: '',
              type: 0,
              children: []
            }
          ]
        },
        {
          id: 312,
          parentId: 0,
          menuName: '业务管理',
          url: null,
          icon: 'el-icon-s-goods',
          orderNum: 2,
          open: 0,
          disabled: false,
          perms: null,
          type: 0,
          children: [
            {
              id: 229,
              parentId: 312,
              menuName: '物资管理',
              url: '',
              icon: 'el-icon-date',
              orderNum: 1,
              open: 1,
              disabled: false,
              perms: 'el-icon-date',
              type: 0,
              children: [
                {
                  id: 230,
                  parentId: 229,
                  menuName: '物资入库',
                  url: '/inStocks',
                  icon: 'el-icon-date',
                  orderNum: 1,
                  open: 1,
                  disabled: false,
                  perms: 'el-icon-date',
                  type: 0,
                  children: []
                },
                {
                  id: 267,
                  parentId: 229,
                  menuName: '物资资料',
                  url: '/products',
                  icon: 'el-icon-goods',
                  orderNum: 2,
                  open: 0,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                },
                {
                  id: 268,
                  parentId: 229,
                  menuName: '物资类别',
                  url: '/productCategorys',
                  icon: 'el-icon-star-off',
                  orderNum: 2,
                  open: 0,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                },
                {
                  id: 270,
                  parentId: 229,
                  menuName: '物资发放',
                  url: '/outStocks',
                  icon: 'el-icon-goods',
                  orderNum: 5,
                  open: 1,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                },
                {
                  id: 316,
                  parentId: 229,
                  menuName: '物资库存',
                  url: '/stocks',
                  icon: 'el-icon-tickets',
                  orderNum: 5,
                  open: 0,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                }
              ]
            },
            {
              id: 311,
              parentId: 312,
              menuName: '物资流向',
              url: null,
              icon: 'el-icon-edit',
              orderNum: 3,
              open: 0,
              disabled: false,
              perms: null,
              type: 0,
              children: [
                {
                  id: 310,
                  parentId: 311,
                  menuName: '物资去处',
                  url: '/consumers',
                  icon: 'el-icon-edit',
                  orderNum: 1,
                  open: 0,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                },
                {
                  id: 269,
                  parentId: 311,
                  menuName: '物资来源',
                  url: '/suppliers',
                  icon: 'el-icon-coordinate',
                  orderNum: 5,
                  open: 0,
                  disabled: false,
                  perms: '',
                  type: 0,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 303,
          parentId: 0,
          menuName: '健康报备',
          url: '',
          icon: 'el-icon-platform-eleme',
          orderNum: 3,
          open: 0,
          disabled: false,
          perms: '',
          type: 0,
          children: [
            {
              id: 273,
              parentId: 303,
              menuName: '全国疫情',
              url: '/map',
              icon: 'el-icon-s-opportunity',
              orderNum: 1,
              open: 1,
              disabled: false,
              perms: 'map:view',
              type: 0,
              children: []
            },
            {
              id: 304,
              parentId: 303,
              menuName: '健康打卡',
              url: '/health',
              icon: 'el-icon-s-cooperation',
              orderNum: 1,
              open: 0,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            },
            {
              id: 305,
              parentId: 303,
              menuName: '查看情况',
              url: null,
              icon: 'el-icon-c-scale-to-original',
              orderNum: 2,
              open: 1,
              disabled: false,
              perms: null,
              type: 0,
              children: []
            },
            {
              id: 272,
              parentId: 303,
              menuName: '疫情辟谣',
              url: '/rumors',
              icon: 'el-icon-help',
              orderNum: 5,
              open: 0,
              disabled: false,
              perms: null,
              type: 0,
              children: []
            }
          ]
        },
        {
          id: 295,
          parentId: 0,
          menuName: '其他管理',
          url: '',
          icon: 'el-icon-s-marketing',
          orderNum: 5,
          open: 0,
          disabled: false,
          perms: '',
          type: 0,
          children: [
            {
              id: 297,
              parentId: 295,
              menuName: '监控管理',
              url: '',
              icon: 'el-icon-warning',
              orderNum: 1,
              open: 0,
              disabled: false,
              perms: '',
              type: 0,
              children: [
                {
                  id: 298,
                  parentId: 297,
                  menuName: 'SQL监控',
                  url: '/druid',
                  icon: 'el-icon-view',
                  orderNum: 1,
                  open: 0,
                  disabled: false,
                  perms: null,
                  type: 0,
                  children: []
                }
              ]
            },
            {
              id: 341,
              parentId: 295,
              menuName: '个人博客',
              url: '/blog',
              icon: 'el-icon-view',
              orderNum: 1,
              open: 0,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            },
            {
              id: 296,
              parentId: 295,
              menuName: 'swagger文档',
              url: '/swagger',
              icon: 'el-icon-document',
              orderNum: 2,
              open: 0,
              disabled: false,
              perms: null,
              type: 0,
              children: []
            },
            {
              id: 318,
              parentId: 295,
              menuName: '图标管理',
              url: '/icons',
              icon: 'el-icon-star-off',
              orderNum: 2,
              open: 1,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            }
          ]
        },
        {
          id: 5,
          parentId: 0,
          menuName: '日志管理',
          url: '/logs',
          icon: 'el-icon-camera',
          orderNum: 6,
          open: 0,
          disabled: false,
          perms: null,
          type: 0,
          children: [
            {
              id: 271,
              parentId: 5,
              menuName: '登入日志',
              url: '/loginLog',
              icon: 'el-icon-date',
              orderNum: 1,
              open: 0,
              disabled: false,
              perms: 'login:log',
              type: 0,
              children: []
            },
            {
              id: 307,
              parentId: 5,
              menuName: '操作日志',
              url: '/logs',
              icon: 'el-icon-edit',
              orderNum: 1,
              open: 1,
              disabled: false,
              perms: '',
              type: 0,
              children: []
            }
          ]
        }
      ]
    };
  },
  watch: {
    '$route'(newValue, oldValue) {
      // console.log(newValue, oldValue);
      if (newValue.path === '/main') {
        this.activePath = '';
        window.sessionStorage.removeItem('activePath');
      }
    }
  },
  created() {
    // 把从后台获取到的路由数据存到Vuex
    this.$store.state.navMenuList = this.menuList;
    // console.log(this.$store.state.navMenuList);

    // 筛选需要添加的父路由
    // console.log(this.$router.options.routes);
    const routeMainList = this.$router.options.routes.filter(item => {
      return item.path === '/main';
    });

    // 添加路由
    routeMainList[0].children.push({ // 插入路由
      path: '/users',
      name: 'Users',
      component: resolve => require(['../views/users/User'], resolve)// 将组件用require引进来
    });

    // 注册路由
    this.$router.addRoutes(this.$router.options.routes);
    console.log(this.$router.options.routes);

    // const routeObj = {
    //   path: 'main/users', // 这里要把父路由的路径也带上
    //   name: 'test',
    //   component: () =>
    //     import('../views/users/User')
    // }
    // this.$router.addRoute('main', routeObj)
  },
  computed: {
    rootPath() {
      return this.$route.path === '/main';
    }
  },
  methods: {
    // 处理顶部右侧头像下拉菜单按钮
    handleCommand(command) {
      this.$message('click on item ' + command);
      if (command === 'sys') {
        // 系统首页处理
      } else if (command === 'talk') {
        // 交流讨论处理
      } else if (command === 'logout') {
        // 退出登录处理
      }
    },
    // 切换展开/折叠侧边栏菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped lang="scss">
.main{
  height: 100%;
  .el-container{
    height: 100%;
    .el-header {
      background-color: #001529;
      color: #FFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      .header-left{
        height: 100%;
        display: flex;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          margin-right: 20px;
          margin-bottom: 10px;
        }
        h1{
          font-size: 20px;
        }
      }
      .header-right{
        height: 100%;
        display: flex;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #FFFFFF;
        }
      }
    }

    .el-aside {
      width: 200px !important;
      background-color: #001529;
      &.active{
        width: 64px !important;
      }
      .toggle-collapse{
        background-color: burlywood;
        font-size: 15px;
        font-weight: bold;
        line-height: 24px;
        color: #FFFFFF;
        letter-spacing: 0.2em;
        text-align: center;
        cursor: pointer;
      }
      .el-menu{
        border-right: none;
      }
    }

    .el-main {
      background-color: #E9EEF3;
    }
  }
}
</style>
