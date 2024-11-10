import React, { useEffect, useState } from "react";

export function Formularios() {
    const [content, setContent] = useState(<FormularioList showForm={showForm}/>);

    function showList() {
        setContent(<FormularioList  showForm={showForm} />);
    }

    function showForm(formulario) {
        setContent(<FormularioForm formulario={formulario} showList={showList}/>);
    }
    
    return (
       
        <div className="container my-5">
           { content}
        </div>
    )
}
function FormularioList(props){
    const [formularios, setFormularios] = useState([]);
    
    function fetchFormularios() {
        fetch("http://localhost:3004/formularios")
        .then((response) => {
            if (!response.ok){
                throw new Error("El Servidor no Responde");
            }
            
            return response.json()
        })
        .then((data) => {
            //console.log(data);
            setFormularios(data);
        })
        .catch((error) => console.log("Error: ", error));
    }
    //fetchFormularios();
    useEffect(() => fetchFormularios(), []);

    function deleteFormulario(id) {
        fetch("http://localhost:3004/formularios/" + id, {
            method: "DELETE"
            })
              .then((response) => response.json())
              .then((data) => fetchFormularios());
    }

    return (
           <>
                <h2 className="text-center mb-3">Lista de Usuarios</h2>
                <button onClick={() => props.showForm({})} type="button" className="btn btn-primary me-2">Crear</button>
                <button onClick={() => fetchFormularios()} type="button" className="btn btn-primary me-2">Refrescar</button>
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             formularios.map((formulario, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{formulario.id}</td>
                                            <td>{formulario.nombre}</td>
                                            <td>{formulario.edad}</td>
                                            <td>{formulario.correo}</td>
                                            <td>{formulario.createdAt}</td>
                                            <td style = {{width: "10px", whiteSpace: "nawrap"}}>
                                                <button onClick={() => props.showForm(formulario)} type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                                                <button onClick={() => deleteFormulario(formulario.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    );
                             })
                        }
                    </tbody>
                </table>
           </>
    );
}
function FormularioForm(props){
    const [errorMessage, setErrorMessage] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        // read form data
        const formData = new FormData(event.target);

        //convert formData to object
        const formulario = Object.fromEntries(formData.entries());

        // form validation
        if (!formulario.nombre || !formulario.edad || !formulario.correo){
            console.log("Por favor rellene todos los campos");
            setErrorMessage(
                <div className="alert alert-warning" role="alert">
                     Por favor rellene todos los campos
               </div>
            )
            return;
        } 

        if (props.formulario.id) {
            //update the product
           
            fetch("http://localhost:3004/formularios/" + props.formulario.id, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(formulario)
            })
            .then((response) => {
                if (!response.ok){
                    throw new Error("Network response was not OK");
                }
                return response.json()
            })
            
            .then((data) => props.showList())
            .catch((error) => {
                console.error("Error:", error);
            });

        }
        else { 
            //create a new product
            formulario.createdAt = new Date().toISOString().slice(0, 10);
            fetch("http://localhost:3004/formularios", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(formulario)
            })
            .then((response) => {
                if (!response.ok){
                    throw new Error("Network response was not OK");
                }
                return response.json()
            })
            
            .then((data) => props.showList())
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    }

    return (
           <>
                <h2 className="text-center mb-3">{props.formulario.id ? "Editar Usuario " 
                : "Crear nuevo Usuario" }</h2>
                
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        {errorMessage}
                        <form onSubmit={(event) => handleSubmit(event)}>
                           {props.formulario.id && <div className="row mb-3">
                                <label className="col-sm-8 col-form-label">ID</label>
                                <div className="col-sm-8">
                                    <input readOnly className="form-control-plaintext"
                                       name="id"
                                       defaultValue={props.formulario.id}/>
                                </div>
                            </div>}
                            <div className="row mb-3">
                                <label className="col-sm-8 col-form-label">Nombre</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                       name="nombre"
                                       defaultValue={props.formulario.nombre}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-8 col-form-label">Edad</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                       name="edad"
                                       defaultValue={props.formulario.edad}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-8 col-form-label">Correo</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                       name="correo"
                                       defaultValue={props.formulario.correo}/>
                                </div>
                            </div>

                            <div className="row">
                                
                                <div className="col-sm-4 d-grid">
                                     <button type="submit" className="btn btn-primary btn-sm me-3">Grabar</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <button onClick={() => props.showList()} type="button" className="btn btn-secundary me-2">Cancelar</button>
 
                                </div>


                            </div>

                        </form>

                    </div>

                </div>
           </>
    );
}
    