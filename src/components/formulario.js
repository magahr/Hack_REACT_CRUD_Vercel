import React, { useState } from "react";

export function Formulario() {
    const [content, setContent] = useState(<FormularioList showForm={showForm}/>);

    function showList() {
        setContent(<FormularioList  showForm={showForm} />);
    }

    function showForm() {
        setContent{<ProductForm showList={showList}/>};
    }
    
    return (
       
        <div className="container my-5">
           { content}
        </div>
    )
}
function FormularioList(props){
    return (
           <>
                <h2 className="text-center mb-3">Lista de Usuarios</h2>
                <button onClick={() => props.showForm()} type="button" className="btn btn-primary me-2">Crear</button>
           </>
    );
}
function FormularioForm(props){
    return (
           <>
                <h2 className="text-center mb-3">Crear nuevo Usuario</h2>
                <button onClick={() => props.showList()}type="button" className="btn btn-secundary me-2">Cancelar</button>
           </>
    );
}
