<template>
  <div class="pagination">
    <!-- 
          第一个按钮和最后一个按钮
          当按钮总数为9时，中间按钮的数量为7个
          只有一个页面时,只显示1，不显示遍历的按钮
          大于1个页面时
            currentPage高亮显示
        
            使用动态数据
            点击显示对应页的数据
       -->
    <button
      class="arrow prev"
      @click="myCurrentPage = myCurrentPage - 1"
      :disabled="myCurrentPage === 1"
    >
      上一页
    </button>
    <button
      v-show="startEnd.end - startEnd.start + 1 >= 0"
      :class="{ active: 1 === myCurrentPage }"
      @click="setCurrentPage(1)"
    >
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      :class="{ active: startEnd.start + item - 1 === myCurrentPage }"
      @click="setCurrentPage(startEnd.start + item - 1)"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPage - 1">...</button>
    <button
      :class="{ active: totalPage === myCurrentPage }"
      @click="setCurrentPage(totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      class="arrow next"
      @click="myCurrentPage = myCurrentPage + 1"
      :disabled="myCurrentPage === totalPage"
    >
      下一页
    </button>
    <button class="total">共{{ total }}条</button>
  </div>
</template>

<script>
/*
    1.布局
        pagercount=7
        一共有多少条数据
        每一页有多少条数据
            10
        一共有多少页
        我当前处在哪一页
    2.情况一
        左右两边都有省略号
        pagercount要传进来
        去掉一头一尾
        点击某一页，要显示该页面前后n页
            点5 显示 3 4 5 6 7
            n = Math.floor((pagerCount - 2) / 2)
        要确定中间部分的开始页和结束页的坐标
            点击改变当前页，以此来确定start和end的坐标
        共100页的数据，pagerCount=9，那么中间显示页码的按钮就有7个，
        如果当前页时1，那么就显示 1 2 3 4 5 6 7 8 ... 10 start = 2 end = 8
        如果当前页时2，那么就显示 1 2 3 4 5 6 7 8 ... 10 start = 2 end = 8
        如果当前页时3，那么就显示 1 2 3 4 5 6 7 8 ... 10 start = 2 end = 8
        如果当前页时4，那么就显示 1 2 3 4 5 6 7 8 ... 10 start = 2 end = 8
        如果当前页时5，那么就显示 1 ... 3 4 5 6 7 8 9 10 start = 3 end = 9
        根据当前页得到start和end，根据start和end来确定省略号在哪里，中间一定显示的是7个按钮(数据量足够多)
    3.点击分类时，当前页要变回第一页
*/
export default {
  name: "Pagination",
  data() {
    return {
      myCurrentPage: this.currentPage,
    };
  },
  props: {
    // 总共的数据量
    total: {
      type: Number,
      defalut: 0,
    },
    // 每页的数据量
    pageSize: {
      type: Number,
      default: 10,
    },
    pagerCount: {
      /*
        每一页的按钮一定是奇数，所以需要进行校验
            要大于等于5且小于等于21的奇数
      */
      type: Number,
      default: 7,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
    },
    /* 
        后续还可以选择去哪一页，所以真正的当前页应该是响应式的
    */
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // 根据当前页计算开始页和结束页的坐标
    setCurrentPage(item) {
      this.myCurrentPage = item;
    },
  },
  watch: {
    // 点击页码，显示对应页的数据
    myCurrentPage(val) {
      /*点击页码按钮，当前页码就变了，可以监视当前页码，如果页码变了就触发从父组件传过来的函数改变请求页码请求参数*/
      this.$emit("current-change", val);
    },
    // 比如当第三页高亮时点击分类按钮时不会重新回到第一页，所以需要监视currentPage的变化
    currentPage(val) {
      this.myCurrentPage = val;
    },
  },
  computed: {
    // 需要遍历的按钮数
    mapBtnsCount() {
      const { start, end } = this.startEnd; // 调用实例上的方法不需要人为的主动加括号进行调用
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
    // 根据总数据量和每页的数据量算出总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 根据当前页计算start和end，所以使用计算属性
    startEnd() {
      /*
        总按钮数大于总页数
        总按钮数等于总页数
        总按钮数小于总页数
    */
      let start, end;
      const halfCount = Math.floor((this.pagerCount - 2) / 2);
      const ceil = Math.ceil(this.total / this.pageSize) - 1;

      // 当总按钮数少于总页数的情况
      if (this.pagerCount <= ceil) {
        // 根据当前页计算start和end
        // 两边都有省略号
        start = this.myCurrentPage - halfCount;
        end = this.myCurrentPage + halfCount;

        if (start < 2) {
          // 左边没有省略号
          start = 2;
          end = start + halfCount * 2;
        }
        if (end > ceil) {
          // 右边没有省略号
          end = ceil;
          start = end - halfCount * 2;
        }
      } else {
        // 总按钮数大于等于总页数
        start = 2;
        end = ceil;
      }
      return {
        start,
        end,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  button {
    width: 28px;
    height: 28px;
    border: none;
    outline: none;
    margin: 0 5px;
    padding: 0 4px;
    border-radius: 2px;
  }
  button:hover {
    cursor: pointer;
  }
  button.arrow {
    width: auto;
    padding: 1px 5px;
  }
  button.active {
    background: #409eff;
    color: #fff;
  }
  button.total {
    width: auto;
    padding: 0 3px;
  }
}
</style>
