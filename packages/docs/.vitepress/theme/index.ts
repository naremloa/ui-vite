import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import AdminUI from '@admin/ui';
import '@admin/ui/dist/assets/admin-ui.css';

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(AdminUI);
  },
};
export default theme;
