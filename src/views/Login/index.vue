<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0">扫描登录</a>
            </li>
            <li>
              <a href="##" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <form action="##" @submit.prevent="loginSubmit">
              <ValidationProvider rules="phoneLogin" v-slot="{ errors }">
                <div class="input-text clearFix">
                  <span></span>
                  <input
                    type="text"
                    placeholder="邮箱/用户名/手机号"
                    v-model="user.phone"
                  />
                  <i>{{ errors[0] }}</i>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="passwordLogin" v-slot="{ errors }">
                <div class="input-text clearFix">
                  <span class="pwd"></span>
                  <input
                    type="password"
                    placeholder="请输入密码"
                    v-model="user.password"
                  />
                  <i>{{ errors[0] }}</i>
                </div>
              </ValidationProvider>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" v-model="isAutoLogin" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" type="submit">登&nbsp;&nbsp;录</button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt="" /></li>
                <li><img src="./images/sina.png" alt="" /></li>
                <li><img src="./images/ali.png" alt="" /></li>
                <li><img src="./images/weixin.png" alt="" /></li>
              </ul>
              <router-link class="register" to="/register"
                >立即注册</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
/* 
  校验
    校验手机号
    绑定到data中的数据
    还要发送请求
*/
import { ValidationProvider, extend } from "vee-validate";

import { mapState } from "vuex";

// 手机号校验
extend("phoneLogin", {
  // 用于校验的方法
  validate: (value) => {
    /* 
      如果该校验方法返回true，则errors[0]没有内容，也就不会渲染
      如果该校验方法返回false或没有返回值，则errors[0]显示的就是message的内容
    */
    if (
      /^1(3\d|4[5-8]|5[0-35-9]|6[567]|7[01345-8]|8\d|9[025-9])\d{8}$/.test(
        value
      )
    ) {
      // 如果返回的是true的话，就不会显示在页面上；如果返回的是字符串的话就会显示在页面上
      return true;
    }
  },
  // 校验失败的提示信息
  message: "手机号不规范",
});

// 密码校验
extend("passwordLogin", {
  // 用于校验的方法
  validate: (value) => {
    /* 
      至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
    */
    if (/\d{5,8}/.test(value)) {
      // 如果返回的是true的话，就不会显示在页面上；如果返回的是字符串的话就会显示在页面上
      return true;
    }
  },
  // 校验失败的提示信息
  message: "密码不规范",
});
export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      isLogining: false,
      isAutoLogin: true,
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  created() {
    if (this.isAutoLogin && this.token) {
      this.$router.replace("/");
    }
  },
  methods: {
    // 提交登录表单
    async loginSubmit() {
      /* 
        发送请求，dispatch触发action函数
        请求成功，就跳转到首页
        如果手速过快连续多次点击登录按钮就会发送多个请求
          点击了一次登录，就把isLogining改为true
        默认情况下自动登录是选中的
          如果自动登录是选中状态的话，直接跳转到首页，相当于直接登录，要拿到token和name
          token和name是保存在浏览器中的
          把token和name保存在浏览器中，然后跳转到首页

          如果选择自动登录，则自动登录，拿到浏览器中的token和name
          退出登录时已经把vuex中的token和name置为空了，当再次点击登录时，如果浏览器中有token的话，就可以直接跳转到首页
          在login页面中，如果勾选了自动登录，并且有token的话，在路由到login页面时就能直接跳转到首页，在页面挂载成功时，判断是否自动登录和是否有token
      */

      try {
        if (this.isLogining) {
          return;
        }
        this.isLogining = true;

        const { phone, password } = this.user;

        await this.$store.dispatch("loginAction", { phone, password });
        // 登录成功就把name和token保存在浏览器中
        if (this.isAutoLogin) {
          localStorage.setItem("name", this.name);
          localStorage.setItem("token", this.token);
        }
        this.$router.replace("/");
      } catch {
        this.isLogining = false;
      }
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.login-container {
  .login-wrap {
    height: 487px;
    background-color: #e93854;

    .login {
      width: 1200px;
      height: 487px;
      margin: 0 auto;
      background: url(./images/loginbg.png) no-repeat;
    }

    .loginform {
      width: 420px;
      height: 406px;
      box-sizing: border-box;
      background: #fff;
      float: right;
      top: 45px;
      position: relative;
      padding: 20px;

      .tab {
        li {
          width: 50%;
          float: left;
          text-align: center;

          a {
            width: 100%;
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: 700;
            color: #333;
            border: 1px solid #ddd;
            box-sizing: border-box;
            text-decoration: none;
          }

          .current {
            border-bottom: none;
            border-top-color: #28a3ef;
            color: #e1251b;
          }
        }
      }

      .content {
        width: 380px;
        height: 316px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-top: none;
        padding: 18px;

        form {
          margin: 15px 0 18px 0;
          font-size: 12px;
          line-height: 18px;

          .input-text {
            margin-bottom: 16px;

            span {
              float: left;
              width: 37px;
              height: 32px;
              border: 1px solid #ccc;
              background: url(./images/icons.png) no-repeat -10px -201px;
              box-sizing: border-box;
              border-radius: 2px 0 0 2px;
            }

            .pwd {
              background-position: -72px -201px;
            }

            input {
              width: 302px;
              height: 32px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-left: none;
              float: left;
              padding-top: 6px;
              padding-bottom: 6px;
              font-size: 14px;
              line-height: 22px;
              padding-right: 8px;
              padding-left: 8px;

              border-radius: 0 2px 2px 0;
              outline: none;
            }
          }

          .setting {
            label {
              float: left;
            }

            .forget {
              float: right;
            }
          }

          .btn {
            background-color: #e1251b;
            padding: 6px;
            border-radius: 0;
            font-size: 16px;
            font-family: 微软雅黑;
            word-spacing: 4px;
            border: 1px solid #e1251b;
            color: #fff;
            width: 100%;
            height: 36px;
            margin-top: 25px;
            outline: none;
          }
        }

        .call {
          margin-top: 30px;

          ul {
            float: left;

            li {
              float: left;
              margin-right: 5px;
            }
          }

          .register {
            float: right;
            font-size: 15px;
            line-height: 38px;
          }

          .register:hover {
            color: #4cb9fc;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>