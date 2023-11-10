import React, { useState } from 'react';
import './App.css';

const Formulario = ({ enviarResposta }) => {
  const [formData, setFormData] = useState({ nome: '', idade: 0, genero: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    enviarResposta(formData);
    console.log('Formulário enviado:', formData);
    setFormData({ nome: '', idade: 0, genero: '' }); 
    window.location.reload(); 
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-group radio-options">
        <span>Gênero:</span>
        <div>
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              checked={formData.genero === 'Masculino'}
              onChange={handleInputChange}
            />{' '}
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Feminino"
              checked={formData.genero === 'Feminino'}
              onChange={handleInputChange}
            />{' '}
            Feminino
          </label>
        </div>
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
