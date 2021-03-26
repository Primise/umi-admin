import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  hash:true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
