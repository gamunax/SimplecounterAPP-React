import React from 'react';
import propTypes from 'prop-types';

const firstApp = ({ saludo, subtitulo }) => {

  // const saludo = 'Hola Mundo';

  return (
    <>
    <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
      <p>{ subtitulo }</p>
    </>
    
  );
  
}

firstApp.propTypes = {
  saludo: propTypes.string.isRequired
}

firstApp.defaultProps = {
  subtitulo: 'Soy Yo'
}

export default firstApp;