import Vue from "vue";
import { Button, Pagination, Message, MessageBox} from "element-ui";

Vue.use(Button);
Vue.use(Pagination);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
