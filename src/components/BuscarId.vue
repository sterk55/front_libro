<template>
    <div>
        <h1>Ingrese el Id el cual quiere buscar</h1>  
    </div>
    <br>
    <table>
        <tr>
            <td><label for="">Ingrese el ID: </label></td>
            <td><input required v-model="id" type="text"></td>
        </tr>
    </table>
    <br>
    <table>
        <tr>
            <td><button @click="mostrarLista()">Buscar Libro</button></td>
        </tr>
    </table>

    <fieldset>
        <div >
            <table class="tablasP">
                <thead>
                    <tr>
                        <th class="bonito" scope="col">ID</th>
                        <th class="bonito" scope="col">isbn</th>
                        <th class="bonito" scope="col">autor</th>
                        <th class="bonito" scope="col">titulo</th>
                        <th class="bonito" scope="col">precio</th>
                        <th class="bonito" scope="col">Editar</th>
                        <th class="bonito" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="bonito">{{ lista.id }}</th>
                        <td class="bonito"> {{ lista.isbn }}</td>
                        <td class="bonito">{{ lista.autor }}</td>
                        <td class="bonito">{{ lista.titulo }}</td>
                        <td class="bonito">{{ lista.precio }}</td>
                        <td class="bonito"><a id="idEditar" @click="editarLib(lista.id, lista.isbn, lista.autor, lista.titulo, lista.precio)">Editar</a></td>
                        <td class="bonito"><a id="idEliminar" @click="alerta(lista.id)">Eliminar</a></td>


                    </tr>
                </tbody>


            </table>
        </div>
    </fieldset>
</template>

<script>
import { eliminarLibId, buscarLibId } from '@/js/ProcesarLibro';

export default {

    data(){
        return{
            lista:[],
            mostrarB: false,
            mensaje:null,
            id:null
        }
    },
    methods:{
        async mostrarLista(){
            this.lista = await buscarLibId(this.id)
            console.log(this.lista)
            console.log(this.lista.length)
            if(this.lista.length >=1){
                this.mostrarB = true
                this.mensaje = ""
                console.log("tpm")
            }else{
                this.mostrarB = false
                this.mensaje = "No existe Libro"
                console.log("tpm2")

            }
        },
        async LibEliminar(id){
            await eliminarLibId(id)
            alert("Se ha eliminado correctamente")
            location.reload()
        },
        alerta(id){
            var opcion = confirm("Desea eliminar el libro con id: " + id)
            
            if(opcion == true){
                this.LibEliminar(id)
                
            }else{
                alert("No se ha eliminado nada")
            }
        },
        editarLib(id, isbn, autor, titulo, precio){
            this.$router.push({name: "editar", params:{ids: id, isbns:isbn, autors: autor, titulos:titulo, precios:precio}})
        }
    }
    }



</script>

<style>
table{
    margin: 0 auto;
  }
  .tablasP{
      margin: 0 auto;
      border: 1px solid #000;
      width: 80%;
  }
  .bonito{
     width: 18%;
     text-align: left;
     vertical-align: top;
     border: 1px solid #000;
     border-collapse: collapse;
     padding: 0.3em;
     caption-side: bottom;
  }
  th {
     background: #dadada;
  }
  
  #idEditar,#idCertificados{
      color: blue;
      text-decoration: underline;  
      cursor: pointer; 
  }
  #idEliminar{
      color: red;
      text-decoration: underline;  
      cursor: pointer;  
  }
</style>
