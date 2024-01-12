import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
{
    path: '/',
    component : () => import('../components/PaginaMain')

},
{
    path: '/crear',
    component : () => import('../components/CrearLibro')

},
{
    path: '/mostrar',
    component : () => import('../components/MostrarTodos')
},
{
    path: '/buscarID',
    component : () => import('../components/BuscarId')
},
{
    path: '/editar/:ids-:isbns-:autors-:titulos-:precios',
    name: 'editar',
    props: true,
    component : () => import('../components/EditarLibro')
}



]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router