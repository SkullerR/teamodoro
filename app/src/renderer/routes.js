export default [
  {
    path: '/',
    name: 'login-view',
    component: require('components/LoginView')
  }, 
  {
    path: '/meu-dia',
    name: 'my-day-page',
    component: require('components/MyDay')
  }, 
  {
    path: '/configuracoes',
    name: 'config-page',
    component: require('components/Config')
  }
  
  //,
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]
