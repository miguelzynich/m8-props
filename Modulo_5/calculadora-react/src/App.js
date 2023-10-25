import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Button from './Button';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Input value={result} />
        <div className="keypad">
          <Button onClick={clear} id="clear" name="clear" text="Limpar" />
          <Button onClick={handleClick} id="1" name="1" text="1" />
          <Button onClick={handleClick} id="2" name="2" text="2" />
          <Button onClick={handleClick} id="3" name="3" text="3" />
          <Button onClick={handleClick} id="add" name="+" text="+" />
          <Button onClick={handleClick} id="4" name="4" text="4" />
          <Button onClick={handleClick} id="5" name="5" text="5" />
          <Button onClick={handleClick} id="6" name="6" text="6" />
          <Button onClick={handleClick} id="subtract" name="-" text="-" />
          <Button onClick={handleClick} id="7" name="7" text="7" />
          <Button onClick={handleClick} id="8" name="8" text="8" />
          <Button onClick={handleClick} id="9" name="9" text="9" />
          <Button onClick={handleClick} id="multiply" name="*" text="*" />
          <Button onClick={handleClick} id="decimal" name="." text="." />
          <Button onClick={handleClick} id="0" name="0" text="0" />
          <Button onClick={handleClick} id="comma" name="," text="," />
          <Button onClick={handleClick} id="divide" name="/" text="/" />
          <Button onClick={calculate} id="result" name="result" text="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
