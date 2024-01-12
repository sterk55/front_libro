import axios from "axios"

export const InsertarLib = async (body) => {
    return await insertar(body)
}

export const listaLibTodos = async () => {
    return await listaLib()
}

export const eliminarLibId = async (id) => {
    return await eliminar(id)

}

export const buscarLibId = async (id) => {
    return await buscarDLibroPorID(id)
}

export const actualizarLib = async (id, body) => {
    return await actualizar(id, body)
}




const insertar = async (body) => {

    const data = axios.post(`http://localhost:8080/books`, body).then(r=> r.data)
    return data

}

const listaLib = async () =>{
    const data = axios.get(`http://localhost:8080/books`).then(r => r.data)
    console.log(data);
    return data
}

const eliminar = async (id) =>{
    const data = axios.delete(`http://localhost:8080/books/${id}`).then(r => r.data)
    return data
}

const buscarDLibroPorID = async (id) =>{
    const data = axios.get(`http://localhost:8080/books/${id}`).then(r => r.data)
    return data
}

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8080/books/${id}`, body).then(r => r.data)

}