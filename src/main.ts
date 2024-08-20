import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "./router/";
import store from "./store/";
import { createApp } from "vue";
import App from "./App.vue";



const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
