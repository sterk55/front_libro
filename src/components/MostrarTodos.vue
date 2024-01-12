<template>
    <div>
        <h1>A continuacion se muestran todos los libros registrados</h1>
    </div>
    <br>
    <fieldset>
        <div v-if="mostrarB">
            <table class="tablasP">
                <thead>
                    <tr>
                        <th class="bonito" scope="col">
                            ID
                        </th>
                        <th class="bonito" scope="col">Isbn</th>
                        <th class="bonito" scope="col">Autor</th>
                        <th class="bonito" scope="col">Titulo</th>
                        <th class="bonito" scope="col">Precio</th>
                        <th class="bonito" scope="col">Editar</th>
                        <th class="bonito" scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="l in lista" v-bind:key="l" >
                        <th class="bonito">{{ l.id }}</th>
                        <td class="bonito"> {{ l.isbn }}</td>
                        <td class="bonito">{{ l.autor }}</td>
                        <td class="bonito">{{ l.titulo }}</td>
                        <td class="bonito">{{ l.precio }}</td>
                        <td class="bonito"><a id="idEditar" @click="editarLib(l.id, l.isbn, l.autor, l.titulo, l.precio)">Editar</a></td>
                        <td class="bonito"><a id="idEliminar" @click="alerta(l.id)">Eliminar</a></td>


                    </tr>
                </tbody>


            </table>
        </div>
    </fieldset>
    <br>
    <label for="">{{ mensaje }}</label>
</template>

<script>
import { listaLibTodos, eliminarLibId } from '@/js/ProcesarLibro';

export default {

    data(){
        return{
            lista: [],
            mostrarB: false,
            mensaje: null
        }
    },
    methods: {
        async mostrasLista(){
            this.lista = await listaLibTodos()
            console.log(this.lista)
            console.log(this.lista.length)
            if(this.lista.length == 0){
                this.mensaje = "No hay Libros ingresados"
                this.mostrarB = false
            }else{
                this.mostrarB = true
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
        editarPer(id, isbn, autor, titulo, precio){
            this.$router.push({name: "editar", params:{ids: id, isbns:isbn, autors:autor, titulos:titulo , precios:precio}})
        }
    },
    mounted(){
        this.mostrasLista()
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