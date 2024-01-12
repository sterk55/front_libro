<template>
    <div>
        <h1>Ingrese los datos requeridos para la creacion</h1>
        <br>
        <table>
            <tr>
                <td><label for="">Isbn: </label></td>
                <td><input v-model="isbn" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Autor: </label></td>
                <td><input v-model="autor" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Titulo: </label></td>
                <td><input v-model="titulo" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Precio: </label></td>
                <td><input v-model="precio" required type="text"></td>
            </tr>
        </table>

        <table>
            <tr>
                <td><button @click="Insertar()">Ingresar Datos</button></td>
            </tr>
            <tr>
                <td><label for="">{{ mensaje }}</label></td>
            </tr>
        </table>
        
    </div>
</template>
<script>
import { InsertarLib } from '@/js/ProcesarLibro';

export default {

    data(){
        return {
            isbn: null,
            autor: null,
            titulo: null,
            precio: null,
            mensaje: null

        }
    },
    methods:{
        async Insertar(){
            const lib = {
                    isbn: this.isbn,
                    autor: this.autor,
                    titulo: this.titulo,
                    precio: this.precio
                };
             if(
                this.isbn == null ||
                this.autor == null ||
                this.titulo == null ||
                this.precio == null
             ){
                console.log("sdsd")
                this.mensaje = "Llene todos los parametros"
             }else{
                await InsertarLib(lib);
                this.mensaje = "Se ha ingresado correctamente",
                this.isbn == null,
                this.autor == null,
                this.titulo == null,
                this.precio == null
             }
        }
    }


}

</script>

<style>
table{
    margin: 0 auto;
  }

</style>