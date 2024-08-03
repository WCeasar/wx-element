import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "./style.css";
import "./styles/index.css";
import App from "./App.vue";

createApp(App).mount("#app");
