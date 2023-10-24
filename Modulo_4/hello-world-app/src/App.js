import React, { useState } from 'react';
import './App.css';

function HelloWorld() {
  const styles = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(1);

  setTimeout(() => {
    setIsVisible(false);
  }, 8000);

  const dateTime = new Date().toLocaleString();

  return (
    <div className="hello-world">
      <p style={styles}>Hello World! {count}</p>
      <p style={{ color: 'blue', fontSize: '18px', fontStyle: 'italic' }}>
        Hello World! {count + 1}
      </p>
      <p style={{ color: 'green', fontSize: '20px', fontFamily: 'Arial' }}>
        Hello World! {count + 2}
      </p>
      {isVisible && <p>Hello World! - Esse é especial e só aparece por 8 segundos. {count + 3}</p>}
      {!isVisible && <p>Goodbye!</p>}
      <p style={{ color: 'purple', fontSize: '22px', fontFamily: 'Verdana' }}>
        Hello World! {count + 5}
      </p>
      <p style={{ color: 'orange', fontSize: '28px', fontFamily: 'Courier' }}>
        Hello World! {count + 6}
      </p>
      <p style={{ color: 'gray', fontSize: '26px', fontFamily: 'Tahoma' }}>
        Hello World! {count + 7}
      </p>
      <p style={{ color: 'teal', fontSize: '30px', fontFamily: 'Georgia' }}>
        Hello World! {count + 8}
      </p>
      <p style={{ color: 'navy', fontSize: '32px', fontFamily: 'Impact' }}>
        Hello World! {count + 9}
      </p>
      <p style={{ color: 'maroon', fontSize: '36px', fontFamily: 'Garamond' }}>
        Hello World! {count + 10}
      </p>
      <p>{dateTime}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HelloWorld />
    </div>
  );
}

export default App;
