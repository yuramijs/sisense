const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/table',
      load: () => import(/* webpackChunkName: 'table' */ './table'),
    }
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Test'} - Test`;
    route.description = route.description || '';

    return route;
  },
};

if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
