export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  }, 
  {
    path: '/login',
    name: 'login-page',
    component: require('components/Login')
  }, 
  {
    path: '/meu-dia',
    name: 'my-day-page',
    component: require('components/MyDay')
  }, 
  {
    path: '/projetos',
    name: 'content-page',
    component: require('components/ContentPage')
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
