<template>
  <div class="home">
    <!-- 红线上的大类分类 -->
    <BigCategory />
    <!-- 轮播图这一整行 -->
    <AllCategories />
  </div>
</template>

<script>
/*
   1.划分组件
      红线上方
      轮播图这一整行
        左边商品详情
        轮播图
        右边快报
      今日推荐
      热卖
*/
import BigCategory from "./BigCategory/index.vue";

import AllCategories from "./AllCategories/index.vue";

export default {
  name: "Home",
  data() {
    return {
      allCategories: [
        {
          id: 1,
          includes: "图书、音像、数字商品",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "小说",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "励志与成功",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "婚恋/两性",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "文学",
                },
                {
                  id: 1 - 1 - 6,
                  path: "#",
                  name: "经营",
                },
                {
                  id: 1 - 1 - 7,
                  path: "#",
                  name: "畅读vip",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "数字音乐",
              detailCategory: [
                {
                  id: 1 - 2 - 1,
                  path: "#",
                  name: "通俗流行",
                },
                {
                  id: 1 - 2 - 2,
                  path: "#",
                  name: "古典音乐",
                },
                {
                  id: 1 - 2 - 3,
                  path: "#",
                  name: "摇滚说唱",
                },
                {
                  id: 1 - 2 - 4,
                  path: "#",
                  name: "爵士蓝调",
                },
                {
                  id: 1 - 2 - 5,
                  path: "#",
                  name: "乡村民谣",
                },
                {
                  id: 1 - 2 - 6,
                  path: "#",
                  name: "有声读物",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "音像",
              detailCategory: [
                {
                  id: 1 - 3 - 1,
                  path: "#",
                  name: "音乐",
                },
                {
                  id: 1 - 3 - 2,
                  path: "#",
                  name: "影视",
                },
                {
                  id: 1 - 3 - 3,
                  path: "#",
                  name: "教育音像",
                },
                {
                  id: 1 - 3 - 4,
                  path: "#",
                  name: "游戏",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "文艺",
              detailCategory: [
                {
                  id: 1 - 4 - 1,
                  path: "#",
                  name: "小说",
                },
                {
                  id: 1 - 4 - 2,
                  path: "#",
                  name: "文学",
                },
                {
                  id: 1 - 4 - 3,
                  path: "#",
                  name: "青春文学",
                },
                {
                  id: 1 - 4 - 4,
                  path: "#",
                  name: "传记",
                },
                {
                  id: 1 - 4 - 5,
                  path: "#",
                  name: "艺术",
                },
              ],
            },
            {
              id: 1 - 5,
              detailName: "人文社科",
              detailCategory: [
                {
                  id: 1 - 5 - 1,
                  path: "#",
                  name: "历史",
                },
                {
                  id: 1 - 5 - 2,
                  path: "#",
                  name: "心理学",
                },
                {
                  id: 1 - 5 - 3,
                  path: "#",
                  name: "政治/军事",
                },
                {
                  id: 1 - 5 - 4,
                  path: "#",
                  name: "国学/古籍",
                },
                {
                  id: 1 - 5 - 5,
                  path: "#",
                  name: "哲学/宗教",
                },
                {
                  id: 1 - 5 - 6,
                  path: "#",
                  name: "社会科学",
                },
              ],
            },
            {
              id: 1 - 6,
              detailName: "经管励志",
              detailCategory: [
                {
                  id: 1 - 6 - 1,
                  path: "#",
                  name: "经济",
                },
                {
                  id: 1 - 6 - 2,
                  path: "#",
                  name: "金融与投资",
                },
                {
                  id: 1 - 6 - 3,
                  path: "#",
                  name: "管理",
                },
                {
                  id: 1 - 6 - 4,
                  path: "#",
                  name: "励志与成功",
                },
              ],
            },
            {
              id: 1 - 7,
              detailName: "生活",
              detailCategory: [
                {
                  id: 1 - 7 - 1,
                  path: "#",
                  name: "家庭与育儿",
                },
                {
                  id: 1 - 7 - 2,
                  path: "#",
                  name: "旅游/地图",
                },
                {
                  id: 1 - 7 - 3,
                  path: "#",
                  name: "烹饪/美食",
                },
                {
                  id: 1 - 7 - 4,
                  path: "#",
                  name: "时尚/美妆",
                },
                {
                  id: 1 - 7 - 5,
                  path: "#",
                  name: "家居",
                },
                {
                  id: 1 - 7 - 6,
                  path: "#",
                  name: "婚恋与两性",
                },
                {
                  id: 1 - 7 - 7,
                  path: "#",
                  name: "娱乐与休闲",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          includes: "家用电器",
          detail: [
            {
              id: 2 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 2 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 2 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 2 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 2 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 2 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 2 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 2 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 2 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          includes: "手机、数码、充值",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          includes: "电脑、办公",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          includes: "服饰内衣",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 6,
          includes: "个护化妆",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 7,
          includes: "运动健康",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 8,
          includes: "汽车用品",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 9,
          includes: "彩票、众筹",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 10,
          includes: "母婴、玩具",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 11,
          includes: "箱包",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
        {
          id: 12,
          includes: "运动户外",
          detail: [
            {
              id: 1 - 1,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 2,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 3,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
            {
              id: 1 - 4,
              detailName: "电子书",
              detailCategory: [
                {
                  id: 1 - 1 - 1,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 2,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 3,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 4,
                  path: "#",
                  name: "免费",
                },
                {
                  id: 1 - 1 - 5,
                  path: "#",
                  name: "免费",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    BigCategory,
    AllCategories,
  },
};
</script>

<style>
</style>
