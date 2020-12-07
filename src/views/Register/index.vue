<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去
          <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <!-- 
          插槽，将标签数据传入到ValidationProvider组件中
          获取从子组件中传过来的对象数据
          多个规则
         -->
        <ValidationProvider rules="length|phone" v-slot="{ errors }">
          <!-- 
            收集表单数据，对收集到的这个数据进行校验，这个数据需要在data中，v-model绑定vuex中的数据需要显示的双向绑定
            注册的这些数据只在注册这个组件中使用到，所以不需要放到vuex中去管理
           -->
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="user.code" />
        <img
          ref="code"
          src="http://182.92.128.115/api/user/passport/code"
          alt="code"
          @click="changeCodeImg"
        />
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="content">
        <label>登录密码:</label>
        <!-- 
          密码文本框失去焦点时会自动填入密码
          数据，因为是要发送请求的，所以要把数据放在vuex中进行管理
         -->
        <ValidationProvider rules="password" v-slot="{ errors }">
          <input
            type="password"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <!-- 
          vee确认
            拿到密码
            比较
          失去焦点时触发
         -->
        <label>确认密码:</label>
        <input
          type="password"
          placeholder="请输入确认密码"
          v-model="user.passwordAck"
          @input="sameOrNot"
        />
        <span class="error-msg" v-show="user.passwordAck && isSame"
          >密码不一致</span
        >
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="isAgree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="btn">
        <button @click="submit">完成注册</button>
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
    表单校验，校验表单中数据是否符合某个规则
      vee-validate
        基本使用
          引入组件
          注册组件
          使用组件
            把要被校验的表单项用组件包裹起来
          添加规则
            成功
            失败
      校验密码
        6-13位
        必须有数字，小写字母，大写字母
      验证码校验
        数据是后台返回的，可以不需要在前端进行校验
        点击验证码图片，发送请求更新验证码
      点击注册

*/
import { ValidationProvider, extend } from "vee-validate";

// import { mapState } from "vuex";

/* 
  放在实例中
  第二个参数
    对象
    方法
*/
extend("length", {
  // 用于校验的方法
  validate: (value) => {
    /* 
      如果该校验方法返回true，则errors[0]没有内容，也就不会渲染
      如果该校验方法返回false或没有返回值，则errors[0]显示的就是message的内容
    */
    if (value.length === 11) {
      // 如果返回的是true的话，就不会显示在页面上；如果返回的是字符串的话就会显示在页面上
      return true;
    }
  },
  // 校验失败的提示信息
  message: "手机号11位",
});
// 符合应用商的手机号
extend("phone", {
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
// 校验密码
extend("password", {
  // 用于校验的方法
  validate: (value) => {
    /* 
      至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
    */
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(value)) {
      // 如果返回的是true的话，就不会显示在页面上；如果返回的是字符串的话就会显示在页面上
      return true;
    }
  },
  // 校验失败的提示信息
  message: "密码不规范",
});

/*
    注册
      收集到数据，拿到相应的参数进行请求
      在拿数据时需要对数据进行校验
      确认密码
*/
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        password: "",
        passwordAck: "",
        code: "",
      },
      isSame: false,
      isAgree: true,
    };
  },
  components: {
    ValidationProvider,
  },
  methods: {
    // 确认密码框中的密码和密码框中的密码是否相同
    sameOrNot() {
      this.isSame = this.user.password !== this.user.passwordAck;
    },
    // 点击验证码图片更新验证码
    changeCodeImg() {
      /* 
        重新发送请求
      */
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
    },
    // 点击注册按钮
    async submit() {
      /* 
        1.把user中的数据解构出来
        2.文本框不能为空，复选框要选中
          使用elementui的Message组件
        3.需要发送请求，在vuex中处理
          触发action中的函数
          登录成功之后就跳转到登录
          注册的号码是否存在需要你告诉我
      */
      try {
        const { phone, password, passwordAck, code } = this.user;
        if (!phone || !password || !passwordAck || !code) {
          this.$message.error("文本不能为空");
          return;
        }
        if (!this.isAgree) {
          this.$message.error("请同意协议再行注册");
          return;
        }
        await this.$store.dispatch("registerAction", { phone, password, code });
        this.$router.replace("/login");
      } catch {
        // 如果失败，要将密码文本框和验证码文本框置为空，并且重新获取验证码
        this.user.password = "";
        this.user.passwordAck = "";
        this.user.code = "";

        this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
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