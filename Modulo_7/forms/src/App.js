import React from 'react';
import Formulario from './Formulario'; // Importe o componente Formulario

const App = () => {
  const enviarResposta = (formData) => {
    // Lógica para lidar com a resposta do formulário
    console.log(formData);
  };

  return (
    <div className="App">
      <Formulario enviarResposta={enviarResposta} /> {/* Passe enviarResposta como uma prop */}
    </div>
  );
};

export default App;
