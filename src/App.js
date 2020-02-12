import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import d from './pics/Dhruva01.jpg'
import r from './pics/Rakshasa0.jpg'
import s from './pics/samhara01.jpg'
import t from './pics/Thandava01.jpg'


class App extends Component {
  constructor() {
    super();
  this.state ={
    data :[]
  };
  }
  componentDidMount() {
  
    fetch('http://5e423ac6f6128600148ad1fc.mockapi.io/score')
    .then(res =>res.json())
    .then((res) =>{console.log(res)
    this.setState({data: res})
    
  console.log(this.state.data)})
    .catch((error)=>console.log(error))
  }
  render() {
  return (
  
    <div className="App">
     
      <div className = "title">
        <div className="cont">
        <h2 className = "text">Layatharang</h2>
        </div>
        <div className="cont1">
        <h2 className ="text">Chakravyuh</h2>
        </div>
        <div className="cont1">
        <h2 className = "text">Overall</h2>
        </div>
      </div>
        <div className = "team">
        <img className = "image" src={d}/>
        <div className = "flagd">
          <h2>Dhruva</h2>
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.dhruva1}</h3>
          ))}
          
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.dhruva2}</h3>
          ))}
          
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.dhruva1+team.dhruva2}</h3>
          ))}
        </div>
        </div>
        
        <div className = "team">
        <img className = "image" src={r}/>
        <div className = "flagr">
          <h2>Rakshasa</h2>
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.rakshasa1}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.rakshasa2}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.rakshasa1+team.rakshasa2}</h3>
          ))}
        </div>
        </div>
        <div className = "team">
        <img className = "image" src={s}/>
        <div className = "flags">
          <h2>Samhara</h2>
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.samhara1}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.samhara2}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.samhara1+team.samhara2}</h3>
          ))}
        </div>
        </div>
        <div className = "team">
        <img className = "image" src={t}/>
        <div className = "flagt">
          <h2>Thandava</h2>
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.thandava1}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.thandava2}</h3>
          ))}
          {this.state.data.map((team)=>(
            <h3 className = "score">{team.thandava1+team.thandava2}</h3>
          ))}
        </div>
        </div>
        
    </div>
  );

}
 }

export default App;
