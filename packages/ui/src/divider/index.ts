import AdDivider from './divider.vue';
import { App } from 'vue';
import 'uno.css';

export { AdDivider };

export default {
  install(app: App) {
    app.component(AdDivider.name, AdDivider);
  },
};
