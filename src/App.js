import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [jsonData, setData] = useState({jobs:[], children:[]});
  const request = () => { 
        fetch("http://localhost/output") 
        .then((response) => response.json()) 
        .then((data) => { 
        setData(data);
        console.log(data);
        }); 
  }
  useEffect(() => {    
    request();
  }, []);

  return (
    <div className="App">
      <div className='menu'>
        <a href={jsonData.last} >last</a>
        <a href={jsonData.self} >self</a>
        <a href={jsonData.next} >next</a>
      </div>
     <div className="container">
      
      <div id="box_1">
        <div className='name'>
        <b>
          {jsonData.firstName + " " + jsonData.lastName }
          </b>
        </div>
          
        <div className="info">
          age: <b>{jsonData.age}</b><br/>
          gender: <b>{jsonData.gender}</b><br/>

          phone: <b>{jsonData.phone}</b><br/>

          address: <b>{jsonData.address}</b><br/>
          hairColor: <b>{jsonData.hairColor}</b><br/>
          maxRunDistance: <b>{jsonData.maxRunDistance}</b><br/>
          cpf: <b>{jsonData.cpf}</b><br/>
          cnpj: <b>{jsonData.cnpj}</b><br/>
          pretendSalary: <b>{jsonData.pretendSalary}</b><br/>


        </div>
      </div>
      <div className="box_23">
        {jsonData.jobs.map((item, index)=>(
          <div class="job" id={"box_"+(index+2)}>
            <b style={{fontSize: "x-large"}}>{item.title}</b><br/>
            {item.salary}
          </div>
        ))}
      </div>
      <div className="box">
        {jsonData.children.map((item, index)=>(
          <div id="box_4">
            <b style={{fontSize: "x-large"}}>{item.name}</b><br/>
            age: {item.age}<br/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
