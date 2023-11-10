import React from 'react';
import Formulario from './Formulario'; 
const App = () => {
  const enviarResposta = (formData) => {
    console.log(formData);
  };

  return (
    <div className="App">
      <Formulario enviarResposta={enviarResposta} /> {/* Passe enviarResposta como uma prop */}
    </div>
  );
};

export default App;
