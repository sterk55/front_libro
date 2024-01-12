<template>
<h1>Bienvenido!!</h1>
<br>
<h2>Seleccione la opcion que desea realizar</h2>
<br>
<br>
<table>
    <tr>
        <td><h3 @click="sendToCreate">Crear Libro</h3></td>
        <td><h3 @click="sendToMostrarAll">Mostrar todos los libros</h3></td>
        <td><h3 @click="sendToId" >Buscar Libro por Id</h3></td>
        
    </tr>
</table>
</template>

<script>
import router from '@/router/router';

export default {
    methods:{
        sendToCreate(){
            router.push('/crear')
        },
        sendToMostrarAll(){
            router.push('/mostrar')
        },
        sendToId(){
            router.push('/buscarID')
        }

    }

}

</script>

<style>
table{
    margin: 0 auto;
  }

h3{
    margin: 0 30px;
}
</style>