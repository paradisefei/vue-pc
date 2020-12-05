<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <!-- 
            面包屑中可以显示keyword数据和品牌名
            1.如果没有内容时就不显示
            2.点x删除
           -->
          <ul class="fl sui-tag">
            <li class="with-x" v-show="options.keyword" @click="delKeyword">
              {{ options.keyword }}<i>×</i>
            </li>
            <li
              class="with-x"
              v-show="options.categoryName"
              @click="delCategoryName"
            >
              {{ options.categoryName }}<i>×</i>
            </li>
            <li class="with-x" v-show="options.trademark" @click="delTrademark">
              {{ options.trademark }}<i>×</i>
            </li>
            <!-- 
              属性是一个数组，数组中每一个元素都是一个面包屑

             -->
            <li
              class="with-x"
              v-for="(prop, index) in options.props"
              :key="prop"
              @click="delProp(index)"
            >
              {{ prop.split(":")[2] + ":" + prop.split(":")[1] }}<i>×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :addTrademark="addTrademark" @add-props="addProps" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: options.order.split(':')[0] === '1' }"
                  @click.prevent="setOrder('1')"
                >
                  <!-- 
                    综合和价格两个按钮的样式
                      综合
                        图标字体
                          1.引入字体
                          2.引入css样式
                          3.加载css样式
                      价格
                        只有一个图标是全的，另一个是有透明度的

                      需求
                        1.点击综合，综合按钮有active样式，价格按钮没有
                          样式使用对象添加
                          根据order的值来确定是否添加
                        2.第二次点击综合，改变综合按钮的图标
                          两个图标
                            绑定同一个变量
                          第二次点击时改变isAllDown的驱之
                            第二次
                        3.价格按钮
                            在没有active时两个图标都是有透明度的的
                            在有active时，才根据情况确定是否透明
                   -->
                  <a>
                    综合
                    <i
                      :class="{
                        iconfont: true,
                        'icon-direction-down': isAllDown,
                        'icon-direction-up': !isAllDown,
                      }"
                    ></i>
                  </a>
                </li>
                <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                </li>
                <li
                  :class="{ active: options.order.split(':')[0] === '2' }"
                  @click="setOrder('2')"
                >
                  <a class="price">
                    价格
                    <span>
                      <i
                        :class="{
                          iconfont: true,
                          'icon-arrow-up-filling': true,
                          deactive:
                            options.order.split(':')[0] === '2' && isPriceDown,
                        }"
                      ></i>
                      <!-- 
                        前面为true，不会执行后面
                          选中综合按钮时，都不要激活，都是false，如果是&&的话就不会执行后面的了
                          选中价格按钮时，根据变量确定，有一个是true，有一个是false
                        前面为false，就执行后面
                       -->
                      <i
                        :class="{
                          iconfont: true,
                          'icon-arrow-down-filling': true,
                          deactive:
                            options.order.split(':')[0] === '2' && !isPriceDown,
                        }"
                      ></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 
            点击图片跳转到Detail路由
            配置路由
            引入组件
              将组件引入到配置路由中
              需要请求参数，请求参数是params参数

            点击图片，从点击处传入路由参数，每一条的路由参数是确定的，请求时要直接确定好我点击这个时传入的路由参数是什么，就会去选择对应的数据了
           -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link
                      :to="{
                        name: 'detail',
                        params: { id: goods.id },
                      }"
                    >
                      <img :src="goods.defaultImg" />
                    </router-link>
                    <!-- <a href="item.html" target="_blank"
                      ><img :src="goods.defaultImg"
                    /></a> -->
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ goods.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div>
                <span>共{{ totalPages }}页&nbsp;</span>
              </div>
            </div>
          </div> -->
          <!-- 
              一共有多少数据
              点击跳转到对应页
              下拉选择一共每页显示多少条数据
           -->
          <!-- <el-pagination
            background
            layout="prev, pager, next, sizes, jumper"
            :page-sizes="[5, 10, 15, 20]"
            :size-change="handleSizeChange"
            :total="total"
            @current-change="handleCurrentChange"
          >
          </el-pagination> -->
          <!-- <Pagination :total="100" :page-size="10"></Pagination> -->
          <!-- 
        如果传入的total较少，即只需要1个页面就能够显示
       -->
          <Pagination
            @current-change="handleCurrentChange"
            :total="total"
            :page-size="options.pageSize"
            :pager-count="11"
            :current-page="options.pageNo"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";

import TypeNav from "@comps/TypeNav";

import Pagination from "@comps/Pagination";

import { mapGetters, mapActions } from "vuex";

/* 
  成功渲染后台请求的数据
    1.请求
      api接口
      导入函数进行请求
    
    2.搜索
      1.文本框输入拖鞋，则params为拖鞋并用这个去请求数据
        1.再点击具体商品时，修改query参数
      2.文本框没有内容时，则显示所有数据
      3.在首页点击商品时，有query参数
        此时再输入文本进行搜索，则添加params参数

    3.面包屑展示

    4.在非search组件中用push，在search组件中用replace

    5.排序
      综合排序
        把order作为参数拿去请求
*/
export default {
  name: "Search",
  data() {
    return {
      /* 
        请求参数，传入这些参数进行请求，根据参数得到相应的数据
          放到地址栏/不放到地址栏
        点击修改地址栏路径，根据路由的不同来显示不同的页面
        根据参数来获取到不同的数据，然后根据这里请求到的数据来渲染
        参数不同只是确定了请求回来的数据不同
       */
      isAllDown: true,
      isPriceDown: true,
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 5,
        props: [],
        trademark: "",
      },
    };
  },
  computed: {
    ...mapGetters(["goodsList", "totalPages", "total"]),
  },
  methods: {
    ...mapActions(["getProductList"]),
    /* 
      修改请求参数然后进行请求
    */
    updateAndRequest() {
      const {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
      const { searchText: keyword } = this.$route.params;
      /*
      这里只是收集了地址栏上面的数据然后作为参数传入进行请求
      先是有请求参数数据，然后才是把参数放到地址栏上，要把哪些参数放到地址栏上是可以自己确定的
    */
      const options = {
        ...this.options,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
        keyword,
      };
      this.options = options;
      this.getProductList(this.options);
    },
    /* 
      点击keyword的×时删除
        把options上的keyword置为空，params也要置为空
    */
    delKeyword() {
      this.options.keyword = "";
      /* 
        $route上的属性是只读的，不能修改，所以使用push或replace来改变路由地址
        此时还需要把文本置空：全局事件总线
          Header绑定
          Search触发
      */
      this.$bus.$emit("clearKeyword");
      this.$router.replace({
        name: "search",
        // 因为是要去掉路由参数，所以保留query参数
        query: this.$route.query,
      });
    },
    delCategoryName() {
      this.options.categoryName = "";
      /* 
        $route上的属性是只读的，不能修改，所以使用push或replace来改变路由地址
        此时还需要把文本置空：全局事件总线
          Header绑定
          Search触发
      */
      this.$router.replace({
        name: "search",
        // 因为是要去掉路由参数，所以保留query参数
        params: this.$route.params,
      });
    },
    /* 
      点击品牌的函数
        发请求
          拿到品牌数据，修改请求参数进行请求
        把函数传给子组件
          修改请求参数
        把所选品牌添加到分类中
    */
    addTrademark(trademark) {
      // console.log(trademark);
      this.options.trademark = trademark;
      this.updateAndRequest();
    },
    /*
      删除面包屑分类trademark 
     */
    delTrademark() {
      this.options.trademark = "";
      this.updateAndRequest();
    },

    /* 
      点击属性
      修改请求参数
        是一个数组
      添加属性面包屑分类
    */
    addProps(props) {
      this.options.props.push(props);
      this.options.pageNo = 1;
      console.log(this.options.pageNo);
      this.updateAndRequest();
    },
    /* 
      删除属性面包屑
      将该项元素从数组中删除
        使用splice
    */
    delProp(index) {
      this.options.props.splice(index, 1);
      this.updateAndRequest();
    },

    /* 
      点击按钮：综合和价格
    */
    setOrder(order) {
      /* 
        把order传进来，在options上使用新的数值
        修改orderType
      */
      let [orderNumber, orderType] = this.options.order.split(":");
      this.options.order = order + ":" + orderType;
      if (order === orderNumber) {
        /* 
          相等表示是第二次点击
        */
        if (order === "1") {
          this.isAllDown = !this.isAllDown;
          orderType = this.isAllDown ? "desc" : "asc";
        } else {
          this.isPriceDown = !this.isPriceDown;
          orderType = this.isPriceDown ? "desc" : "asc";
        }
      } else {
        if (order === "2") {
          this.isPriceDown = false;
          orderType = "asc";
        } else {
          orderType = this.isAllDown ? "desc" : "asc";
        }
      }
      console.log(orderType);
      this.options.order = order + ":" + orderType;
      this.updateAndRequest();
    },
    /* 
      分页器点击目标页
        页面要跳转到目标页
    */
    // handleCurrentChange(val) {
    //   // console.log(val);
    //   this.options.pageNo = val;
    //   this.updateAndRequest();
    // },
    /* 选择每页显示多少条数据 */
    handleSizeChange(pageSize) {
      console.log("pageSize", pageSize);
    },

    /* 这个方法是要传到分页器组件中去使用的，传入页码，改变页码，用新的页码重新去请求 */
    handleCurrentChange(pageNo) {
      this.options.pageNo = pageNo;
      this.updateAndRequest();
    },
  },
  components: {
    SearchSelector,
    TypeNav,
    Pagination,
  },
  watch: {
    $route: {
      /* 
        监视到$route的变化就会重新发送请求
      */
      handler() {
        this.updateAndRequest();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
                span {
                  // height: 30px;
                  // width: 30px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  line-height: 8px;
                  .deactive {
                    color: rgba(255, 255, 255, 0.5);
                  }
                }
              }
              a.price {
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: space-around;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>