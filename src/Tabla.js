import React from 'react';

const Tabla = ({ datos }) => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
