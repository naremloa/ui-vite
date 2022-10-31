import { App } from 'vue';
import 'uno.css';

import AdButton from './button';

// 导出单独组件
export { AdButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.use(AdButton);
  },
};
