import React, {useState} from 'react';

function App() {
  let [data, setData] = useState('');
  let [name, setName] = useState('');

  function getData(){
  fetch(`https://greetapi2-yg-as.azurewebsites.net/greet/hi?name=${name}`)
  .then(res => res.json())
  .then(d => setData(d));
  }
  
  const value = 'World';
  
  return <>
    <div>Hello {value}</div>
    <label for="name">Name</label>
    <input name="Name" onChange={e => setName(e.target.value)}>
    <button onClick={getData}>Call api</button>
    
    <div> {data} </div>
    </>;
}

export default App;
