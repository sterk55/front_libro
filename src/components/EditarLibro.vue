<template>
    <div>
        <h1>Editar Libro con ID: {{ ids }}</h1>
    </div>
    <br>
    <table>
        <tr>
            <td><label for="">Isbn: </label></td>
            <td><input type="text" required v-model="isbn" id="idIsbn"></td>
        </tr>
        <tr>
            <td><label for="">Autor: </label></td>
            <td><input type="text" required v-model="autor" id="idAutor"></td>
        </tr>
        <tr>
            <td><label for="">Titulo: </label></td>
            <td><input type="text" required v-model="titulo" id="idTitulo"></td>
        </tr>
        <tr>
            <td><label for="">Precio: </label></td>
            <td><input type="text" required v-model="precio" id="idPrecio"></td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button @click="actualizar()">Actualizar</button></td>
        </tr>
        <tr>
            <td><label for="">{{ mensaje }}</label></td>
        </tr>
    </table>
</template>

<script>

    import { actualizarLib } from '@/js/ProcesarLibro';

    export default {
        data(){
            return{
                isbn: null,
                autor: null,
                titulo: null,
                precio: null,
                mensaje: null
            }
        },
        props:{
            ids:null,
            isbns:{
                type:String
            },
            titulos:{
                type: String
            },
            autors:{
                type:String
            },
            precios:{
                type:String
            }
        },
        methods:{
            valoresDefinidos(){
                document.getElementById("idIsbn").value = this.isbns
                document.getElementById("idAutor").value = this.autors
                document.getElementById("idTitulo").value = this.titulos
                document.getElementById("idPrecio").value = this.precios

            },
            async actualizar(){
                const libro = {
                    id: this.ids,
                    isbn: this.isbn,
                    autor: this.autor,
                    titulo: this.titulo,
                    precio: this.precio
                };
                if(this.isbn == null ||
                    this.autor == null ||
                    this.titulo == null ||
                    this.precio == null){
                        this.mensaje = "Llene todos los parametros"
                    }else{
                        await actualizarLib(this.ids, libro);
                        this.isbn = null,
                        this.autor = null,
                        this.titulo = null,
                        this.precio = null,
                        this.mensaje = "Se ha actualizado correctamente"
                        this.regresar()

                    }
            },
            regresar(){
                this.$router.replace('/mostrar')
            }
        },
        mounted(){
            this.valoresDefinidos()
        }

    }



</script>
<style>
table{
    margin: 0 auto;
}
</style>