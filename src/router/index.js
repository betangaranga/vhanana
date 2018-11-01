import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Catalogo from '@/components/Catalogo'
import Servicios from '@/components/Servicios'
import Contactanos from '@/components/Contactanos'
import Conocenos from '@/components/Conocenos'

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '*',
      redirect: '/Home'
    },
    {

      path: '/Home',
      name: 'Home',
      component:Home,
          children: [

        {
        path: "Catalogo",
        component: Catalogo
      },
      {
        path:"Servicios",
        component:Servicios

      },
      {
        path:"Contactanos",
        component:Contactanos

      },
      {
        path:"Conocenos",
        component:Conocenos
      }

    ]
    }
  ]
})
  
export default router
