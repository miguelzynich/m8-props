import React, { useState } from 'react';
import Formulario from './Formulario';
import './App.css'; 
const App = () => {
  const [respostas, setRespostas] = useState([]);

  const enviarResposta = (formData) => {
    formData.idade = parseInt(formData.idade, 10);
    setRespostas([...respostas, formData]);
  };

  const ordenarCrescente = () => {
    const respostasOrdenadas = [...respostas].sort((a, b) => a.idade - b.idade);
    setRespostas(respostasOrdenadas);
  };

  const ordenarDecrescente = () => {
    const respostasOrdenadas = [...respostas].sort((a, b) => b.idade - a.idade);
    setRespostas(respostasOrdenadas);
  };

  return (
    <div className="App">
      <Formulario enviarResposta={enviarResposta} />

      {}
      <div className="sort-buttons">
        <button className="sort-button" onClick={ordenarCrescente}>
          Ordenar Crescente
        </button>
        <button className="sort-button" onClick={ordenarDecrescente}>
          Ordenar Decrescente
        </button>
      </div>

      {}
      <ul>
        {respostas.map((resposta, index) => (
          <li key={index}>
            {resposta.nome} - {resposta.idade} anos - Gênero: {resposta.genero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
