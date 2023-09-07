// About.js
import React, { useState } from 'react';

function About() {
  const [msj,setMsj]=useState("");
  const [elementos,setElementos]=useState([]);
  const [id,setId]=useState("");
  const [nombre,setNombre]=useState("");
  

  function handleSubmit(e){
    e.preventDefault()
    
   setElementos(actuales=>{
    return [...actuales,{"id":id,"nombre":nombre},]
   })
    
   setId("")
   setNombre("")

  }

  return (
    <div className='container'>
      <input type='text' onChange={e=>setMsj(e.target.value)} />
      <h1>Acerca de {msj}</h1>
      <p>Somos una empresa dedicada a...</p>
      <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input type='number' id='id' value={id} onChange={e=>setId(e.target.value)} required></input>
        <label>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={e=>setNombre(e.target.value)} required></input>
        <button type='submit'>Enviar</button>
      </form>
      <table className='table table-bordered'>

        <thead>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
          </tr>
        </thead>

        <tbody>
        {elementos.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  );
}

export default About;
