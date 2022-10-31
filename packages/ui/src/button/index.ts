import AdButton from './button.vue';
import { App } from 'vue';
import 'uno.css';

export { AdButton };

export default {
  install(app: App) {
    app.component(AdButton.name, AdButton);
  },
};
